import { OnDestroy } from "@angular/core";
import * as i0 from "@angular/core";
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
export declare class DemlMenuButton implements OnDestroy {
    readonly menu: import("deml-ui").DemlMenu;
    private readonly el;
    readonly hostType: string | null;
    constructor();
    ngOnDestroy(): void;
    onClick(event: Event): void;
    onKeydown(event: KeyboardEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DemlMenuButton, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<DemlMenuButton, "[demlMenuButton]", never, {}, {}, never, never, true, never>;
}
//# sourceMappingURL=menu-button.d.ts.map