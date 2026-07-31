import {
  Directive,
  ElementRef,
  OnDestroy,
  afterNextRender,
  inject,
} from "@angular/core";
import { DEML_MENU } from "./menu-context";

/**
 * Menu panel / list container (`role="menu"`).
 *
 * Hidden when closed. Completely unstyled — position/animate with your CSS.
 *
 * @example
 * ```html
 * <div demlMenuItems class="menu__panel">…</div>
 * ```
 */
@Directive({
  selector: "[demlMenuItems]",
  host: {
    role: "menu",
    "[id]": "menu.menuId",
    "[attr.aria-labelledby]": "menu.buttonId",
    "[attr.tabindex]": "menu.isOpen() ? -1 : null",
    "[hidden]": "!menu.isOpen()",
    "[attr.data-state]": "menu.isOpen() ? 'open' : 'closed'",
    "(keydown)": "menu.onMenuKeydown($event)",
  },
})
export class DemlMenuItems implements OnDestroy {
  readonly menu = inject(DEML_MENU);
  private readonly el = inject(ElementRef<HTMLElement>);

  constructor() {
    afterNextRender(() => {
      this.menu.registerItemsEl(this.el.nativeElement);
    });
  }

  ngOnDestroy(): void {
    this.menu.registerItemsEl(null);
  }
}
