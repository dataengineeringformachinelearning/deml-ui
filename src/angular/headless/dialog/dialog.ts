import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  afterNextRender,
  computed,
  effect,
  inject,
  input,
  model,
  output,
  viewChild,
} from "@angular/core";
import { createFocusTrap } from "../core/focus-trap";
import { resolveOpen } from "../core/open-state";
import { DEML_DIALOG } from "./dialog-context";

/**
 * Headless Dialog (Modal) root.
 *
 * Completely unstyled. Built on the native `<dialog>` element + `showModal()`
 * so the browser provides the top layer (modal stacking). Optional `portal`
 * moves the `<dialog>` to `document.body` to escape overflow/transform traps.
 *
 * Accessibility contract:
 * - `role="dialog"` (native `<dialog>`) + `aria-modal="true"` via `showModal()`
 * - Focus trap while open; focus restored to the previously focused element on close
 * - Escape closes when `dismissible` is true
 * - Backdrop click closes when `closeOnBackdrop` is true
 * - Label via `[demlDialogTitle]` / `[demlDialogDescription]` or `ariaLabel`
 *
 * Controlled: `[(open)]="isOpen"`.
 * Uncontrolled: omit binding; call `show()` / `hide()`, or set `defaultOpen`.
 *
 * Composition:
 * ```html
 * <deml-dialog [(open)]="open">
 *   <div demlDialogPanel class="modal">
 *     <h2 demlDialogTitle>Title</h2>
 *     <p demlDialogDescription>Description</p>
 *     <button type="button" demlDialogClose>Close</button>
 *   </div>
 * </deml-dialog>
 * ```
 */
@Component({
  selector: "deml-dialog",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: DEML_DIALOG, useExisting: DemlDialog }],
  template: `
    <dialog
      #dialogEl
      [attr.aria-modal]="isOpen() ? true : null"
      [attr.aria-labelledby]="titleId()"
      [attr.aria-describedby]="descriptionId()"
      [attr.aria-label]="titleId() ? null : ariaLabel()"
      [attr.data-state]="isOpen() ? 'open' : 'closed'"
      (close)="onNativeClose()"
      (click)="onDialogClick($event)"
      (cancel)="onCancel($event)"
    >
      <ng-content />
    </dialog>
  `,
  /**
   * Structural only (`display: contents`) so the host does not create a box.
   * Not a visual style — consumers style `dialog` / `[demlDialogPanel]`.
   */
  styles: [
    `
      :host {
        display: contents;
      }
    `,
  ],
})
export class DemlDialog {
  private readonly destroyRef = inject(DestroyRef);
  private readonly dialogRef =
    viewChild<ElementRef<HTMLDialogElement>>("dialogEl");

  /**
   * Open state. Bind for controlled usage.
   * When `null`, falls back to `defaultOpen` (uncontrolled).
   */
  readonly open = model<boolean | null>(null);

  /** Uncontrolled initial open state when `open` is null. */
  readonly defaultOpen = input(false);

  /**
   * When true (default), append the `<dialog>` to `document.body`.
   * Avoids being clipped by parent `overflow` / `transform` / stacking contexts.
   * Native `showModal()` already uses the top layer; portal is for DOM ancestry.
   */
  readonly portal = input(true);

  /** When true (default), Escape closes the dialog. */
  readonly dismissible = input(true);

  /** When true (default), clicking the backdrop (the `<dialog>` itself) closes. */
  readonly closeOnBackdrop = input(true);

  /** Fallback accessible name when no title directive is present. */
  readonly ariaLabel = input<string | null>("Dialog");

  /** Emits after the dialog opens. */
  readonly opened = output<void>();

  /** Emits after the dialog closes. */
  readonly closed = output<void>();

  /** @internal — set by title/description directives */
  readonly titleId = model<string | null>(null);
  /** @internal */
  readonly descriptionId = model<string | null>(null);

  private releaseTrap: (() => void) | null = null;
  private skipCloseEmit = false;
  private portaled = false;
  private placeholder: Comment | null = null;
  private prevOpen: boolean | null = null;

  /** Effective open state (controlled `open` or `defaultOpen`). */
  readonly isOpen = computed(() => resolveOpen(this.open(), this.defaultOpen()));

  constructor() {
    afterNextRender(() => {
      this.applyPortal();
      if (this.isOpen()) this.syncOpen(true, true);
    });

    effect(() => {
      const open = this.isOpen();
      if (this.prevOpen == null) {
        this.prevOpen = open;
        return;
      }
      if (open === this.prevOpen) return;
      this.prevOpen = open;
      this.syncOpen(open, false);
    });

    this.destroyRef.onDestroy(() => {
      this.releaseTrap?.();
      this.releaseTrap = null;
      this.teardownPortal();
    });
  }

  /** Open the dialog. */
  show(): void {
    this.open.set(true);
  }

  /** Close the dialog (always allowed programmatically). */
  hide(): void {
    this.open.set(false);
  }

  /** @internal */
  registerTitle(id: string | null): void {
    this.titleId.set(id);
  }

  /** @internal */
  registerDescription(id: string | null): void {
    this.descriptionId.set(id);
  }

  onNativeClose(): void {
    this.releaseTrap?.();
    this.releaseTrap = null;
    if (this.open() !== false) this.open.set(false);
    if (!this.skipCloseEmit) this.closed.emit();
  }

  /**
   * Native `cancel` fires on Escape before `close`.
   * Prevent default when non-dismissible so the dialog stays open.
   */
  onCancel(event: Event): void {
    if (!this.dismissible()) {
      event.preventDefault();
      return;
    }
    this.open.set(false);
  }

  onDialogClick(event: MouseEvent): void {
    if (!this.closeOnBackdrop() || !this.dismissible()) return;
    // Backdrop clicks target the <dialog> element itself, not panel children.
    if (event.target === this.dialogRef()?.nativeElement) {
      this.open.set(false);
    }
  }

  private syncOpen(open: boolean, _initial: boolean): void {
    const el = this.dialogRef()?.nativeElement;
    if (!el) return;

    if (open && !el.open) {
      el.showModal();
      this.releaseTrap?.();
      this.releaseTrap = createFocusTrap(el);
      this.opened.emit();
    } else if (!open && el.open) {
      this.skipCloseEmit = true;
      el.close();
      this.releaseTrap?.();
      this.releaseTrap = null;
      this.skipCloseEmit = false;
      this.closed.emit();
    }
  }

  private applyPortal(): void {
    if (!this.portal() || this.portaled) return;
    const el = this.dialogRef()?.nativeElement;
    if (!el || !el.parentNode) return;

    this.placeholder = document.createComment("deml-dialog-portal");
    el.parentNode.insertBefore(this.placeholder, el);
    document.body.appendChild(el);
    this.portaled = true;
  }

  private teardownPortal(): void {
    if (!this.portaled) return;
    const el = this.dialogRef()?.nativeElement;
    if (el?.open) {
      try {
        el.close();
      } catch {
        /* ignore */
      }
    }
    if (this.placeholder?.parentNode && el) {
      this.placeholder.parentNode.insertBefore(el, this.placeholder);
      this.placeholder.parentNode.removeChild(this.placeholder);
    } else {
      el?.remove();
    }
    this.placeholder = null;
    this.portaled = false;
  }
}
