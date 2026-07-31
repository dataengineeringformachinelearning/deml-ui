import {
  Directive,
  ElementRef,
  OnDestroy,
  afterNextRender,
  inject,
} from "@angular/core";
import { DEML_MENU } from "./menu-context";

/**
 * Menu trigger. Prefer a native `<button type="button">`.
 *
 * Accessibility:
 * - `aria-haspopup="menu"`
 * - `aria-expanded` / `aria-controls`
 *
 * Keyboard (closed): Enter / Space / ArrowDown open (+ focus first item);
 * ArrowUp opens and focuses last item.
 *
 * @example
 * ```html
 * <button type="button" demlMenuButton class="menu__trigger">Actions</button>
 * ```
 */
@Directive({
  selector: "[demlMenuButton]",
  host: {
    "[id]": "menu.buttonId",
    "[attr.type]": "hostType",
    "[attr.aria-haspopup]": "'menu'",
    "[attr.aria-expanded]": "menu.isOpen()",
    "[attr.aria-controls]": "menu.menuId",
    "[attr.disabled]": "menu.disabled() ? true : null",
    "[attr.data-state]": "menu.isOpen() ? 'open' : 'closed'",
    "(click)": "onClick($event)",
    "(keydown)": "onKeydown($event)",
  },
})
export class DemlMenuButton implements OnDestroy {
  readonly menu = inject(DEML_MENU);
  private readonly el = inject(ElementRef<HTMLElement>);

  readonly hostType =
    this.el.nativeElement.tagName === "BUTTON" ? "button" : null;

  constructor() {
    afterNextRender(() => {
      this.menu.registerButton(this.el.nativeElement);
    });
  }

  ngOnDestroy(): void {
    this.menu.registerButton(null);
  }

  onClick(event: Event): void {
    event.preventDefault();
    if (this.menu.disabled()) return;
    this.menu.toggle();
  }

  onKeydown(event: KeyboardEvent): void {
    this.menu.onButtonKeydown(event);
  }
}
