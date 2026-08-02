import { OnDestroy } from "@angular/core";
import * as i0 from "@angular/core";
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
export declare class DemlMenuItems implements OnDestroy {
    readonly menu: import("deml-ui").DemlMenu;
    private readonly el;
    constructor();
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DemlMenuItems, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<DemlMenuItems, "[demlMenuItems]", never, {}, {}, never, never, true, never>;
}
//# sourceMappingURL=menu-items.d.ts.map