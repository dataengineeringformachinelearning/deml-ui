import * as i0 from '@angular/core';
import { ViewEncapsulation, Component, InjectionToken, inject, ElementRef, input, computed, Directive, model, contentChildren, afterNextRender, ChangeDetectionStrategy, DestroyRef, viewChild, output, effect, signal } from '@angular/core';

/* AUTO-GENERATED from components/accordion/accordion.html — do not edit */
const DEML_TEMPLATE$1F = "<div class=\"accordion\">\n      <details class=\"accordion__item\" open>\n        <summary class=\"accordion__trigger\">Section one</summary>\n        <div class=\"accordion__panel\">Content for section one.</div>\n      </details>\n      <details class=\"accordion__item\">\n        <summary class=\"accordion__trigger\">Section two</summary>\n        <div class=\"accordion__panel\">Content for section two.</div>\n      </details>\n    </div>";
class DemlAccordion {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$1F;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlAccordion, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.25", type: DemlAccordion, isStandalone: true, selector: "deml-accordion", ngImport: i0, template: "", isInline: true, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlAccordion, decorators: [{
            type: Component,
            args: [{
                    selector: "deml-accordion",
                    standalone: true,
                    template: "",
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

/* AUTO-GENERATED from components/activity-list/activity-list.html — do not edit */
const DEML_TEMPLATE$1E = "<ul class=\"activity-list\" aria-label=\"Recent activity\">\n      <li class=\"activity-list__item\">\n        <time datetime=\"2026-07-30T12:00:00Z\">12:00</time>\n        <p class=\"activity-list__title\">Deploy completed</p>\n        <p class=\"activity-list__meta\">production</p>\n      </li>\n      <li class=\"activity-list__item\">\n        <time datetime=\"2026-07-30T11:40:00Z\">11:40</time>\n        <p class=\"activity-list__title\">Config updated</p>\n        <p class=\"activity-list__meta\">settings</p>\n      </li>\n    </ul>";
class DemlActivityList {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$1E;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlActivityList, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.25", type: DemlActivityList, isStandalone: true, selector: "deml-activity-list", ngImport: i0, template: "", isInline: true, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlActivityList, decorators: [{
            type: Component,
            args: [{
                    selector: "deml-activity-list",
                    standalone: true,
                    template: "",
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

/* AUTO-GENERATED from components/app-footer/app-footer.html — do not edit */
const DEML_TEMPLATE$1D = "<footer class=\"app-footer\">\n      <p class=\"app-footer__copy\">© Product</p>\n      <nav class=\"app-footer__nav\" aria-label=\"Footer\">\n        <a href=\"#\">Privacy</a>\n        <a href=\"#\">Terms</a>\n      </nav>\n    </footer>";
class DemlAppFooter {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$1D;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlAppFooter, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.25", type: DemlAppFooter, isStandalone: true, selector: "deml-app-footer", ngImport: i0, template: "", isInline: true, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlAppFooter, decorators: [{
            type: Component,
            args: [{
                    selector: "deml-app-footer",
                    standalone: true,
                    template: "",
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

/* AUTO-GENERATED from components/app-header/app-header.html — do not edit */
const DEML_TEMPLATE$1C = "<header class=\"app-header\">\n      <a class=\"app-header__brand\" href=\"#\">Product</a>\n      <nav class=\"app-header__nav\" aria-label=\"App\">\n        <a href=\"#\">Home</a>\n        <a href=\"#\">Docs</a>\n      </nav>\n      <div class=\"app-header__actions\">\n        <button type=\"button\">Account</button>\n      </div>\n    </header>";
class DemlAppHeader {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$1C;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlAppHeader, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.25", type: DemlAppHeader, isStandalone: true, selector: "deml-app-header", ngImport: i0, template: "", isInline: true, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlAppHeader, decorators: [{
            type: Component,
            args: [{
                    selector: "deml-app-header",
                    standalone: true,
                    template: "",
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

/* AUTO-GENERATED from components/app-layout/app-layout.html — do not edit */
const DEML_TEMPLATE$1B = "<div class=\"app-layout\">\n      <aside class=\"app-layout__nav\" aria-label=\"App navigation\">Nav</aside>\n      <div class=\"app-layout__main\">\n        <header class=\"app-layout__header\">Header</header>\n        <main class=\"app-layout__content\">Main content</main>\n      </div>\n      <aside class=\"app-layout__tools\" aria-label=\"Tools\">Tools</aside>\n    </div>";
class DemlAppLayout {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$1B;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlAppLayout, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.25", type: DemlAppLayout, isStandalone: true, selector: "deml-app-layout", ngImport: i0, template: "", isInline: true, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlAppLayout, decorators: [{
            type: Component,
            args: [{
                    selector: "deml-app-layout",
                    standalone: true,
                    template: "",
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

/* AUTO-GENERATED from components/app-sidebar/app-sidebar.html — do not edit */
const DEML_TEMPLATE$1A = "<aside class=\"app-sidebar\" aria-label=\"Dashboard\">\n      <p class=\"app-sidebar__brand\">Product</p>\n      <nav class=\"app-sidebar__nav\">\n        <a href=\"#\" aria-current=\"page\">Dashboard</a>\n        <a href=\"#\">Pipelines</a>\n        <a href=\"#\">Settings</a>\n      </nav>\n    </aside>";
class DemlAppSidebar {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$1A;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlAppSidebar, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.25", type: DemlAppSidebar, isStandalone: true, selector: "deml-app-sidebar", ngImport: i0, template: "", isInline: true, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlAppSidebar, decorators: [{
            type: Component,
            args: [{
                    selector: "deml-app-sidebar",
                    standalone: true,
                    template: "",
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

/* AUTO-GENERATED from components/area-chart/area-chart.html — do not edit */
const DEML_TEMPLATE$1z = "<div class=\"area-chart-frame\" role=\"img\" aria-label=\"Area chart\">\n      <svg\n        class=\"area-chart\"\n        viewBox=\"0 0 360 150\"\n        preserveAspectRatio=\"xMidYMid meet\"\n        aria-hidden=\"true\"\n        focusable=\"false\"\n      >\n        <line class=\"area-chart-baseline\" x1=\"32\" y1=\"120\" x2=\"348\" y2=\"120\" />\n        <polyline\n          class=\"area-chart-line\"\n          fill=\"none\"\n          points=\"32,110 80,90 140,95 200,50 260,70 320,40\"\n        />\n      </svg>\n    </div>";
class DemlAreaChart {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$1z;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlAreaChart, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.25", type: DemlAreaChart, isStandalone: true, selector: "deml-area-chart", ngImport: i0, template: "", isInline: true, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlAreaChart, decorators: [{
            type: Component,
            args: [{
                    selector: "deml-area-chart",
                    standalone: true,
                    template: "",
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

/* AUTO-GENERATED from components/article/article.html — do not edit */
const DEML_TEMPLATE$1y = "<article class=\"article\"><h1>Article title</h1><p>Body copy.</p></article>";
class DemlArticle {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$1y;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlArticle, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.25", type: DemlArticle, isStandalone: true, selector: "deml-article", ngImport: i0, template: "", isInline: true, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlArticle, decorators: [{
            type: Component,
            args: [{
                    selector: "deml-article",
                    standalone: true,
                    template: "",
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

/* AUTO-GENERATED from components/autocomplete/autocomplete.html — do not edit */
const DEML_TEMPLATE$1x = "<div class=\"autocomplete\">\n      <label for=\"autocomplete-input\">Fruit</label>\n      <input id=\"autocomplete-input\" type=\"text\" name=\"fruit\" autocomplete=\"off\" aria-autocomplete=\"list\" aria-controls=\"autocomplete-list\" aria-expanded=\"true\" />\n      <ul id=\"autocomplete-list\" class=\"autocomplete__list\" role=\"listbox\">\n        <li role=\"option\" aria-selected=\"true\">Apple</li>\n        <li role=\"option\">Apricot</li>\n        <li role=\"option\">Avocado</li>\n      </ul>\n    </div>";
class DemlAutocomplete {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$1x;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlAutocomplete, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.25", type: DemlAutocomplete, isStandalone: true, selector: "deml-autocomplete", ngImport: i0, template: "", isInline: true, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlAutocomplete, decorators: [{
            type: Component,
            args: [{
                    selector: "deml-autocomplete",
                    standalone: true,
                    template: "",
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

/* AUTO-GENERATED from components/avatar/avatar.html — do not edit */
const DEML_TEMPLATE$1w = "<span class=\"avatar\" aria-label=\"Ada Lovelace\">\n      <span class=\"avatar__initials\" aria-hidden=\"true\">AL</span>\n    </span>\n    <span class=\"avatar\" aria-label=\"User photo\">\n      <img class=\"avatar__image\" src=\"\" alt=\"\" width=\"40\" height=\"40\" />\n    </span>";
class DemlAvatar {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$1w;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlAvatar, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.25", type: DemlAvatar, isStandalone: true, selector: "deml-avatar", ngImport: i0, template: "", isInline: true, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlAvatar, decorators: [{
            type: Component,
            args: [{
                    selector: "deml-avatar",
                    standalone: true,
                    template: "",
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

/* AUTO-GENERATED from components/badge/badge.html — do not edit */
const DEML_TEMPLATE$1v = "<span class=\"badge\">Badge</span>\n    <span class=\"badge\" data-tone=\"success\">Success</span>\n    <span class=\"badge\" data-tone=\"warning\">Warning</span>\n    <span class=\"badge\" data-tone=\"danger\">Danger</span>";
class DemlBadge {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$1v;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlBadge, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.25", type: DemlBadge, isStandalone: true, selector: "deml-badge", ngImport: i0, template: "", isInline: true, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlBadge, decorators: [{
            type: Component,
            args: [{
                    selector: "deml-badge",
                    standalone: true,
                    template: "",
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

/* AUTO-GENERATED from components/banner/banner.html — do not edit */
const DEML_TEMPLATE$1u = "<div class=\"banner banner--hero\" data-variant=\"hero\">\n      <p class=\"preheader\">DEML</p>\n      <h1 class=\"banner-heading\">Control plane for ML data.</h1>\n      <p class=\"lede\">Identity, status, analytics, and learning in one warm-ash surface.</p>\n      <div class=\"banner-actions\">\n        <div class=\"button-group\">\n          <a class=\"button button--primary\" href=\"#\">Dashboard</a>\n          <a class=\"button button--secondary\" href=\"#\">Explore</a>\n        </div>\n      </div>\n    </div>";
class DemlBanner {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$1u;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlBanner, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.25", type: DemlBanner, isStandalone: true, selector: "deml-banner", ngImport: i0, template: "", isInline: true, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlBanner, decorators: [{
            type: Component,
            args: [{
                    selector: "deml-banner",
                    standalone: true,
                    template: "",
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

/* AUTO-GENERATED from components/bar-chart/bar-chart.html — do not edit */
const DEML_TEMPLATE$1t = "<ul class=\"bar-chart\" role=\"list\" aria-label=\"Bar chart\">\n      <li class=\"bar-chart-row\">\n        <div class=\"bar-chart-meta\">\n          <span class=\"bar-chart-label\">Alpha</span>\n          <span class=\"bar-chart-value\">80%</span>\n        </div>\n        <div class=\"bar-chart-track\" aria-hidden=\"true\">\n          <div class=\"bar-chart-fill\" style=\"width: 80%\"></div>\n        </div>\n      </li>\n      <li class=\"bar-chart-row\">\n        <div class=\"bar-chart-meta\">\n          <span class=\"bar-chart-label\">Beta</span>\n          <span class=\"bar-chart-value\">55%</span>\n        </div>\n        <div class=\"bar-chart-track\" aria-hidden=\"true\">\n          <div class=\"bar-chart-fill\" style=\"width: 55%\"></div>\n        </div>\n      </li>\n      <li class=\"bar-chart-row\">\n        <div class=\"bar-chart-meta\">\n          <span class=\"bar-chart-label\">Gamma</span>\n          <span class=\"bar-chart-value\">35%</span>\n        </div>\n        <div class=\"bar-chart-track\" aria-hidden=\"true\">\n          <div class=\"bar-chart-fill\" style=\"width: 35%\"></div>\n        </div>\n      </li>\n    </ul>";
class DemlBarChart {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$1t;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlBarChart, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.25", type: DemlBarChart, isStandalone: true, selector: "deml-bar-chart", ngImport: i0, template: "", isInline: true, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlBarChart, decorators: [{
            type: Component,
            args: [{
                    selector: "deml-bar-chart",
                    standalone: true,
                    template: "",
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

/* AUTO-GENERATED from components/box/box.html — do not edit */
const DEML_TEMPLATE$1s = "<div class=\"box\">\n      <p>Lightweight content grouping box.</p>\n    </div>";
class DemlBox {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$1s;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlBox, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.25", type: DemlBox, isStandalone: true, selector: "deml-box", ngImport: i0, template: "", isInline: true, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlBox, decorators: [{
            type: Component,
            args: [{
                    selector: "deml-box",
                    standalone: true,
                    template: "",
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

/* AUTO-GENERATED from components/brand/brand.html — do not edit */
const DEML_TEMPLATE$1r = "<a class=\"brand\" href=\"/\" aria-label=\"Product home\">\n      <span class=\"brand__mark\" aria-hidden=\"true\"></span>\n      <span class=\"brand__wordmark\">Product</span>\n    </a>";
class DemlBrand {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$1r;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlBrand, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.25", type: DemlBrand, isStandalone: true, selector: "deml-brand", ngImport: i0, template: "", isInline: true, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlBrand, decorators: [{
            type: Component,
            args: [{
                    selector: "deml-brand",
                    standalone: true,
                    template: "",
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

/* AUTO-GENERATED from components/breadcrumbs/breadcrumbs.html — do not edit */
const DEML_TEMPLATE$1q = "<nav class=\"breadcrumbs\" aria-label=\"Breadcrumb\">\n      <ol class=\"breadcrumbs__list\">\n        <li><a href=\"#\">Home</a></li>\n        <li><a href=\"#\">Library</a></li>\n        <li aria-current=\"page\">Current page</li>\n      </ol>\n    </nav>";
class DemlBreadcrumbs {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$1q;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlBreadcrumbs, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.25", type: DemlBreadcrumbs, isStandalone: true, selector: "deml-breadcrumbs", ngImport: i0, template: "", isInline: true, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlBreadcrumbs, decorators: [{
            type: Component,
            args: [{
                    selector: "deml-breadcrumbs",
                    standalone: true,
                    template: "",
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

/* AUTO-GENERATED from components/bulk-toolbar/bulk-toolbar.html — do not edit */
const DEML_TEMPLATE$1p = "<div class=\"bulk-toolbar\" role=\"toolbar\" aria-label=\"Bulk actions\">\n      <span class=\"bulk-toolbar__count\">3 selected</span>\n      <button type=\"button\">Archive</button>\n      <button type=\"button\">Delete</button>\n      <button type=\"button\">Clear selection</button>\n    </div>";
class DemlBulkToolbar {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$1p;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlBulkToolbar, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.25", type: DemlBulkToolbar, isStandalone: true, selector: "deml-bulk-toolbar", ngImport: i0, template: "", isInline: true, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlBulkToolbar, decorators: [{
            type: Component,
            args: [{
                    selector: "deml-bulk-toolbar",
                    standalone: true,
                    template: "",
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

/* AUTO-GENERATED from components/button/button.html — do not edit */
const DEML_TEMPLATE$1o = "<button type=\"button\" class=\"button button--primary\">Primary</button>\n    <button type=\"button\" class=\"button button--secondary\">Secondary</button>\n    <button type=\"button\" class=\"button button--accent\">Accent</button>\n    <button type=\"button\" class=\"button button--primary button--pill\">Pill</button>\n    <button type=\"button\" class=\"button button--primary\" disabled>Disabled</button>";
class DemlButton {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$1o;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlButton, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.25", type: DemlButton, isStandalone: true, selector: "deml-button", ngImport: i0, template: "", isInline: true, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlButton, decorators: [{
            type: Component,
            args: [{
                    selector: "deml-button",
                    standalone: true,
                    template: "",
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

/* AUTO-GENERATED from components/button-group/button-group.html — do not edit */
const DEML_TEMPLATE$1n = "<div class=\"button-group\" role=\"group\" aria-label=\"Alignment\">\n      <button type=\"button\">Left</button>\n      <button type=\"button\">Center</button>\n      <button type=\"button\">Right</button>\n    </div>";
class DemlButtonGroup {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$1n;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlButtonGroup, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.25", type: DemlButtonGroup, isStandalone: true, selector: "deml-button-group", ngImport: i0, template: "", isInline: true, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlButtonGroup, decorators: [{
            type: Component,
            args: [{
                    selector: "deml-button-group",
                    standalone: true,
                    template: "",
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

/* AUTO-GENERATED from components/callout/callout.html — do not edit */
const DEML_TEMPLATE$1m = "<aside class=\"callout\" role=\"status\" data-tone=\"info\">\n      <div class=\"callout__body\">\n        <p class=\"callout__heading\">Callout heading</p>\n        <p class=\"callout__text\">Highlighted message for the user.</p>\n      </div>\n      <button type=\"button\" class=\"callout__close\" aria-label=\"Dismiss\">×</button>\n    </aside>";
class DemlCallout {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$1m;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlCallout, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.25", type: DemlCallout, isStandalone: true, selector: "deml-callout", ngImport: i0, template: "", isInline: true, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlCallout, decorators: [{
            type: Component,
            args: [{
                    selector: "deml-callout",
                    standalone: true,
                    template: "",
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

/* AUTO-GENERATED from components/card/card.html — do not edit */
const DEML_TEMPLATE$1l = "<article class=\"card\">\n      <header class=\"card__header\">\n        <h3 class=\"card__title\">Card title</h3>\n        <p class=\"card__description\">Optional supporting text.</p>\n      </header>\n      <div class=\"card__body\">\n        <p>Card body content.</p>\n      </div>\n      <footer class=\"card__footer\">\n        <button type=\"button\" class=\"button\">Action</button>\n      </footer>\n    </article>";
class DemlCard {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$1l;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlCard, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.25", type: DemlCard, isStandalone: true, selector: "deml-card", ngImport: i0, template: "", isInline: true, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlCard, decorators: [{
            type: Component,
            args: [{
                    selector: "deml-card",
                    standalone: true,
                    template: "",
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

/* AUTO-GENERATED from components/card-grid/card-grid.html — do not edit */
const DEML_TEMPLATE$1k = "<div class=\"card-grid\"><article class=\"card\"><h3 class=\"card-heading\">Card</h3></article></div>";
class DemlCardGrid {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$1k;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlCardGrid, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.25", type: DemlCardGrid, isStandalone: true, selector: "deml-card-grid", ngImport: i0, template: "", isInline: true, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlCardGrid, decorators: [{
            type: Component,
            args: [{
                    selector: "deml-card-grid",
                    standalone: true,
                    template: "",
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

/* AUTO-GENERATED from components/chart/chart.html — do not edit */
const DEML_TEMPLATE$1j = "<figure class=\"chart-figure\">\n      <div class=\"chart-figure__plot\">\n        <svg\n          class=\"chart\"\n          viewBox=\"0 0 360 150\"\n          preserveAspectRatio=\"xMidYMid meet\"\n          role=\"img\"\n          aria-label=\"Sample line chart\"\n        >\n          <line x1=\"0\" y1=\"130\" x2=\"360\" y2=\"130\" stroke=\"currentColor\" opacity=\"0.25\" />\n          <polyline\n            fill=\"none\"\n            stroke=\"currentColor\"\n            stroke-width=\"2\"\n            points=\"0,110 60,85 120,95 180,50 240,70 300,40 360,30\"\n          />\n        </svg>\n      </div>\n      <figcaption>Chart placeholder (native SVG)</figcaption>\n    </figure>";
class DemlChart {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$1j;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlChart, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.25", type: DemlChart, isStandalone: true, selector: "deml-chart", ngImport: i0, template: "", isInline: true, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlChart, decorators: [{
            type: Component,
            args: [{
                    selector: "deml-chart",
                    standalone: true,
                    template: "",
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

/* AUTO-GENERATED from components/chart-card/chart-card.html — do not edit */
const DEML_TEMPLATE$1i = "<article class=\"chart-card\" aria-labelledby=\"chart-card-demo-heading\">\n      <header class=\"chart-card-header\">\n        <h3 class=\"chart-card-heading\" id=\"chart-card-demo-heading\">Traffic</h3>\n        <p class=\"chart-card-meta\">Last 7 days</p>\n      </header>\n      <div class=\"chart-card-body\">\n        <div class=\"area-chart-frame\" role=\"img\" aria-label=\"Sample area chart\">\n          <svg\n            class=\"area-chart\"\n            viewBox=\"0 0 360 150\"\n            preserveAspectRatio=\"xMidYMid meet\"\n            aria-hidden=\"true\"\n            focusable=\"false\"\n          >\n            <polyline\n              class=\"area-chart-line\"\n              fill=\"none\"\n              points=\"32,110 80,90 140,95 200,50 260,70 320,40\"\n            />\n          </svg>\n        </div>\n      </div>\n    </article>";
class DemlChartCard {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$1i;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlChartCard, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.25", type: DemlChartCard, isStandalone: true, selector: "deml-chart-card", ngImport: i0, template: "", isInline: true, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlChartCard, decorators: [{
            type: Component,
            args: [{
                    selector: "deml-chart-card",
                    standalone: true,
                    template: "",
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

/* AUTO-GENERATED from components/chart-empty-state/chart-empty-state.html — do not edit */
const DEML_TEMPLATE$1h = "<div class=\"chart-empty-state\" role=\"status\">\n      <p class=\"chart-empty-state__title\">No chart data</p>\n      <p class=\"chart-empty-state__description\">Data will appear here once available.</p>\n    </div>";
class DemlChartEmptyState {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$1h;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlChartEmptyState, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.25", type: DemlChartEmptyState, isStandalone: true, selector: "deml-chart-empty-state", ngImport: i0, template: "", isInline: true, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlChartEmptyState, decorators: [{
            type: Component,
            args: [{
                    selector: "deml-chart-empty-state",
                    standalone: true,
                    template: "",
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

/* AUTO-GENERATED from components/chart-panel/chart-panel.html — do not edit */
const DEML_TEMPLATE$1g = "<section class=\"chart-panel\" aria-labelledby=\"chart-panel-title\">\n      <header class=\"chart-panel__header\">\n        <h3 id=\"chart-panel-title\">Chart panel</h3>\n        <p class=\"chart-panel__value\">42</p>\n      </header>\n      <div class=\"chart-panel__body\" role=\"img\" aria-label=\"Sample chart placeholder\">\n        <svg\n          class=\"chart\"\n          viewBox=\"0 0 360 150\"\n          preserveAspectRatio=\"xMidYMid meet\"\n          aria-hidden=\"true\"\n          focusable=\"false\"\n        >\n          <polyline\n            fill=\"none\"\n            stroke=\"currentColor\"\n            stroke-width=\"2\"\n            points=\"0,110 60,80 120,95 180,40 240,65 300,30 360,20\"\n          />\n        </svg>\n      </div>\n    </section>";
class DemlChartPanel {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$1g;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlChartPanel, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.25", type: DemlChartPanel, isStandalone: true, selector: "deml-chart-panel", ngImport: i0, template: "", isInline: true, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlChartPanel, decorators: [{
            type: Component,
            args: [{
                    selector: "deml-chart-panel",
                    standalone: true,
                    template: "",
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

/* AUTO-GENERATED from components/checkbox/checkbox.html — do not edit */
const DEML_TEMPLATE$1f = "<label class=\"checkbox\">\n      <input type=\"checkbox\" name=\"checkbox-demo\" />\n      <span class=\"checkbox__label\">Checkbox option</span>\n    </label>";
class DemlCheckbox {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$1f;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlCheckbox, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.25", type: DemlCheckbox, isStandalone: true, selector: "deml-checkbox", ngImport: i0, template: "", isInline: true, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlCheckbox, decorators: [{
            type: Component,
            args: [{
                    selector: "deml-checkbox",
                    standalone: true,
                    template: "",
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

/* AUTO-GENERATED from components/checkbox-field/checkbox-field.html — do not edit */
const DEML_TEMPLATE$1e = "<label class=\"checkbox-field\"><input type=\"checkbox\" /><span>Remember me</span></label>";
class DemlCheckboxField {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$1e;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlCheckboxField, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.25", type: DemlCheckboxField, isStandalone: true, selector: "deml-checkbox-field", ngImport: i0, template: "", isInline: true, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlCheckboxField, decorators: [{
            type: Component,
            args: [{
                    selector: "deml-checkbox-field",
                    standalone: true,
                    template: "",
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

/* AUTO-GENERATED from components/cluster/cluster.html — do not edit */
const DEML_TEMPLATE$1d = "<div class=\"cluster\">\n      <button type=\"button\">Primary</button>\n      <button type=\"button\">Secondary</button>\n      <span class=\"badge\">Tag</span>\n    </div>";
class DemlCluster {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$1d;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlCluster, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.25", type: DemlCluster, isStandalone: true, selector: "deml-cluster", ngImport: i0, template: "", isInline: true, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlCluster, decorators: [{
            type: Component,
            args: [{
                    selector: "deml-cluster",
                    standalone: true,
                    template: "",
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

/* AUTO-GENERATED from components/command/command.html — do not edit */
const DEML_TEMPLATE$1c = "<div class=\"command\" role=\"dialog\" aria-modal=\"true\" aria-label=\"Command palette\">\n      <input class=\"command__input\" type=\"search\" placeholder=\"Type a command…\" aria-controls=\"command-list\" />\n      <ul id=\"command-list\" class=\"command__list\" role=\"listbox\">\n        <li role=\"option\" aria-selected=\"true\">Go to dashboard</li>\n        <li role=\"option\">Open settings</li>\n        <li role=\"option\">Sign out</li>\n      </ul>\n    </div>";
class DemlCommand {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$1c;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlCommand, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.25", type: DemlCommand, isStandalone: true, selector: "deml-command", ngImport: i0, template: "", isInline: true, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlCommand, decorators: [{
            type: Component,
            args: [{
                    selector: "deml-command",
                    standalone: true,
                    template: "",
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

/* AUTO-GENERATED from components/confirm-dialog/confirm-dialog.html — do not edit */
const DEML_TEMPLATE$1b = "<button type=\"button\" class=\"button\" data-deml-open-confirm>Delete item</button>\n    <dialog class=\"confirm-dialog\">\n      <form method=\"dialog\">\n        <h3 class=\"confirm-dialog__title\">Confirm action</h3>\n        <p class=\"confirm-dialog__body\">This cannot be undone.</p>\n        <div class=\"confirm-dialog__actions\">\n          <button type=\"submit\" class=\"button\" value=\"cancel\">Cancel</button>\n          <button type=\"submit\" class=\"button\" data-variant=\"primary\" value=\"confirm\">Confirm</button>\n        </div>\n      </form>\n    </dialog>";
class DemlConfirmDialog {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$1b;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlConfirmDialog, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.25", type: DemlConfirmDialog, isStandalone: true, selector: "deml-confirm-dialog", ngImport: i0, template: "", isInline: true, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlConfirmDialog, decorators: [{
            type: Component,
            args: [{
                    selector: "deml-confirm-dialog",
                    standalone: true,
                    template: "",
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

/* AUTO-GENERATED from components/container/container.html — do not edit */
const DEML_TEMPLATE$1a = "<div class=\"container\">\n      <header class=\"container__header\">\n        <h3 class=\"container__title\">Container</h3>\n        <p class=\"container__description\">Content anatomy wrapper.</p>\n      </header>\n      <div class=\"container__body\">\n        <p>Body content.</p>\n      </div>\n    </div>";
class DemlContainer {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$1a;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlContainer, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.25", type: DemlContainer, isStandalone: true, selector: "deml-container", ngImport: i0, template: "", isInline: true, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlContainer, decorators: [{
            type: Component,
            args: [{
                    selector: "deml-container",
                    standalone: true,
                    template: "",
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

/* AUTO-GENERATED from components/content-layout/content-layout.html — do not edit */
const DEML_TEMPLATE$19 = "<div class=\"content-layout\">\n      <nav class=\"content-layout__breadcrumbs\" aria-label=\"Breadcrumb\">Home / Page</nav>\n      <header class=\"content-layout__header\">\n        <h1>Content layout</h1>\n      </header>\n      <div class=\"content-layout__body\">Body region</div>\n    </div>";
class DemlContentLayout {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$19;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlContentLayout, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.25", type: DemlContentLayout, isStandalone: true, selector: "deml-content-layout", ngImport: i0, template: "", isInline: true, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlContentLayout, decorators: [{
            type: Component,
            args: [{
                    selector: "deml-content-layout",
                    standalone: true,
                    template: "",
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

/* AUTO-GENERATED from components/dashboard-grid/dashboard-grid.html — do not edit */
const DEML_TEMPLATE$18 = "<div class=\"dashboard-grid\">\n      <div class=\"dashboard-grid__cell\" data-size=\"sm\">Tile SM</div>\n      <div class=\"dashboard-grid__cell\" data-size=\"md\">Tile MD</div>\n      <div class=\"dashboard-grid__cell\" data-size=\"sm\">Tile SM</div>\n    </div>";
class DemlDashboardGrid {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$18;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlDashboardGrid, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.25", type: DemlDashboardGrid, isStandalone: true, selector: "deml-dashboard-grid", ngImport: i0, template: "", isInline: true, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlDashboardGrid, decorators: [{
            type: Component,
            args: [{
                    selector: "deml-dashboard-grid",
                    standalone: true,
                    template: "",
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

/* AUTO-GENERATED from components/dropdown/dropdown.html — do not edit */
const DEML_TEMPLATE$17 = "<div class=\"dropdown\">\n      <button type=\"button\" class=\"dropdown__trigger\" aria-haspopup=\"menu\" aria-expanded=\"false\" aria-controls=\"dropdown-menu\">Actions</button>\n      <ul id=\"dropdown-menu\" class=\"dropdown__menu\" role=\"menu\" hidden>\n        <li role=\"none\"><button type=\"button\" role=\"menuitem\">Edit</button></li>\n        <li role=\"none\"><button type=\"button\" role=\"menuitem\">Duplicate</button></li>\n        <li role=\"none\"><button type=\"button\" role=\"menuitem\">Delete</button></li>\n      </ul>\n    </div>";
class DemlDropdown {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$17;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlDropdown, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.25", type: DemlDropdown, isStandalone: true, selector: "deml-dropdown", ngImport: i0, template: "", isInline: true, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlDropdown, decorators: [{
            type: Component,
            args: [{
                    selector: "deml-dropdown",
                    standalone: true,
                    template: "",
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

/* AUTO-GENERATED from components/empty-state/empty-state.html — do not edit */
const DEML_TEMPLATE$16 = "<div class=\"empty-state\" role=\"status\">\n      <p class=\"empty-state__eyebrow\">Empty</p>\n      <p class=\"empty-state__title\">No items yet</p>\n      <p class=\"empty-state__description\">Create your first item to get started.</p>\n      <div class=\"empty-state__actions\">\n        <button type=\"button\">Create item</button>\n      </div>\n    </div>";
class DemlEmptyState {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$16;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlEmptyState, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.25", type: DemlEmptyState, isStandalone: true, selector: "deml-empty-state", ngImport: i0, template: "", isInline: true, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlEmptyState, decorators: [{
            type: Component,
            args: [{
                    selector: "deml-empty-state",
                    standalone: true,
                    template: "",
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

/* AUTO-GENERATED from components/error-state/error-state.html — do not edit */
const DEML_TEMPLATE$15 = "<div class=\"error-state\" role=\"alert\">\n      <p class=\"error-state__title\">Something went wrong</p>\n      <p class=\"error-state__description\">We could not load this resource. Try again.</p>\n      <div class=\"error-state__actions\">\n        <button type=\"button\">Retry</button>\n      </div>\n    </div>";
class DemlErrorState {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$15;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlErrorState, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.25", type: DemlErrorState, isStandalone: true, selector: "deml-error-state", ngImport: i0, template: "", isInline: true, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlErrorState, decorators: [{
            type: Component,
            args: [{
                    selector: "deml-error-state",
                    standalone: true,
                    template: "",
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

/* AUTO-GENERATED from components/explore-card/explore-card.html — do not edit */
const DEML_TEMPLATE$14 = "<article class=\"explore-card\" data-status=\"operational\">\n      <header class=\"explore-card__header\">\n        <div class=\"explore-card__meta\">\n          <span class=\"status-pill\" data-status=\"up\">Operational</span>\n          <span class=\"explore-card__tag\">Public Status Page</span>\n        </div>\n        <h3 class=\"explore-card__title\">Platform Status</h3>\n        <p class=\"explore-card__lede\">Live service health for the DEML control plane.</p>\n      </header>\n      <ul class=\"explore-card__metrics\" role=\"list\">\n        <li class=\"explore-card__metric\">\n          <span class=\"explore-card__metric-label\">Cumulative SLA</span>\n          <span class=\"explore-card__metric-value\">99.98%</span>\n          <span class=\"explore-card__metric-meta\">Based on real telemetry</span>\n        </li>\n        <li class=\"explore-card__metric\">\n          <span class=\"explore-card__metric-label\">P99 Latency</span>\n          <span class=\"explore-card__metric-value\">42ms</span>\n          <span class=\"explore-card__metric-meta\">Last 24h</span>\n        </li>\n        <li class=\"explore-card__metric\">\n          <span class=\"explore-card__metric-label\">Spike Risk</span>\n          <span class=\"explore-card__metric-value\">12.00</span>\n          <span class=\"explore-card__metric-meta\">Dynamic Temporal Forecasting</span>\n        </li>\n        <li class=\"explore-card__metric\">\n          <span class=\"explore-card__metric-label\">Threat Anomaly</span>\n          <span class=\"explore-card__metric-value\">0.40%</span>\n          <span class=\"explore-card__metric-meta\">Active</span>\n        </li>\n      </ul>\n      <div class=\"explore-card__uptime\">\n        <div class=\"explore-card__uptime-head\">\n          <span class=\"explore-card__uptime-label\">Uptime</span>\n          <span class=\"explore-card__uptime-value\">99.9%</span>\n        </div>\n        <div class=\"explore-card__uptime-track\" aria-hidden=\"true\">\n          <span class=\"explore-card__uptime-seg\" data-status=\"up\"></span>\n          <span class=\"explore-card__uptime-seg\" data-status=\"up\"></span>\n          <span class=\"explore-card__uptime-seg\" data-status=\"partial\"></span>\n          <span class=\"explore-card__uptime-seg\" data-status=\"up\"></span>\n          <span class=\"explore-card__uptime-seg\" data-status=\"up\"></span>\n        </div>\n        <p class=\"explore-card__uptime-summary\">No current issues</p>\n      </div>\n      <footer class=\"explore-card__footer\">\n        <a class=\"button button--primary button--pill\" href=\"#\">View status</a>\n      </footer>\n    </article>";
class DemlExploreCard {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$14;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlExploreCard, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.25", type: DemlExploreCard, isStandalone: true, selector: "deml-explore-card", ngImport: i0, template: "", isInline: true, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlExploreCard, decorators: [{
            type: Component,
            args: [{
                    selector: "deml-explore-card",
                    standalone: true,
                    template: "",
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

/* AUTO-GENERATED from components/field/field.html — do not edit */
const DEML_TEMPLATE$13 = "<div class=\"field\" role=\"group\" aria-labelledby=\"field-label\">\n      <label class=\"field__label-wrap\" for=\"field-input\">\n        <span class=\"field__label\" id=\"field-label\">Field label <span class=\"field__required\" aria-hidden=\"true\">*</span></span>\n        <input id=\"field-input\" class=\"field__control\" type=\"text\" name=\"field\" required aria-describedby=\"field-desc\" />\n      </label>\n      <p class=\"field__description\" id=\"field-desc\">Helper text for the control.</p>\n    </div>";
class DemlField {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$13;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlField, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.25", type: DemlField, isStandalone: true, selector: "deml-field", ngImport: i0, template: "", isInline: true, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlField, decorators: [{
            type: Component,
            args: [{
                    selector: "deml-field",
                    standalone: true,
                    template: "",
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

/* AUTO-GENERATED from components/file-upload/file-upload.html — do not edit */
const DEML_TEMPLATE$12 = "<div class=\"file-upload\">\n      <label class=\"file-upload__dropzone\" for=\"file-upload-input\">\n        <span class=\"file-upload__title\">Drop files here</span>\n        <span class=\"file-upload__hint\">or click to browse</span>\n        <input id=\"file-upload-input\" class=\"file-upload__input\" type=\"file\" multiple />\n      </label>\n      <ul class=\"file-upload__list\" aria-label=\"Selected files\"></ul>\n    </div>";
class DemlFileUpload {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$12;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlFileUpload, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.25", type: DemlFileUpload, isStandalone: true, selector: "deml-file-upload", ngImport: i0, template: "", isInline: true, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlFileUpload, decorators: [{
            type: Component,
            args: [{
                    selector: "deml-file-upload",
                    standalone: true,
                    template: "",
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

/* AUTO-GENERATED from components/flashbar/flashbar.html — do not edit */
const DEML_TEMPLATE$11 = "<ul class=\"flashbar\" aria-label=\"Notifications\">\n      <li class=\"flashbar__item\" data-tone=\"info\">\n        <p class=\"flashbar__message\">Informational notice.</p>\n        <button type=\"button\" class=\"flashbar__dismiss\" aria-label=\"Dismiss\">×</button>\n      </li>\n      <li class=\"flashbar__item\" data-tone=\"warning\">\n        <p class=\"flashbar__message\">Warning notice.</p>\n        <button type=\"button\" class=\"flashbar__dismiss\" aria-label=\"Dismiss\">×</button>\n      </li>\n    </ul>";
class DemlFlashbar {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$11;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlFlashbar, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.25", type: DemlFlashbar, isStandalone: true, selector: "deml-flashbar", ngImport: i0, template: "", isInline: true, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlFlashbar, decorators: [{
            type: Component,
            args: [{
                    selector: "deml-flashbar",
                    standalone: true,
                    template: "",
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

/* AUTO-GENERATED from components/form-grid/form-grid.html — do not edit */
const DEML_TEMPLATE$10 = "<div class=\"form-grid\">\n      <label>First name <input type=\"text\" name=\"first\" /></label>\n      <label>Last name <input type=\"text\" name=\"last\" /></label>\n      <label>Email <input type=\"email\" name=\"email\" /></label>\n      <label>Company <input type=\"text\" name=\"company\" /></label>\n    </div>";
class DemlFormGrid {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$10;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlFormGrid, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.25", type: DemlFormGrid, isStandalone: true, selector: "deml-form-grid", ngImport: i0, template: "", isInline: true, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlFormGrid, decorators: [{
            type: Component,
            args: [{
                    selector: "deml-form-grid",
                    standalone: true,
                    template: "",
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

/* AUTO-GENERATED from components/form-panel/form-panel.html — do not edit */
const DEML_TEMPLATE$$ = "<form class=\"form-panel\"><label class=\"field\"><span class=\"field__label\">Email</span><input class=\"input-text\" type=\"email\" /></label><button class=\"button button--primary\" type=\"submit\">Submit</button></form>";
class DemlFormPanel {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$$;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlFormPanel, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.25", type: DemlFormPanel, isStandalone: true, selector: "deml-form-panel", ngImport: i0, template: "", isInline: true, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlFormPanel, decorators: [{
            type: Component,
            args: [{
                    selector: "deml-form-panel",
                    standalone: true,
                    template: "",
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

/* AUTO-GENERATED from components/form-section/form-section.html — do not edit */
const DEML_TEMPLATE$_ = "<section class=\"form-section\">\n      <header class=\"form-section__header\">\n        <h3 class=\"form-section__title\">Account</h3>\n        <p class=\"form-section__description\">Basic profile settings.</p>\n      </header>\n      <div class=\"form-section__body\">\n        <label>Name <input type=\"text\" name=\"name\" /></label>\n        <label>Email <input type=\"email\" name=\"email\" /></label>\n      </div>\n    </section>";
class DemlFormSection {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$_;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlFormSection, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.25", type: DemlFormSection, isStandalone: true, selector: "deml-form-section", ngImport: i0, template: "", isInline: true, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlFormSection, decorators: [{
            type: Component,
            args: [{
                    selector: "deml-form-section",
                    standalone: true,
                    template: "",
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

/* AUTO-GENERATED from components/grid/grid.html — do not edit */
const DEML_TEMPLATE$Z = "<div class=\"grid\">\n      <div class=\"grid__item\">A</div>\n      <div class=\"grid__item\">B</div>\n      <div class=\"grid__item\">C</div>\n      <div class=\"grid__item\">D</div>\n    </div>";
class DemlGrid {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$Z;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlGrid, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.25", type: DemlGrid, isStandalone: true, selector: "deml-grid", ngImport: i0, template: "", isInline: true, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlGrid, decorators: [{
            type: Component,
            args: [{
                    selector: "deml-grid",
                    standalone: true,
                    template: "",
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

/* AUTO-GENERATED from components/help-panel/help-panel.html — do not edit */
const DEML_TEMPLATE$Y = "<aside class=\"help-panel\" aria-labelledby=\"help-panel-title\">\n      <h3 id=\"help-panel-title\">Help</h3>\n      <p>Contextual guidance for this page.</p>\n      <a href=\"#\">Learn more</a>\n    </aside>";
class DemlHelpPanel {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$Y;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlHelpPanel, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.25", type: DemlHelpPanel, isStandalone: true, selector: "deml-help-panel", ngImport: i0, template: "", isInline: true, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlHelpPanel, decorators: [{
            type: Component,
            args: [{
                    selector: "deml-help-panel",
                    standalone: true,
                    template: "",
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

/* AUTO-GENERATED from components/hud-panel/hud-panel.html — do not edit */
const DEML_TEMPLATE$X = "<section class=\"hud-panel\" aria-labelledby=\"hud-panel-title\">\n      <header class=\"hud-panel__header\">\n        <h3 id=\"hud-panel-title\">HUD panel</h3>\n      </header>\n      <div class=\"hud-panel__body\">\n        <p>Dashboard panel body.</p>\n      </div>\n    </section>";
class DemlHudPanel {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$X;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlHudPanel, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.25", type: DemlHudPanel, isStandalone: true, selector: "deml-hud-panel", ngImport: i0, template: "", isInline: true, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlHudPanel, decorators: [{
            type: Component,
            args: [{
                    selector: "deml-hud-panel",
                    standalone: true,
                    template: "",
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

/* AUTO-GENERATED from components/icon/icon.html — do not edit */
const DEML_TEMPLATE$W = "<svg class=\"icon\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n      <circle cx=\"12\" cy=\"12\" r=\"9\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" />\n      <path d=\"M12 8v4l3 2\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" />\n    </svg>\n    <span class=\"icon-label\">Icon placeholder</span>";
class DemlIcon {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$W;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlIcon, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.25", type: DemlIcon, isStandalone: true, selector: "deml-icon", ngImport: i0, template: "", isInline: true, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlIcon, decorators: [{
            type: Component,
            args: [{
                    selector: "deml-icon",
                    standalone: true,
                    template: "",
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

/* AUTO-GENERATED from components/input-date/input-date.html — do not edit */
const DEML_TEMPLATE$V = "<label for=\"input-date-field\">Date</label>\n    <input id=\"input-date-field\" name=\"date\" type=\"date\">";
class DemlInputDate {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$V;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlInputDate, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.25", type: DemlInputDate, isStandalone: true, selector: "deml-input-date", ngImport: i0, template: "", isInline: true, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlInputDate, decorators: [{
            type: Component,
            args: [{
                    selector: "deml-input-date",
                    standalone: true,
                    template: "",
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

/* AUTO-GENERATED from components/input-email/input-email.html — do not edit */
const DEML_TEMPLATE$U = "<label for=\"input-email-field\">Email</label>\n    <input id=\"input-email-field\" name=\"email\" type=\"email\" placeholder=\"you@example.com\" autocomplete=\"email\">";
class DemlInputEmail {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$U;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlInputEmail, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.25", type: DemlInputEmail, isStandalone: true, selector: "deml-input-email", ngImport: i0, template: "", isInline: true, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlInputEmail, decorators: [{
            type: Component,
            args: [{
                    selector: "deml-input-email",
                    standalone: true,
                    template: "",
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

/* AUTO-GENERATED from components/input-number/input-number.html — do not edit */
const DEML_TEMPLATE$T = "<label for=\"input-number-field\">Number</label>\n    <input id=\"input-number-field\" name=\"number\" type=\"number\" min=\"0\" max=\"100\" step=\"1\" value=\"10\">";
class DemlInputNumber {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$T;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlInputNumber, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.25", type: DemlInputNumber, isStandalone: true, selector: "deml-input-number", ngImport: i0, template: "", isInline: true, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlInputNumber, decorators: [{
            type: Component,
            args: [{
                    selector: "deml-input-number",
                    standalone: true,
                    template: "",
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

/* AUTO-GENERATED from components/input-password/input-password.html — do not edit */
const DEML_TEMPLATE$S = "<label for=\"input-password-field\">Password</label>\n    <input id=\"input-password-field\" name=\"password\" type=\"password\" placeholder=\"Password\" autocomplete=\"new-password\">";
class DemlInputPassword {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$S;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlInputPassword, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.25", type: DemlInputPassword, isStandalone: true, selector: "deml-input-password", ngImport: i0, template: "", isInline: true, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlInputPassword, decorators: [{
            type: Component,
            args: [{
                    selector: "deml-input-password",
                    standalone: true,
                    template: "",
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

/* AUTO-GENERATED from components/input-range/input-range.html — do not edit */
const DEML_TEMPLATE$R = "<label for=\"input-range-field\">Range</label>\n    <input id=\"input-range-field\" name=\"range\" type=\"range\" min=\"0\" max=\"100\" value=\"40\">";
class DemlInputRange {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$R;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlInputRange, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.25", type: DemlInputRange, isStandalone: true, selector: "deml-input-range", ngImport: i0, template: "", isInline: true, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlInputRange, decorators: [{
            type: Component,
            args: [{
                    selector: "deml-input-range",
                    standalone: true,
                    template: "",
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

/* AUTO-GENERATED from components/input-search/input-search.html — do not edit */
const DEML_TEMPLATE$Q = "<label for=\"input-search-field\">Search</label>\n    <input id=\"input-search-field\" name=\"search\" type=\"search\" placeholder=\"Search…\">";
class DemlInputSearch {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$Q;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlInputSearch, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.25", type: DemlInputSearch, isStandalone: true, selector: "deml-input-search", ngImport: i0, template: "", isInline: true, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlInputSearch, decorators: [{
            type: Component,
            args: [{
                    selector: "deml-input-search",
                    standalone: true,
                    template: "",
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

/* AUTO-GENERATED from components/input-text/input-text.html — do not edit */
const DEML_TEMPLATE$P = "<label for=\"input-text-field\">Name</label>\n    <input id=\"input-text-field\" name=\"name\" type=\"text\" placeholder=\"Name\" autocomplete=\"name\" required>";
class DemlInputText {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$P;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlInputText, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.25", type: DemlInputText, isStandalone: true, selector: "deml-input-text", ngImport: i0, template: "", isInline: true, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlInputText, decorators: [{
            type: Component,
            args: [{
                    selector: "deml-input-text",
                    standalone: true,
                    template: "",
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

/* AUTO-GENERATED from components/input-time/input-time.html — do not edit */
const DEML_TEMPLATE$O = "<label for=\"input-time-field\">Time</label>\n    <input id=\"input-time-field\" name=\"time\" type=\"time\">";
class DemlInputTime {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$O;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlInputTime, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.25", type: DemlInputTime, isStandalone: true, selector: "deml-input-time", ngImport: i0, template: "", isInline: true, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlInputTime, decorators: [{
            type: Component,
            args: [{
                    selector: "deml-input-time",
                    standalone: true,
                    template: "",
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

/* AUTO-GENERATED from components/kbd/kbd.html — do not edit */
const DEML_TEMPLATE$N = "<p>Press <kbd class=\"kbd\">⌘</kbd> <kbd class=\"kbd\">K</kbd> to search.</p>";
class DemlKbd {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$N;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlKbd, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.25", type: DemlKbd, isStandalone: true, selector: "deml-kbd", ngImport: i0, template: "", isInline: true, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlKbd, decorators: [{
            type: Component,
            args: [{
                    selector: "deml-kbd",
                    standalone: true,
                    template: "",
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

/* AUTO-GENERATED from components/label/label.html — do not edit */
const DEML_TEMPLATE$M = "<label class=\"label\" for=\"label-demo-input\">Label</label>\n    <input id=\"label-demo-input\" type=\"text\" name=\"label-demo\" />";
class DemlLabel {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$M;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlLabel, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.25", type: DemlLabel, isStandalone: true, selector: "deml-label", ngImport: i0, template: "", isInline: true, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlLabel, decorators: [{
            type: Component,
            args: [{
                    selector: "deml-label",
                    standalone: true,
                    template: "",
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

/* AUTO-GENERATED from components/loading-overlay/loading-overlay.html — do not edit */
const DEML_TEMPLATE$L = "<div class=\"loading-overlay\" role=\"status\" aria-busy=\"true\" aria-label=\"Loading\">\n      <span class=\"loading-overlay__message\">Loading…</span>\n    </div>";
class DemlLoadingOverlay {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$L;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlLoadingOverlay, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.25", type: DemlLoadingOverlay, isStandalone: true, selector: "deml-loading-overlay", ngImport: i0, template: "", isInline: true, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlLoadingOverlay, decorators: [{
            type: Component,
            args: [{
                    selector: "deml-loading-overlay",
                    standalone: true,
                    template: "",
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

/* AUTO-GENERATED from components/metric-card/metric-card.html — do not edit */
const DEML_TEMPLATE$K = "<article class=\"stat-card metric-card\">\n      <p class=\"stat-card__label metric-card__label\">Sessions</p>\n      <p class=\"stat-card__value metric-card__value\">1.2k</p>\n      <p class=\"stat-card__delta metric-card__trend\">+4.2%</p>\n    </article>";
class DemlMetricCard {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$K;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlMetricCard, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.25", type: DemlMetricCard, isStandalone: true, selector: "deml-metric-card", ngImport: i0, template: "", isInline: true, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlMetricCard, decorators: [{
            type: Component,
            args: [{
                    selector: "deml-metric-card",
                    standalone: true,
                    template: "",
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

/* AUTO-GENERATED from components/metric-list/metric-list.html — do not edit */
const DEML_TEMPLATE$J = "<ul class=\"metric-list\"><li class=\"metric-list__item\"><span>Metric</span><strong>12</strong></li></ul>";
class DemlMetricList {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$J;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlMetricList, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.25", type: DemlMetricList, isStandalone: true, selector: "deml-metric-list", ngImport: i0, template: "", isInline: true, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlMetricList, decorators: [{
            type: Component,
            args: [{
                    selector: "deml-metric-list",
                    standalone: true,
                    template: "",
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

/* AUTO-GENERATED from components/microcard/microcard.html — do not edit */
const DEML_TEMPLATE$I = "<article class=\"microcard\"><p class=\"microcard__label\">Label</p><p class=\"microcard__value\">42</p></article>";
class DemlMicrocard {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$I;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlMicrocard, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.25", type: DemlMicrocard, isStandalone: true, selector: "deml-microcard", ngImport: i0, template: "", isInline: true, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlMicrocard, decorators: [{
            type: Component,
            args: [{
                    selector: "deml-microcard",
                    standalone: true,
                    template: "",
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

/* AUTO-GENERATED from components/microcard-grid/microcard-grid.html — do not edit */
const DEML_TEMPLATE$H = "<div class=\"microcard-grid\"><article class=\"microcard\"><p class=\"microcard__label\">A</p><p class=\"microcard__value\">1</p></article></div>";
class DemlMicrocardGrid {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$H;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlMicrocardGrid, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.25", type: DemlMicrocardGrid, isStandalone: true, selector: "deml-microcard-grid", ngImport: i0, template: "", isInline: true, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlMicrocardGrid, decorators: [{
            type: Component,
            args: [{
                    selector: "deml-microcard-grid",
                    standalone: true,
                    template: "",
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

/* AUTO-GENERATED from components/navbar/navbar.html — do not edit */
const DEML_TEMPLATE$G = "<header class=\"site-navbar\"><div class=\"site-navbar-branding\"><a class=\"site-navbar-icon\" href=\"#\">DEML</a></div><nav class=\"main-navigation\"><ul><li><a href=\"#\">Home</a></li></ul></nav></header>";
class DemlNavbar {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$G;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlNavbar, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.25", type: DemlNavbar, isStandalone: true, selector: "deml-navbar", ngImport: i0, template: "", isInline: true, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlNavbar, decorators: [{
            type: Component,
            args: [{
                    selector: "deml-navbar",
                    standalone: true,
                    template: "",
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

/* AUTO-GENERATED from components/navigation-menu/navigation-menu.html — do not edit */
const DEML_TEMPLATE$F = "<nav class=\"navigation-menu\" aria-label=\"Primary\">\n      <ul class=\"navigation-menu__list\">\n        <li><a class=\"navigation-menu__link\" href=\"#\" aria-current=\"page\">Dashboard</a></li>\n        <li><a class=\"navigation-menu__link\" href=\"#\">Analytics</a></li>\n        <li><a class=\"navigation-menu__link\" href=\"#\">Settings</a></li>\n      </ul>\n    </nav>";
class DemlNavigationMenu {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$F;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlNavigationMenu, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.25", type: DemlNavigationMenu, isStandalone: true, selector: "deml-navigation-menu", ngImport: i0, template: "", isInline: true, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlNavigationMenu, decorators: [{
            type: Component,
            args: [{
                    selector: "deml-navigation-menu",
                    standalone: true,
                    template: "",
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

/* AUTO-GENERATED from components/page-back-link/page-back-link.html — do not edit */
const DEML_TEMPLATE$E = "<a class=\"page-back-link\" href=\"#\">← Back to list</a>";
class DemlPageBackLink {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$E;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlPageBackLink, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.25", type: DemlPageBackLink, isStandalone: true, selector: "deml-page-back-link", ngImport: i0, template: "", isInline: true, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlPageBackLink, decorators: [{
            type: Component,
            args: [{
                    selector: "deml-page-back-link",
                    standalone: true,
                    template: "",
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

/* AUTO-GENERATED from components/page-header/page-header.html — do not edit */
const DEML_TEMPLATE$D = "<header class=\"page-header\">\n      <div class=\"page-header__text\">\n        <h1 class=\"page-header__title\">Page title</h1>\n        <p class=\"page-header__subtitle\">Short page description.</p>\n      </div>\n      <div class=\"page-header__actions\">\n        <button type=\"button\">Secondary</button>\n        <button type=\"button\">Primary</button>\n      </div>\n    </header>";
class DemlPageHeader {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$D;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlPageHeader, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.25", type: DemlPageHeader, isStandalone: true, selector: "deml-page-header", ngImport: i0, template: "", isInline: true, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlPageHeader, decorators: [{
            type: Component,
            args: [{
                    selector: "deml-page-header",
                    standalone: true,
                    template: "",
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

/* AUTO-GENERATED from components/page-section/page-section.html — do not edit */
const DEML_TEMPLATE$C = "<section class=\"page-section\"><div class=\"page-section__body\">Section body</div></section>";
class DemlPageSection {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$C;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlPageSection, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.25", type: DemlPageSection, isStandalone: true, selector: "deml-page-section", ngImport: i0, template: "", isInline: true, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlPageSection, decorators: [{
            type: Component,
            args: [{
                    selector: "deml-page-section",
                    standalone: true,
                    template: "",
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

/* AUTO-GENERATED from components/page-shell/page-shell.html — do not edit */
const DEML_TEMPLATE$B = "<div class=\"page-shell\">\n      <div class=\"page-shell__inner\">\n        <p>Constrained page canvas content.</p>\n      </div>\n    </div>";
class DemlPageShell {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$B;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlPageShell, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.25", type: DemlPageShell, isStandalone: true, selector: "deml-page-shell", ngImport: i0, template: "", isInline: true, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlPageShell, decorators: [{
            type: Component,
            args: [{
                    selector: "deml-page-shell",
                    standalone: true,
                    template: "",
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

/* AUTO-GENERATED from components/page-template/page-template.html — do not edit */
const DEML_TEMPLATE$A = "<div class=\"page-template\">\n      <header class=\"page-template__header\">\n        <h1>Page template</h1>\n        <div class=\"page-template__actions\"><button type=\"button\">Action</button></div>\n      </header>\n      <div class=\"page-template__content\">\n        <p>Route content region.</p>\n      </div>\n      <footer class=\"page-template__footer\">Footer slot</footer>\n    </div>";
class DemlPageTemplate {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$A;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlPageTemplate, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.25", type: DemlPageTemplate, isStandalone: true, selector: "deml-page-template", ngImport: i0, template: "", isInline: true, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlPageTemplate, decorators: [{
            type: Component,
            args: [{
                    selector: "deml-page-template",
                    standalone: true,
                    template: "",
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

/* AUTO-GENERATED from components/pagination/pagination.html — do not edit */
const DEML_TEMPLATE$z = "<nav class=\"pagination\" aria-label=\"Pagination\">\n      <button type=\"button\" class=\"pagination__prev\" aria-label=\"Previous page\">Previous</button>\n      <ul class=\"pagination__pages\">\n        <li><button type=\"button\" aria-current=\"page\">1</button></li>\n        <li><button type=\"button\">2</button></li>\n        <li><button type=\"button\">3</button></li>\n      </ul>\n      <button type=\"button\" class=\"pagination__next\" aria-label=\"Next page\">Next</button>\n    </nav>";
class DemlPagination {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$z;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlPagination, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.25", type: DemlPagination, isStandalone: true, selector: "deml-pagination", ngImport: i0, template: "", isInline: true, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlPagination, decorators: [{
            type: Component,
            args: [{
                    selector: "deml-pagination",
                    standalone: true,
                    template: "",
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

/* AUTO-GENERATED from components/panel-grid/panel-grid.html — do not edit */
const DEML_TEMPLATE$y = "<div class=\"panel-grid\">\n      <article class=\"panel-grid__item\">Panel A</article>\n      <article class=\"panel-grid__item\">Panel B</article>\n    </div>";
class DemlPanelGrid {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$y;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlPanelGrid, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.25", type: DemlPanelGrid, isStandalone: true, selector: "deml-panel-grid", ngImport: i0, template: "", isInline: true, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlPanelGrid, decorators: [{
            type: Component,
            args: [{
                    selector: "deml-panel-grid",
                    standalone: true,
                    template: "",
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

/* AUTO-GENERATED from components/popover/popover.html — do not edit */
const DEML_TEMPLATE$x = "<div class=\"popover\">\n      <button type=\"button\" class=\"popover__trigger\" aria-expanded=\"false\" aria-controls=\"popover-panel\">Open popover</button>\n      <div id=\"popover-panel\" class=\"popover__panel\" role=\"dialog\" aria-label=\"Popover\" hidden>\n        <p>Popover content for contextual actions.</p>\n        <button type=\"button\" class=\"button\">Got it</button>\n      </div>\n    </div>";
class DemlPopover {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$x;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlPopover, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.25", type: DemlPopover, isStandalone: true, selector: "deml-popover", ngImport: i0, template: "", isInline: true, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlPopover, decorators: [{
            type: Component,
            args: [{
                    selector: "deml-popover",
                    standalone: true,
                    template: "",
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

/* AUTO-GENERATED from components/profile/profile.html — do not edit */
const DEML_TEMPLATE$w = "<div class=\"profile\">\n      <span class=\"avatar\" aria-hidden=\"true\"><span class=\"avatar__initials\">JD</span></span>\n      <div class=\"profile__text\">\n        <p class=\"profile__name\">Jane Doe</p>\n        <p class=\"profile__meta\">jane@example.com</p>\n      </div>\n    </div>";
class DemlProfile {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$w;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlProfile, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.25", type: DemlProfile, isStandalone: true, selector: "deml-profile", ngImport: i0, template: "", isInline: true, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlProfile, decorators: [{
            type: Component,
            args: [{
                    selector: "deml-profile",
                    standalone: true,
                    template: "",
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

/* AUTO-GENERATED from components/progress/progress.html — do not edit */
const DEML_TEMPLATE$v = "<label for=\"progress-field\">Progress</label>\n    <progress id=\"progress-field\" value=\"70\" max=\"100\">70%</progress>";
class DemlProgress {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$v;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlProgress, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.25", type: DemlProgress, isStandalone: true, selector: "deml-progress", ngImport: i0, template: "", isInline: true, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlProgress, decorators: [{
            type: Component,
            args: [{
                    selector: "deml-progress",
                    standalone: true,
                    template: "",
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

/* AUTO-GENERATED from components/property-filter/property-filter.html — do not edit */
const DEML_TEMPLATE$u = "<div class=\"property-filter\">\n      <label for=\"property-filter-input\">Filter</label>\n      <div class=\"property-filter__control\">\n        <ul class=\"property-filter__tokens\" aria-label=\"Active filters\">\n          <li class=\"property-filter__token\">status = active <button type=\"button\" aria-label=\"Remove\">×</button></li>\n        </ul>\n        <input id=\"property-filter-input\" type=\"search\" placeholder=\"Filter properties…\" />\n      </div>\n    </div>";
class DemlPropertyFilter {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$u;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlPropertyFilter, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.25", type: DemlPropertyFilter, isStandalone: true, selector: "deml-property-filter", ngImport: i0, template: "", isInline: true, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlPropertyFilter, decorators: [{
            type: Component,
            args: [{
                    selector: "deml-property-filter",
                    standalone: true,
                    template: "",
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

/* AUTO-GENERATED from components/radio-group/radio-group.html — do not edit */
const DEML_TEMPLATE$t = "<fieldset class=\"radio-group\">\n      <legend class=\"radio-group__legend\">Plan</legend>\n      <label class=\"radio-group__option\"><input type=\"radio\" name=\"plan\" value=\"free\" /> Free</label>\n      <label class=\"radio-group__option\"><input type=\"radio\" name=\"plan\" value=\"pro\" checked /> Pro</label>\n      <label class=\"radio-group__option\"><input type=\"radio\" name=\"plan\" value=\"team\" /> Team</label>\n    </fieldset>";
class DemlRadioGroup {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$t;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlRadioGroup, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.25", type: DemlRadioGroup, isStandalone: true, selector: "deml-radio-group", ngImport: i0, template: "", isInline: true, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlRadioGroup, decorators: [{
            type: Component,
            args: [{
                    selector: "deml-radio-group",
                    standalone: true,
                    template: "",
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

/* AUTO-GENERATED from components/scroll-area/scroll-area.html — do not edit */
const DEML_TEMPLATE$s = "<div class=\"scroll-area\" tabindex=\"0\">\n      <p>Scrollable region with constrained height.</p>\n      <p>Additional content for overflow.</p>\n      <p>More content.</p>\n      <p>Even more content.</p>\n    </div>";
class DemlScrollArea {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$s;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlScrollArea, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.25", type: DemlScrollArea, isStandalone: true, selector: "deml-scroll-area", ngImport: i0, template: "", isInline: true, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlScrollArea, decorators: [{
            type: Component,
            args: [{
                    selector: "deml-scroll-area",
                    standalone: true,
                    template: "",
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

/* AUTO-GENERATED from components/section/section.html — do not edit */
const DEML_TEMPLATE$r = "<section class=\"section\">\n      <header class=\"section__header\">\n        <h3 class=\"section__title\">Section title</h3>\n        <p class=\"section__description\">Section supporting text.</p>\n      </header>\n      <div class=\"section__body\">\n        <p>Section body.</p>\n      </div>\n    </section>";
class DemlSection {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$r;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlSection, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.25", type: DemlSection, isStandalone: true, selector: "deml-section", ngImport: i0, template: "", isInline: true, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlSection, decorators: [{
            type: Component,
            args: [{
                    selector: "deml-section",
                    standalone: true,
                    template: "",
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

/* AUTO-GENERATED from components/section-header/section-header.html — do not edit */
const DEML_TEMPLATE$q = "<header class=\"section-header\"><p class=\"type-eyebrow\">Eyebrow</p><h2 class=\"type-display\">Section</h2><p class=\"type-intro\">Supporting copy.</p></header>";
class DemlSectionHeader {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$q;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlSectionHeader, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.25", type: DemlSectionHeader, isStandalone: true, selector: "deml-section-header", ngImport: i0, template: "", isInline: true, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlSectionHeader, decorators: [{
            type: Component,
            args: [{
                    selector: "deml-section-header",
                    standalone: true,
                    template: "",
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

/* AUTO-GENERATED from components/section-template/section-template.html — do not edit */
const DEML_TEMPLATE$p = "<section class=\"section-template\">\n      <header class=\"section-template__header\">\n        <div>\n          <h3 class=\"section-template__title\">Section template</h3>\n          <p class=\"section-template__description\">Reusable section anatomy.</p>\n        </div>\n        <div class=\"section-template__actions\"><button type=\"button\">Action</button></div>\n      </header>\n      <hr class=\"section-template__divider\" />\n      <div class=\"section-template__body\">Body content.</div>\n    </section>";
class DemlSectionTemplate {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$p;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlSectionTemplate, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.25", type: DemlSectionTemplate, isStandalone: true, selector: "deml-section-template", ngImport: i0, template: "", isInline: true, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlSectionTemplate, decorators: [{
            type: Component,
            args: [{
                    selector: "deml-section-template",
                    standalone: true,
                    template: "",
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

/* AUTO-GENERATED from components/select/select.html — do not edit */
const DEML_TEMPLATE$o = "<label for=\"select-field\">Country</label>\n    <select id=\"select-field\" name=\"country\">\n      <optgroup label=\"Americas\">\n        <option value=\"us\">United States</option>\n        <option value=\"ca\">Canada</option>\n      </optgroup>\n      <optgroup label=\"Europe\">\n        <option value=\"uk\">United Kingdom</option>\n        <option value=\"de\">Germany</option>\n      </optgroup>\n    </select>";
class DemlSelect {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$o;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlSelect, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.25", type: DemlSelect, isStandalone: true, selector: "deml-select", ngImport: i0, template: "", isInline: true, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlSelect, decorators: [{
            type: Component,
            args: [{
                    selector: "deml-select",
                    standalone: true,
                    template: "",
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

/* AUTO-GENERATED from components/separator/separator.html — do not edit */
const DEML_TEMPLATE$n = "<p>Above</p>\n    <hr class=\"separator\" />\n    <p>Below</p>\n    <div class=\"separator separator--vertical\" role=\"separator\" aria-orientation=\"vertical\"></div>";
class DemlSeparator {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$n;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlSeparator, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.25", type: DemlSeparator, isStandalone: true, selector: "deml-separator", ngImport: i0, template: "", isInline: true, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlSeparator, decorators: [{
            type: Component,
            args: [{
                    selector: "deml-separator",
                    standalone: true,
                    template: "",
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

/* AUTO-GENERATED from components/sheet/sheet.html — do not edit */
const DEML_TEMPLATE$m = "<button type=\"button\" class=\"button\" data-deml-open-sheet>Open sheet</button>\n    <div class=\"sheet\" role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"sheet-title\" hidden>\n      <header class=\"sheet__header\">\n        <h3 id=\"sheet-title\">Sheet title</h3>\n        <button type=\"button\" class=\"sheet__close\" aria-label=\"Close\" data-deml-close-sheet>×</button>\n      </header>\n      <div class=\"sheet__body\">\n        <p>Slide-over panel content.</p>\n      </div>\n      <footer class=\"sheet__footer\">\n        <button type=\"button\" class=\"button\" data-deml-close-sheet>Cancel</button>\n        <button type=\"button\" class=\"button\" data-variant=\"primary\">Save</button>\n      </footer>\n    </div>";
class DemlSheet {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$m;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlSheet, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.25", type: DemlSheet, isStandalone: true, selector: "deml-sheet", ngImport: i0, template: "", isInline: true, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlSheet, decorators: [{
            type: Component,
            args: [{
                    selector: "deml-sheet",
                    standalone: true,
                    template: "",
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

/* AUTO-GENERATED from components/sidebar-nav/sidebar-nav.html — do not edit */
const DEML_TEMPLATE$l = "<nav class=\"sidebar-nav\" aria-label=\"Sidebar\">\n      <p class=\"sidebar-nav__header\">Workspace</p>\n      <ul class=\"sidebar-nav__list\">\n        <li><a href=\"#\" aria-current=\"page\">Overview</a></li>\n        <li>\n          <button type=\"button\" aria-expanded=\"true\">Projects</button>\n          <ul>\n            <li><a href=\"#\">Alpha</a></li>\n            <li><a href=\"#\">Beta</a></li>\n          </ul>\n        </li>\n        <li><a href=\"#\">Members</a></li>\n      </ul>\n    </nav>";
class DemlSidebarNav {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$l;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlSidebarNav, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.25", type: DemlSidebarNav, isStandalone: true, selector: "deml-sidebar-nav", ngImport: i0, template: "", isInline: true, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlSidebarNav, decorators: [{
            type: Component,
            args: [{
                    selector: "deml-sidebar-nav",
                    standalone: true,
                    template: "",
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

/* AUTO-GENERATED from components/site-footer/site-footer.html — do not edit */
const DEML_TEMPLATE$k = "<footer class=\"site-footer\">\n      <div class=\"site-footer__inner\">\n        <nav class=\"site-footer__directory\" aria-label=\"Footer\">\n          <div class=\"site-footer__column\">\n            <h3 class=\"site-footer__heading\">Platforms</h3>\n            <ul class=\"site-footer__list\">\n              <li><a href=\"#\">DEML</a></li>\n              <li><a href=\"#\">FORJD</a></li>\n              <li><a href=\"#\">Explore</a></li>\n              <li><a href=\"#\">Dashboard</a></li>\n            </ul>\n          </div>\n          <div class=\"site-footer__column\">\n            <h3 class=\"site-footer__heading\">Resources</h3>\n            <ul class=\"site-footer__list\">\n              <li><a href=\"#\">Community</a></li>\n              <li><a href=\"#\">Whitepaper</a></li>\n              <li><a href=\"#\">Book</a></li>\n              <li><a href=\"#\">Blue Notes</a></li>\n              <li><a href=\"#\">Learn</a></li>\n            </ul>\n          </div>\n          <div class=\"site-footer__column\">\n            <h3 class=\"site-footer__heading\">Support</h3>\n            <ul class=\"site-footer__list\">\n              <li><a href=\"#\">Platform Status</a></li>\n              <li><a href=\"#\">Report a Bug</a></li>\n            </ul>\n          </div>\n          <div class=\"site-footer__column\">\n            <h3 class=\"site-footer__heading\">Legal &amp; Compliance</h3>\n            <ul class=\"site-footer__list\">\n              <li><a href=\"#\">Privacy Policy</a></li>\n              <li><a href=\"#\">Terms of Service</a></li>\n              <li><a href=\"#\">SOC2 Compliance</a></li>\n              <li><a href=\"#\">GDPR Compliance</a></li>\n            </ul>\n          </div>\n        </nav>\n        <div class=\"site-footer__bottom\">\n          <p class=\"site-footer__badge\">Made in the U.S.A.</p>\n          <p class=\"site-footer__copy\">\n            Copyright © 2026 Data Engineering for Machine Learning by\n            <a href=\"https://joealongi.dev/\" target=\"_blank\" rel=\"noopener noreferrer\">Joe Alongi</a>.\n            All rights reserved.\n          </p>\n        </div>\n      </div>\n    </footer>";
class DemlSiteFooter {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$k;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlSiteFooter, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.25", type: DemlSiteFooter, isStandalone: true, selector: "deml-site-footer", ngImport: i0, template: "", isInline: true, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlSiteFooter, decorators: [{
            type: Component,
            args: [{
                    selector: "deml-site-footer",
                    standalone: true,
                    template: "",
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

/* AUTO-GENERATED from components/skeleton/skeleton.html — do not edit */
const DEML_TEMPLATE$j = "<div class=\"skeleton\" aria-hidden=\"true\">\n      <div class=\"skeleton__line skeleton__line--short\"></div>\n      <div class=\"skeleton__line skeleton__line--long\"></div>\n      <div class=\"skeleton__line skeleton__line--medium\"></div>\n    </div>";
class DemlSkeleton {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$j;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlSkeleton, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.25", type: DemlSkeleton, isStandalone: true, selector: "deml-skeleton", ngImport: i0, template: "", isInline: true, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlSkeleton, decorators: [{
            type: Component,
            args: [{
                    selector: "deml-skeleton",
                    standalone: true,
                    template: "",
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

/* AUTO-GENERATED from components/skip-link/skip-link.html — do not edit */
const DEML_TEMPLATE$i = "<a class=\"skip-link\" href=\"#main\">Skip to content</a>\n    <p id=\"main\">Focus the skip link (Tab) to reveal it — first focusable control on real pages.</p>";
class DemlSkipLink {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$i;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlSkipLink, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.25", type: DemlSkipLink, isStandalone: true, selector: "deml-skip-link", ngImport: i0, template: "", isInline: true, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlSkipLink, decorators: [{
            type: Component,
            args: [{
                    selector: "deml-skip-link",
                    standalone: true,
                    template: "",
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

/* AUTO-GENERATED from components/spinner/spinner.html — do not edit */
const DEML_TEMPLATE$h = "<span class=\"spinner\" role=\"status\" aria-label=\"Loading\">\n      <span class=\"spinner__visual\" aria-hidden=\"true\"></span>\n    </span>";
class DemlSpinner {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$h;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlSpinner, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.25", type: DemlSpinner, isStandalone: true, selector: "deml-spinner", ngImport: i0, template: "", isInline: true, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlSpinner, decorators: [{
            type: Component,
            args: [{
                    selector: "deml-spinner",
                    standalone: true,
                    template: "",
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

/* AUTO-GENERATED from components/split-panel/split-panel.html — do not edit */
const DEML_TEMPLATE$g = "<div class=\"split-panel\">\n      <div class=\"split-panel__main\">\n        <p>Main content region.</p>\n      </div>\n      <aside class=\"split-panel__side\" aria-label=\"Details\">\n        <h3>Details</h3>\n        <p>Contextual side panel.</p>\n      </aside>\n    </div>";
class DemlSplitPanel {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$g;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlSplitPanel, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.25", type: DemlSplitPanel, isStandalone: true, selector: "deml-split-panel", ngImport: i0, template: "", isInline: true, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlSplitPanel, decorators: [{
            type: Component,
            args: [{
                    selector: "deml-split-panel",
                    standalone: true,
                    template: "",
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

/* AUTO-GENERATED from components/stack/stack.html — do not edit */
const DEML_TEMPLATE$f = "<div class=\"stack\">\n      <div>Stack item one</div>\n      <div>Stack item two</div>\n      <div>Stack item three</div>\n    </div>";
class DemlStack {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$f;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlStack, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.25", type: DemlStack, isStandalone: true, selector: "deml-stack", ngImport: i0, template: "", isInline: true, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlStack, decorators: [{
            type: Component,
            args: [{
                    selector: "deml-stack",
                    standalone: true,
                    template: "",
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

/* AUTO-GENERATED from components/stat-card/stat-card.html — do not edit */
const DEML_TEMPLATE$e = "<article class=\"stat-card\"><p class=\"stat-card__label\">Sessions</p><p class=\"stat-card__value\">1.2k</p><p class=\"stat-card__delta\">+4%</p></article>";
class DemlStatCard {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$e;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlStatCard, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.25", type: DemlStatCard, isStandalone: true, selector: "deml-stat-card", ngImport: i0, template: "", isInline: true, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlStatCard, decorators: [{
            type: Component,
            args: [{
                    selector: "deml-stat-card",
                    standalone: true,
                    template: "",
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

/* AUTO-GENERATED from components/status-badge/status-badge.html — do not edit */
const DEML_TEMPLATE$d = "<span class=\"status-badge\" data-tone=\"success\">\n      <span class=\"status-badge__dot\" aria-hidden=\"true\"></span>\n      Operational\n    </span>\n    <span class=\"status-badge\" data-tone=\"danger\">\n      <span class=\"status-badge__dot\" aria-hidden=\"true\"></span>\n      Degraded\n    </span>";
class DemlStatusBadge {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$d;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlStatusBadge, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.25", type: DemlStatusBadge, isStandalone: true, selector: "deml-status-badge", ngImport: i0, template: "", isInline: true, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlStatusBadge, decorators: [{
            type: Component,
            args: [{
                    selector: "deml-status-badge",
                    standalone: true,
                    template: "",
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

/* AUTO-GENERATED from components/status-card/status-card.html — do not edit */
const DEML_TEMPLATE$c = "<article class=\"status-card\">\n      <header class=\"status-card__header\">\n        <h3 class=\"status-card__title\">API</h3>\n        <span class=\"status-pill\" data-status=\"up\">Operational</span>\n      </header>\n      <p class=\"status-card__description\">Public API endpoints.</p>\n      <p class=\"status-card__uptime\">Uptime 99.99%</p>\n    </article>";
class DemlStatusCard {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$c;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlStatusCard, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.25", type: DemlStatusCard, isStandalone: true, selector: "deml-status-card", ngImport: i0, template: "", isInline: true, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlStatusCard, decorators: [{
            type: Component,
            args: [{
                    selector: "deml-status-card",
                    standalone: true,
                    template: "",
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

/* AUTO-GENERATED from components/status-pill/status-pill.html — do not edit */
const DEML_TEMPLATE$b = "<span class=\"status-pill\" data-status=\"up\">Up</span>\n    <span class=\"status-pill\" data-status=\"down\">Down</span>\n    <span class=\"status-pill\" data-status=\"maintenance\">Maintenance</span>";
class DemlStatusPill {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$b;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlStatusPill, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.25", type: DemlStatusPill, isStandalone: true, selector: "deml-status-pill", ngImport: i0, template: "", isInline: true, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlStatusPill, decorators: [{
            type: Component,
            args: [{
                    selector: "deml-status-pill",
                    standalone: true,
                    template: "",
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

/* AUTO-GENERATED from components/switch/switch.html — do not edit */
const DEML_TEMPLATE$a = "<label class=\"switch\">\n      <span class=\"switch__track\">\n        <input type=\"checkbox\" role=\"switch\" name=\"switch-demo\" aria-checked=\"false\" />\n        <span class=\"switch__thumb\" aria-hidden=\"true\"></span>\n      </span>\n      <span class=\"switch__content\">\n        <span class=\"switch__label\">Enable notifications</span>\n        <span class=\"switch__description\">Receive product updates by email.</span>\n      </span>\n    </label>";
class DemlSwitch {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$a;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlSwitch, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.25", type: DemlSwitch, isStandalone: true, selector: "deml-switch", ngImport: i0, template: "", isInline: true, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlSwitch, decorators: [{
            type: Component,
            args: [{
                    selector: "deml-switch",
                    standalone: true,
                    template: "",
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

/* AUTO-GENERATED from components/table/table.html — do not edit */
const DEML_TEMPLATE$9 = "<table>\n      <caption>Sample data table</caption>\n      <colgroup>\n        <col span=\"1\">\n        <col span=\"2\">\n      </colgroup>\n      <thead>\n        <tr>\n          <th scope=\"col\">Name</th>\n          <th scope=\"col\">Role</th>\n          <th scope=\"col\">Score</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <th scope=\"row\">Ada</th>\n          <td>Engineer</td>\n          <td>98</td>\n        </tr>\n        <tr>\n          <th scope=\"row\">Grace</th>\n          <td>Scientist</td>\n          <td>95</td>\n        </tr>\n      </tbody>\n      <tfoot>\n        <tr>\n          <th scope=\"row\">Average</th>\n          <td colspan=\"2\">96.5</td>\n        </tr>\n      </tfoot>\n    </table>";
class DemlTable {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$9;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlTable, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.25", type: DemlTable, isStandalone: true, selector: "deml-table", ngImport: i0, template: "", isInline: true, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlTable, decorators: [{
            type: Component,
            args: [{
                    selector: "deml-table",
                    standalone: true,
                    template: "",
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

/* AUTO-GENERATED from components/text-field/text-field.html — do not edit */
const DEML_TEMPLATE$8 = "<label class=\"text-field\"><span class=\"text-field__label\">Name</span><input class=\"text-field__input\" type=\"text\" /></label>";
class DemlTextField {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$8;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlTextField, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.25", type: DemlTextField, isStandalone: true, selector: "deml-text-field", ngImport: i0, template: "", isInline: true, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlTextField, decorators: [{
            type: Component,
            args: [{
                    selector: "deml-text-field",
                    standalone: true,
                    template: "",
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

/* AUTO-GENERATED from components/textarea/textarea.html — do not edit */
const DEML_TEMPLATE$7 = "<label for=\"textarea-field\">Message</label>\n    <textarea id=\"textarea-field\" name=\"message\" rows=\"4\" cols=\"40\" placeholder=\"Message\"></textarea>";
class DemlTextarea {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$7;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlTextarea, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.25", type: DemlTextarea, isStandalone: true, selector: "deml-textarea", ngImport: i0, template: "", isInline: true, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlTextarea, decorators: [{
            type: Component,
            args: [{
                    selector: "deml-textarea",
                    standalone: true,
                    template: "",
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

/* AUTO-GENERATED from components/theme-toggle/theme-toggle.html — do not edit */
const DEML_TEMPLATE$6 = "<button type=\"button\" class=\"theme-toggle\" aria-pressed=\"false\" aria-label=\"Toggle dark mode\">\n      Theme\n    </button>";
class DemlThemeToggle {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$6;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlThemeToggle, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.25", type: DemlThemeToggle, isStandalone: true, selector: "deml-theme-toggle", ngImport: i0, template: "", isInline: true, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlThemeToggle, decorators: [{
            type: Component,
            args: [{
                    selector: "deml-theme-toggle",
                    standalone: true,
                    template: "",
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

/* AUTO-GENERATED from components/tile-board/tile-board.html — do not edit */
const DEML_TEMPLATE$5 = "<div class=\"tile-board\">\n      <div class=\"dashboard-grid\">\n        <article class=\"tile-board__cell\" data-size=\"sm\">Stat</article>\n        <article class=\"tile-board__cell\" data-size=\"md\">Chart</article>\n        <article class=\"tile-board__cell\" data-size=\"sm\">KPI</article>\n      </div>\n    </div>";
class DemlTileBoard {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$5;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlTileBoard, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.25", type: DemlTileBoard, isStandalone: true, selector: "deml-tile-board", ngImport: i0, template: "", isInline: true, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlTileBoard, decorators: [{
            type: Component,
            args: [{
                    selector: "deml-tile-board",
                    standalone: true,
                    template: "",
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

/* AUTO-GENERATED from components/timeline/timeline.html — do not edit */
const DEML_TEMPLATE$4 = "<ol class=\"timeline\">\n      <li class=\"timeline__item\">\n        <time datetime=\"2026-07-01\">Jul 1</time>\n        <p class=\"timeline__title\">Created</p>\n        <p class=\"timeline__description\">Resource was created.</p>\n      </li>\n      <li class=\"timeline__item\">\n        <time datetime=\"2026-07-15\">Jul 15</time>\n        <p class=\"timeline__title\">Updated</p>\n        <p class=\"timeline__description\">Configuration changed.</p>\n      </li>\n    </ol>";
class DemlTimeline {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$4;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlTimeline, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.25", type: DemlTimeline, isStandalone: true, selector: "deml-timeline", ngImport: i0, template: "", isInline: true, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlTimeline, decorators: [{
            type: Component,
            args: [{
                    selector: "deml-timeline",
                    standalone: true,
                    template: "",
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

/* AUTO-GENERATED from components/toast/toast.html — do not edit */
const DEML_TEMPLATE$3 = "<div class=\"toast\" role=\"status\">\n      <p class=\"toast__title\">Saved</p>\n      <p class=\"toast__description\">Your changes were saved.</p>\n      <button type=\"button\" class=\"toast__close\" aria-label=\"Dismiss\">×</button>\n    </div>";
class DemlToast {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$3;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlToast, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.25", type: DemlToast, isStandalone: true, selector: "deml-toast", ngImport: i0, template: "", isInline: true, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlToast, decorators: [{
            type: Component,
            args: [{
                    selector: "deml-toast",
                    standalone: true,
                    template: "",
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

/* AUTO-GENERATED from components/toggle/toggle.html — do not edit */
const DEML_TEMPLATE$2 = "<div class=\"toggle-group\" role=\"group\" aria-label=\"View\">\n      <button type=\"button\" class=\"toggle\" aria-pressed=\"true\">List</button>\n      <button type=\"button\" class=\"toggle\" aria-pressed=\"false\">Grid</button>\n    </div>";
class DemlToggle {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$2;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlToggle, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.25", type: DemlToggle, isStandalone: true, selector: "deml-toggle", ngImport: i0, template: "", isInline: true, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlToggle, decorators: [{
            type: Component,
            args: [{
                    selector: "deml-toggle",
                    standalone: true,
                    template: "",
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

/* AUTO-GENERATED from components/tooltip/tooltip.html — do not edit */
const DEML_TEMPLATE$1 = "<button type=\"button\" class=\"tooltip-trigger\" aria-describedby=\"tooltip-demo\">Hover me</button>\n    <span id=\"tooltip-demo\" class=\"tooltip\" role=\"tooltip\">Helpful tip</span>";
class DemlTooltip {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$1;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlTooltip, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.25", type: DemlTooltip, isStandalone: true, selector: "deml-tooltip", ngImport: i0, template: "", isInline: true, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlTooltip, decorators: [{
            type: Component,
            args: [{
                    selector: "deml-tooltip",
                    standalone: true,
                    template: "",
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

/* AUTO-GENERATED from components/wizard/wizard.html — do not edit */
const DEML_TEMPLATE = "<div class=\"wizard\" role=\"dialog\" aria-labelledby=\"wizard-title\">\n      <header class=\"wizard__header\">\n        <h3 id=\"wizard-title\">Setup wizard</h3>\n        <ol class=\"wizard__steps\">\n          <li aria-current=\"step\">Account</li>\n          <li>Preferences</li>\n          <li>Confirm</li>\n        </ol>\n      </header>\n      <div class=\"wizard__body\">\n        <p>Step content goes here.</p>\n      </div>\n      <footer class=\"wizard__footer\">\n        <button type=\"button\">Back</button>\n        <button type=\"button\">Next</button>\n      </footer>\n    </div>";
class DemlWizard {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlWizard, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.25", type: DemlWizard, isStandalone: true, selector: "deml-wizard", ngImport: i0, template: "", isInline: true, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlWizard, decorators: [{
            type: Component,
            args: [{
                    selector: "deml-wizard",
                    standalone: true,
                    template: "",
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

/* AUTO-GENERATED — do not edit */
/** Markup-dump Angular wrappers only (headless lives in src/angular/headless). */
const DEML_MARKUP_COMPONENTS = [
    DemlAccordion,
    DemlActivityList,
    DemlAppFooter,
    DemlAppHeader,
    DemlAppLayout,
    DemlAppSidebar,
    DemlAreaChart,
    DemlArticle,
    DemlAutocomplete,
    DemlAvatar,
    DemlBadge,
    DemlBanner,
    DemlBarChart,
    DemlBox,
    DemlBrand,
    DemlBreadcrumbs,
    DemlBulkToolbar,
    DemlButton,
    DemlButtonGroup,
    DemlCallout,
    DemlCard,
    DemlCardGrid,
    DemlChart,
    DemlChartCard,
    DemlChartEmptyState,
    DemlChartPanel,
    DemlCheckbox,
    DemlCheckboxField,
    DemlCluster,
    DemlCommand,
    DemlConfirmDialog,
    DemlContainer,
    DemlContentLayout,
    DemlDashboardGrid,
    DemlDropdown,
    DemlEmptyState,
    DemlErrorState,
    DemlExploreCard,
    DemlField,
    DemlFileUpload,
    DemlFlashbar,
    DemlFormGrid,
    DemlFormPanel,
    DemlFormSection,
    DemlGrid,
    DemlHelpPanel,
    DemlHudPanel,
    DemlIcon,
    DemlInputDate,
    DemlInputEmail,
    DemlInputNumber,
    DemlInputPassword,
    DemlInputRange,
    DemlInputSearch,
    DemlInputText,
    DemlInputTime,
    DemlKbd,
    DemlLabel,
    DemlLoadingOverlay,
    DemlMetricCard,
    DemlMetricList,
    DemlMicrocard,
    DemlMicrocardGrid,
    DemlNavbar,
    DemlNavigationMenu,
    DemlPageBackLink,
    DemlPageHeader,
    DemlPageSection,
    DemlPageShell,
    DemlPageTemplate,
    DemlPagination,
    DemlPanelGrid,
    DemlPopover,
    DemlProfile,
    DemlProgress,
    DemlPropertyFilter,
    DemlRadioGroup,
    DemlScrollArea,
    DemlSection,
    DemlSectionHeader,
    DemlSectionTemplate,
    DemlSelect,
    DemlSeparator,
    DemlSheet,
    DemlSidebarNav,
    DemlSiteFooter,
    DemlSkeleton,
    DemlSkipLink,
    DemlSpinner,
    DemlSplitPanel,
    DemlStack,
    DemlStatCard,
    DemlStatusBadge,
    DemlStatusCard,
    DemlStatusPill,
    DemlSwitch,
    DemlTable,
    DemlTextField,
    DemlTextarea,
    DemlThemeToggle,
    DemlTileBoard,
    DemlTimeline,
    DemlToast,
    DemlToggle,
    DemlTooltip,
    DemlWizard,
];

/* AUTO-GENERATED — do not edit */

let demlIdSeq = 0;
/**
 * Creates a unique, stable DOM id prefix for accessibility wiring
 * (`aria-controls`, `aria-labelledby`, etc.).
 */
function demlId(prefix = "deml") {
    demlIdSeq += 1;
    return `${prefix}-${demlIdSeq}`;
}

/**
 * Shared keyboard helpers for headless widgets (roving tabindex, menus, tabs).
 */
/**
 * Returns the next index for arrow / Home / End navigation.
 * Wraps at edges. Returns `null` when the event key is unrelated.
 */
function nextRovingIndex(event, current, count, orientation = "horizontal") {
    if (count <= 0)
        return null;
    const key = event.key;
    const horizontal = orientation === "horizontal" || orientation === "both";
    const vertical = orientation === "vertical" || orientation === "both";
    if (key === "Home")
        return 0;
    if (key === "End")
        return count - 1;
    if (horizontal && key === "ArrowRight")
        return (current + 1) % count;
    if (horizontal && key === "ArrowLeft") {
        return (current - 1 + count) % count;
    }
    if (vertical && key === "ArrowDown")
        return (current + 1) % count;
    if (vertical && key === "ArrowUp") {
        return (current - 1 + count) % count;
    }
    return null;
}
/** True when the key activates a button-like control. */
function isActivationKey(event) {
    return event.key === "Enter" || event.key === " ";
}
/**
 * Buffer for WAI-ARIA menu/listbox character typeahead.
 * Resets after `timeoutMs` of inactivity (APG recommends ~500ms).
 */
class TypeaheadBuffer {
    constructor(timeoutMs = 500) {
        this.timeoutMs = timeoutMs;
        this.buffer = "";
        this.timer = null;
    }
    /** Push a printable character; returns the current buffer. */
    push(char) {
        if (char.length !== 1 || char === " ")
            return this.buffer;
        this.buffer += char.toLowerCase();
        if (this.timer)
            clearTimeout(this.timer);
        this.timer = setTimeout(() => {
            this.buffer = "";
            this.timer = null;
        }, this.timeoutMs);
        return this.buffer;
    }
    clear() {
        this.buffer = "";
        if (this.timer) {
            clearTimeout(this.timer);
            this.timer = null;
        }
    }
    dispose() {
        this.clear();
    }
}
/**
 * Find the next item index matching a typeahead buffer.
 * Searches from `fromIndex + 1`, then wraps. Returns -1 when none match.
 */
function findTypeaheadIndex(buffer, labels, fromIndex, isEnabled = () => true) {
    if (!buffer || labels.length === 0)
        return -1;
    const start = fromIndex + 1;
    for (let offset = 0; offset < labels.length; offset++) {
        const i = (start + offset) % labels.length;
        if (!isEnabled(i))
            continue;
        if (labels[i].toLowerCase().startsWith(buffer))
            return i;
    }
    return -1;
}

/**
 * Lightweight focus trap for modal surfaces.
 * Uses a focusin listener on document so Tab/Shift+Tab stay inside `root`.
 * Returns a dispose function.
 */
function createFocusTrap(root) {
    const getFocusable = () => {
        const nodes = root.querySelectorAll([
            "a[href]",
            "button:not([disabled])",
            "textarea:not([disabled])",
            "input:not([disabled])",
            "select:not([disabled])",
            "[tabindex]:not([tabindex='-1'])",
        ].join(","));
        return Array.from(nodes).filter((el) => !el.hasAttribute("disabled") &&
            el.getAttribute("aria-hidden") !== "true" &&
            el.tabIndex >= 0);
    };
    const previouslyFocused = document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;
    const focusFirst = () => {
        const items = getFocusable();
        (items[0] ?? root).focus();
    };
    // Defer so projected content is in the DOM.
    queueMicrotask(focusFirst);
    const onKeyDown = (event) => {
        if (event.key !== "Tab")
            return;
        const items = getFocusable();
        if (items.length === 0) {
            event.preventDefault();
            root.focus();
            return;
        }
        const first = items[0];
        const last = items[items.length - 1];
        const active = document.activeElement;
        if (event.shiftKey && active === first) {
            event.preventDefault();
            last.focus();
        }
        else if (!event.shiftKey && active === last) {
            event.preventDefault();
            first.focus();
        }
    };
    root.addEventListener("keydown", onKeyDown);
    return () => {
        root.removeEventListener("keydown", onKeyDown);
        previouslyFocused?.focus?.();
    };
}
/**
 * Subscribes to pointerdown outside `root` (and optional ignore targets).
 * Returns a dispose function.
 */
function onClickOutside(root, handler, ignore = []) {
    const onPointerDown = (event) => {
        const target = event.target;
        if (!(target instanceof Node))
            return;
        if (root.contains(target))
            return;
        if (ignore.some((el) => el?.contains(target)))
            return;
        handler(event);
    };
    document.addEventListener("pointerdown", onPointerDown, true);
    return () => document.removeEventListener("pointerdown", onPointerDown, true);
}

/**
 * Shared open/selection helpers for headless primitives.
 *
 * Convention:
 * - Open: `open = model<boolean | null>(null)` + `defaultOpen` → `isOpen`
 * - Selection: `value = model<T | null>(null)` + `defaultValue` → `selected`
 * - Lifecycle: `opened` / `closed` where relevant
 * - Rich payloads: `change` (not a duplicate of the model emitter)
 * - Host: `data-state="open" | "closed"` (or `"active" | "inactive"`)
 */
/** Resolve controlled `open` against uncontrolled `defaultOpen`. */
function resolveOpen(open, defaultOpen) {
    return open != null ? open : defaultOpen;
}
/**
 * Resolve controlled `value` against uncontrolled `defaultValue`, then `fallback`.
 * `null` / `undefined` means “not set” at that layer.
 */
function resolveValue(value, defaultValue, fallback = null) {
    if (value != null)
        return value;
    if (defaultValue != null)
        return defaultValue;
    return fallback;
}

/**
 * Shared headless utilities (ids, keyboard, focus, open-state).
 * @packageDocumentation
 */

/** DI token so tab/panel directives can access the root without DOM coupling. */
const DEML_TABS = new InjectionToken("DEML_TABS");

/**
 * Headless tab trigger. Place inside `[demlTabList]`.
 *
 * Prefer `<button type="button">`. Selection comes from parent `deml-tabs`.
 *
 * Accessibility: `role="tab"`, roving `tabindex`, `aria-selected` / `aria-controls`.
 *
 * @example
 * ```html
 * <button type="button" demlTab value="overview" class="tabs__tab">Overview</button>
 * ```
 */
class DemlTab {
    constructor() {
        this.el = inject((ElementRef));
        this.tabs = inject(DEML_TABS);
        /** Unique value identifying this tab (required). */
        this.value = input.required();
        /** When true, tab cannot be selected. */
        this.disabled = input(false);
        /** Optional stable id; defaults to `deml-tab-<value>`. */
        this.id = input(null);
        this.tabId = computed(() => this.id() ?? `deml-tab-${this.value()}`);
        this.panelId = computed(() => `deml-tab-panel-${this.value()}`);
        this.selected = computed(() => !this.disabled() && this.tabs.selected() === this.value());
        /** Preserve native button type when host is a button. */
        this.hostType = computed(() => this.el.nativeElement.tagName === "BUTTON" ? "button" : null);
    }
    onClick(event) {
        if (this.disabled()) {
            event.preventDefault();
            return;
        }
        this.tabs.select(this.value(), false);
    }
    onKeydown(event) {
        if (this.disabled())
            return;
        if (isActivationKey(event)) {
            event.preventDefault();
            this.tabs.select(this.value(), true);
            return;
        }
        this.tabs.onTablistKeydown(event);
    }
    /** Move DOM focus to this trigger. */
    focus() {
        this.el.nativeElement.focus();
    }
    /** Id used by panels for `aria-labelledby`. */
    resolvedId() {
        return this.tabId();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlTab, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "17.1.0", version: "19.2.25", type: DemlTab, isStandalone: true, selector: "[demlTab]", inputs: { value: { classPropertyName: "value", publicName: "value", isSignal: true, isRequired: true, transformFunction: null }, disabled: { classPropertyName: "disabled", publicName: "disabled", isSignal: true, isRequired: false, transformFunction: null }, id: { classPropertyName: "id", publicName: "id", isSignal: true, isRequired: false, transformFunction: null } }, host: { attributes: { "role": "tab" }, listeners: { "click": "onClick($event)", "keydown": "onKeydown($event)" }, properties: { "attr.type": "hostType()", "id": "tabId()", "attr.aria-selected": "selected()", "attr.aria-controls": "panelId()", "attr.aria-disabled": "disabled() ? true : null", "attr.tabindex": "selected() ? 0 : -1", "attr.data-state": "selected() ? 'active' : 'inactive'", "attr.data-disabled": "disabled() ? '' : null" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlTab, decorators: [{
            type: Directive,
            args: [{
                    selector: "[demlTab]",
                    host: {
                        role: "tab",
                        "[attr.type]": "hostType()",
                        "[id]": "tabId()",
                        "[attr.aria-selected]": "selected()",
                        "[attr.aria-controls]": "panelId()",
                        "[attr.aria-disabled]": "disabled() ? true : null",
                        "[attr.tabindex]": "selected() ? 0 : -1",
                        "[attr.data-state]": "selected() ? 'active' : 'inactive'",
                        "[attr.data-disabled]": "disabled() ? '' : null",
                        "(click)": "onClick($event)",
                        "(keydown)": "onKeydown($event)",
                    },
                }]
        }] });

/**
 * Headless tabs root — selection state + keyboard contract.
 *
 * Completely unstyled. Compose with `[demlTabList]`, `[demlTab]`, `[demlTabPanel]`.
 *
 * Accessibility (WAI-ARIA Tabs):
 * - `[demlTabList]` → `role="tablist"`
 * - `[demlTab]` → `role="tab"`, roving tabindex, `aria-selected` / `aria-controls`
 * - `[demlTabPanel]` → `role="tabpanel"`, show/hide
 * - Arrow / Home / End move focus; Enter / Space activate
 *
 * Controlled: `[(value)]`. Uncontrolled: `defaultValue` or first tab.
 *
 * @example
 * ```html
 * <deml-tabs [(value)]="tab">
 *   <div demlTabList aria-label="Account" class="tabs__list">
 *     <button type="button" demlTab value="profile">Profile</button>
 *     <button type="button" demlTab value="billing">Billing</button>
 *   </div>
 *   <section demlTabPanel value="profile">…</section>
 *   <section demlTabPanel value="billing">…</section>
 * </deml-tabs>
 * ```
 */
class DemlTabs {
    constructor() {
        /**
         * Selected tab value.
         * Controlled when non-null; otherwise `defaultValue` / first tab.
         */
        this.value = model(null);
        /** Uncontrolled initial value when `value` is null. */
        this.defaultValue = input(null);
        /**
         * Accessible name forwarded to `[demlTabList]` when the list omits its own.
         */
        this.ariaLabel = input(null);
        /** Arrow-key orientation. Default `horizontal`. */
        this.orientation = input("horizontal");
        /** Wrap focus at ends. Default true. */
        this.wrap = input(true);
        /** Registered tab triggers. */
        this.tabs = contentChildren(DemlTab, { descendants: true });
        /** Effective selected value. */
        this.selected = computed(() => resolveValue(this.value(), this.defaultValue(), this.tabs()[0]?.value() ?? null));
        afterNextRender(() => {
            if (this.value() == null && this.selected() != null) {
                this.value.set(this.selected());
            }
        });
    }
    /** Select a tab by value; optionally move focus to its trigger. */
    select(next, focus = false) {
        if (next !== this.value()) {
            this.value.set(next);
        }
        if (focus)
            this.focusValue(next);
    }
    /**
     * Keyboard handler for the tablist.
     * Wired automatically by `[demlTabList]`; also invoked from tab keydown.
     */
    onTablistKeydown(event) {
        const list = this.tabs().filter((t) => !t.disabled());
        if (list.length === 0)
            return;
        const current = Math.max(0, list.findIndex((t) => t.value() === this.selected()));
        const raw = nextRovingIndex(event, current, list.length, this.orientation());
        if (raw == null)
            return;
        let next = raw;
        if (!this.wrap()) {
            if (event.key === "ArrowRight" || event.key === "ArrowDown") {
                next = Math.min(current + 1, list.length - 1);
            }
            else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
                next = Math.max(current - 1, 0);
            }
        }
        event.preventDefault();
        const tab = list[next];
        if (!tab)
            return;
        this.select(tab.value(), true);
    }
    focusValue(value) {
        this.tabs()
            .find((t) => t.value() === value)
            ?.focus();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlTabs, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.2.0", version: "19.2.25", type: DemlTabs, isStandalone: true, selector: "deml-tabs", inputs: { value: { classPropertyName: "value", publicName: "value", isSignal: true, isRequired: false, transformFunction: null }, defaultValue: { classPropertyName: "defaultValue", publicName: "defaultValue", isSignal: true, isRequired: false, transformFunction: null }, ariaLabel: { classPropertyName: "ariaLabel", publicName: "ariaLabel", isSignal: true, isRequired: false, transformFunction: null }, orientation: { classPropertyName: "orientation", publicName: "orientation", isSignal: true, isRequired: false, transformFunction: null }, wrap: { classPropertyName: "wrap", publicName: "wrap", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { value: "valueChange" }, host: { properties: { "attr.data-orientation": "orientation()" } }, providers: [{ provide: DEML_TABS, useExisting: DemlTabs }], queries: [{ propertyName: "tabs", predicate: DemlTab, descendants: true, isSignal: true }], ngImport: i0, template: `<ng-content />`, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlTabs, decorators: [{
            type: Component,
            args: [{
                    selector: "deml-tabs",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [{ provide: DEML_TABS, useExisting: DemlTabs }],
                    template: `<ng-content />`,
                    host: {
                        "[attr.data-orientation]": "orientation()",
                    },
                }]
        }], ctorParameters: () => [] });

/**
 * Tablist container — sets `role="tablist"` and wires keyboard navigation.
 *
 * @example
 * ```html
 * <div demlTabList aria-label="Settings" class="tabs__list">
 *   <button type="button" demlTab value="a">A</button>
 * </div>
 * ```
 */
class DemlTabList {
    constructor() {
        this.tabs = inject(DEML_TABS);
        /** Optional accessible name for this tablist (overrides root `ariaLabel`). */
        this.ariaLabel = input(null);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlTabList, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "17.1.0", version: "19.2.25", type: DemlTabList, isStandalone: true, selector: "[demlTabList]", inputs: { ariaLabel: { classPropertyName: "ariaLabel", publicName: "ariaLabel", isSignal: true, isRequired: false, transformFunction: null } }, host: { attributes: { "role": "tablist" }, listeners: { "keydown": "tabs.onTablistKeydown($event)" }, properties: { "attr.aria-label": "ariaLabel() ?? tabs.ariaLabel()", "attr.aria-orientation": "tabs.orientation() === 'both' ? 'horizontal' : tabs.orientation()" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlTabList, decorators: [{
            type: Directive,
            args: [{
                    selector: "[demlTabList]",
                    host: {
                        role: "tablist",
                        "[attr.aria-label]": "ariaLabel() ?? tabs.ariaLabel()",
                        "[attr.aria-orientation]": "tabs.orientation() === 'both' ? 'horizontal' : tabs.orientation()",
                        "(keydown)": "tabs.onTablistKeydown($event)",
                    },
                }]
        }] });

/**
 * Headless tab panel directive.
 *
 * Hidden when its `value` does not match the selected tab. Linked to the
 * matching `demlTab` via shared value-based ids.
 *
 * Accessibility:
 * - `role="tabpanel"`
 * - `aria-labelledby` → `deml-tab-<value>`
 * - `hidden` when inactive; `tabindex="0"` when active (panel can receive focus)
 *
 * @example
 * ```html
 * <section demlTabPanel value="overview" class="tabs__panel">…</section>
 * ```
 */
class DemlTabPanel {
    constructor() {
        this.tabs = inject(DEML_TABS);
        /** Value of the tab that owns this panel (required). */
        this.value = input.required();
        /** Optional stable id; defaults to `deml-tab-panel-<value>`. */
        this.id = input(null);
        this.panelId = computed(() => this.id() ?? `deml-tab-panel-${this.value()}`);
        this.active = computed(() => this.tabs.selected() === this.value());
        this.labelledBy = computed(() => {
            const tab = this.tabs.tabs().find((t) => t.value() === this.value());
            return tab?.resolvedId() ?? `deml-tab-${this.value()}`;
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlTabPanel, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "17.1.0", version: "19.2.25", type: DemlTabPanel, isStandalone: true, selector: "[demlTabPanel]", inputs: { value: { classPropertyName: "value", publicName: "value", isSignal: true, isRequired: true, transformFunction: null }, id: { classPropertyName: "id", publicName: "id", isSignal: true, isRequired: false, transformFunction: null } }, host: { attributes: { "role": "tabpanel" }, properties: { "id": "panelId()", "attr.aria-labelledby": "labelledBy()", "hidden": "!active()", "attr.tabindex": "active() ? 0 : null", "attr.data-state": "active() ? 'active' : 'inactive'" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlTabPanel, decorators: [{
            type: Directive,
            args: [{
                    selector: "[demlTabPanel]",
                    host: {
                        role: "tabpanel",
                        "[id]": "panelId()",
                        "[attr.aria-labelledby]": "labelledBy()",
                        "[hidden]": "!active()",
                        "[attr.tabindex]": "active() ? 0 : null",
                        "[attr.data-state]": "active() ? 'active' : 'inactive'",
                    },
                }]
        }] });

/** Convenience import array for standalone apps. */
const DEML_TABS_IMPORTS = [
    DemlTabs,
    DemlTabList,
    DemlTab,
    DemlTabPanel,
];

/** DI token for dialog parts (panel, title, description, close). */
const DEML_DIALOG = new InjectionToken("DEML_DIALOG");

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
class DemlDialog {
    constructor() {
        this.destroyRef = inject(DestroyRef);
        this.dialogRef = viewChild("dialogEl");
        /**
         * Open state. Bind for controlled usage.
         * When `null`, falls back to `defaultOpen` (uncontrolled).
         */
        this.open = model(null);
        /** Uncontrolled initial open state when `open` is null. */
        this.defaultOpen = input(false);
        /**
         * When true (default), append the `<dialog>` to `document.body`.
         * Avoids being clipped by parent `overflow` / `transform` / stacking contexts.
         * Native `showModal()` already uses the top layer; portal is for DOM ancestry.
         */
        this.portal = input(true);
        /** When true (default), Escape closes the dialog. */
        this.dismissible = input(true);
        /** When true (default), clicking the backdrop (the `<dialog>` itself) closes. */
        this.closeOnBackdrop = input(true);
        /** Fallback accessible name when no title directive is present. */
        this.ariaLabel = input("Dialog");
        /** Emits after the dialog opens. */
        this.opened = output();
        /** Emits after the dialog closes. */
        this.closed = output();
        /** @internal — set by title/description directives */
        this.titleId = model(null);
        /** @internal */
        this.descriptionId = model(null);
        this.releaseTrap = null;
        this.skipCloseEmit = false;
        this.portaled = false;
        this.placeholder = null;
        this.prevOpen = null;
        /** Effective open state (controlled `open` or `defaultOpen`). */
        this.isOpen = computed(() => resolveOpen(this.open(), this.defaultOpen()));
        afterNextRender(() => {
            this.applyPortal();
            if (this.isOpen())
                this.syncOpen(true, true);
        });
        effect(() => {
            const open = this.isOpen();
            if (this.prevOpen == null) {
                this.prevOpen = open;
                return;
            }
            if (open === this.prevOpen)
                return;
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
    show() {
        this.open.set(true);
    }
    /** Close the dialog (always allowed programmatically). */
    hide() {
        this.open.set(false);
    }
    /** @internal */
    registerTitle(id) {
        this.titleId.set(id);
    }
    /** @internal */
    registerDescription(id) {
        this.descriptionId.set(id);
    }
    onNativeClose() {
        this.releaseTrap?.();
        this.releaseTrap = null;
        if (this.open() !== false)
            this.open.set(false);
        if (!this.skipCloseEmit)
            this.closed.emit();
    }
    /**
     * Native `cancel` fires on Escape before `close`.
     * Prevent default when non-dismissible so the dialog stays open.
     */
    onCancel(event) {
        if (!this.dismissible()) {
            event.preventDefault();
            return;
        }
        this.open.set(false);
    }
    onDialogClick(event) {
        if (!this.closeOnBackdrop() || !this.dismissible())
            return;
        // Backdrop clicks target the <dialog> element itself, not panel children.
        if (event.target === this.dialogRef()?.nativeElement) {
            this.open.set(false);
        }
    }
    syncOpen(open, _initial) {
        const el = this.dialogRef()?.nativeElement;
        if (!el)
            return;
        if (open && !el.open) {
            el.showModal();
            this.releaseTrap?.();
            this.releaseTrap = createFocusTrap(el);
            this.opened.emit();
        }
        else if (!open && el.open) {
            this.skipCloseEmit = true;
            el.close();
            this.releaseTrap?.();
            this.releaseTrap = null;
            this.skipCloseEmit = false;
            this.closed.emit();
        }
    }
    applyPortal() {
        if (!this.portal() || this.portaled)
            return;
        const el = this.dialogRef()?.nativeElement;
        if (!el || !el.parentNode)
            return;
        this.placeholder = document.createComment("deml-dialog-portal");
        el.parentNode.insertBefore(this.placeholder, el);
        document.body.appendChild(el);
        this.portaled = true;
    }
    teardownPortal() {
        if (!this.portaled)
            return;
        const el = this.dialogRef()?.nativeElement;
        if (el?.open) {
            try {
                el.close();
            }
            catch {
                /* ignore */
            }
        }
        if (this.placeholder?.parentNode && el) {
            this.placeholder.parentNode.insertBefore(el, this.placeholder);
            this.placeholder.parentNode.removeChild(this.placeholder);
        }
        else {
            el?.remove();
        }
        this.placeholder = null;
        this.portaled = false;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlDialog, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.2.0", version: "19.2.25", type: DemlDialog, isStandalone: true, selector: "deml-dialog", inputs: { open: { classPropertyName: "open", publicName: "open", isSignal: true, isRequired: false, transformFunction: null }, defaultOpen: { classPropertyName: "defaultOpen", publicName: "defaultOpen", isSignal: true, isRequired: false, transformFunction: null }, portal: { classPropertyName: "portal", publicName: "portal", isSignal: true, isRequired: false, transformFunction: null }, dismissible: { classPropertyName: "dismissible", publicName: "dismissible", isSignal: true, isRequired: false, transformFunction: null }, closeOnBackdrop: { classPropertyName: "closeOnBackdrop", publicName: "closeOnBackdrop", isSignal: true, isRequired: false, transformFunction: null }, ariaLabel: { classPropertyName: "ariaLabel", publicName: "ariaLabel", isSignal: true, isRequired: false, transformFunction: null }, titleId: { classPropertyName: "titleId", publicName: "titleId", isSignal: true, isRequired: false, transformFunction: null }, descriptionId: { classPropertyName: "descriptionId", publicName: "descriptionId", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { open: "openChange", opened: "opened", closed: "closed", titleId: "titleIdChange", descriptionId: "descriptionIdChange" }, providers: [{ provide: DEML_DIALOG, useExisting: DemlDialog }], viewQueries: [{ propertyName: "dialogRef", first: true, predicate: ["dialogEl"], descendants: true, isSignal: true }], ngImport: i0, template: `
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
  `, isInline: true, styles: [":host{display:contents}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlDialog, decorators: [{
            type: Component,
            args: [{ selector: "deml-dialog", changeDetection: ChangeDetectionStrategy.OnPush, providers: [{ provide: DEML_DIALOG, useExisting: DemlDialog }], template: `
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
  `, styles: [":host{display:contents}\n"] }]
        }], ctorParameters: () => [] });

/**
 * Marks the dialog’s visual panel / surface.
 *
 * Completely unstyled — put your modal card classes here.
 * Keeps backdrop clicks (on the `<dialog>`) distinct from panel interactions.
 *
 * @example
 * ```html
 * <div demlDialogPanel class="modal">…</div>
 * ```
 */
class DemlDialogPanel {
    constructor() {
        this.dialog = inject(DEML_DIALOG);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlDialogPanel, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "19.2.25", type: DemlDialogPanel, isStandalone: true, selector: "[demlDialogPanel]", host: { listeners: { "click": "$event.stopPropagation()" }, properties: { "attr.data-state": "dialog.isOpen() ? 'open' : 'closed'" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlDialogPanel, decorators: [{
            type: Directive,
            args: [{
                    selector: "[demlDialogPanel]",
                    host: {
                        "[attr.data-state]": "dialog.isOpen() ? 'open' : 'closed'",
                        // Prevent accidental dialog-as-backdrop handling if consumers stopPropagation oddly.
                        "(click)": "$event.stopPropagation()",
                    },
                }]
        }] });

/**
 * Marks projected content as the dialog title (`aria-labelledby`).
 *
 * @example
 * ```html
 * <h2 demlDialogTitle class="dialog__title">Confirm</h2>
 * ```
 */
class DemlDialogTitle {
    constructor() {
        this.dialog = inject(DEML_DIALOG);
        this.id = demlId("deml-dialog-title");
        this.dialog.registerTitle(this.id);
    }
    ngOnDestroy() {
        this.dialog.registerTitle(null);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlDialogTitle, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "19.2.25", type: DemlDialogTitle, isStandalone: true, selector: "[demlDialogTitle]", host: { properties: { "id": "id" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlDialogTitle, decorators: [{
            type: Directive,
            args: [{
                    selector: "[demlDialogTitle]",
                    host: {
                        "[id]": "id",
                    },
                }]
        }], ctorParameters: () => [] });

/**
 * Marks projected content as the dialog description (`aria-describedby`).
 *
 * @example
 * ```html
 * <p demlDialogDescription class="dialog__body">This cannot be undone.</p>
 * ```
 */
class DemlDialogDescription {
    constructor() {
        this.dialog = inject(DEML_DIALOG);
        this.id = demlId("deml-dialog-description");
        this.dialog.registerDescription(this.id);
    }
    ngOnDestroy() {
        this.dialog.registerDescription(null);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlDialogDescription, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "19.2.25", type: DemlDialogDescription, isStandalone: true, selector: "[demlDialogDescription]", host: { properties: { "id": "id" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlDialogDescription, decorators: [{
            type: Directive,
            args: [{
                    selector: "[demlDialogDescription]",
                    host: {
                        "[id]": "id",
                    },
                }]
        }], ctorParameters: () => [] });

/**
 * Closes the parent `deml-dialog` when the host is activated.
 * Prefer a native `<button type="button">`.
 *
 * @example
 * ```html
 * <button type="button" demlDialogClose class="button">Cancel</button>
 * ```
 */
class DemlDialogClose {
    constructor() {
        this.dialog = inject(DEML_DIALOG);
        this.el = inject((ElementRef));
        this.hostType = this.el.nativeElement.tagName === "BUTTON" ? "button" : null;
    }
    onClick() {
        this.dialog.hide();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlDialogClose, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "19.2.25", type: DemlDialogClose, isStandalone: true, selector: "[demlDialogClose]", host: { listeners: { "click": "onClick()" }, properties: { "attr.type": "hostType" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlDialogClose, decorators: [{
            type: Directive,
            args: [{
                    selector: "[demlDialogClose]",
                    host: {
                        "[attr.type]": "hostType",
                        "(click)": "onClick()",
                    },
                }]
        }] });

/** Convenience import array for standalone apps. */
const DEML_DIALOG_IMPORTS = [
    DemlDialog,
    DemlDialogPanel,
    DemlDialogTitle,
    DemlDialogDescription,
    DemlDialogClose,
];

const DEML_DISCLOSURE = new InjectionToken("DEML_DISCLOSURE");

/**
 * Headless disclosure root — expand/collapse.
 *
 * Completely unstyled. Compose with `[demlDisclosureButton]` + `[demlDisclosurePanel]`.
 *
 * Accessibility (WAI-ARIA Disclosure):
 * - Trigger: `aria-expanded`, `aria-controls`
 * - Panel: linked id; `hidden` when collapsed; `role="region"`
 * - Enter / Space toggle; Escape collapses when `closeOnEscape`
 *
 * Controlled: `[(open)]`. Uncontrolled: `defaultOpen`.
 *
 * @example
 * ```html
 * <deml-disclosure [(open)]="open">
 *   <button type="button" demlDisclosureButton class="disclosure__trigger">Details</button>
 *   <div demlDisclosurePanel class="disclosure__panel">…</div>
 * </deml-disclosure>
 * ```
 */
class DemlDisclosure {
    constructor() {
        /** Open state. Controlled when non-null. */
        this.open = model(null);
        /** Uncontrolled initial state when `open` is null. */
        this.defaultOpen = input(false);
        /** Disables the trigger. */
        this.disabled = input(false);
        /** When true (default), Escape on the trigger collapses the panel. */
        this.closeOnEscape = input(true);
        /** @internal ids shared by button/panel */
        this.buttonId = demlId("deml-disclosure-button");
        /** @internal */
        this.panelId = demlId("deml-disclosure-panel");
        /** Effective open state. */
        this.isOpen = computed(() => resolveOpen(this.open(), this.defaultOpen()));
    }
    toggle() {
        if (this.disabled())
            return;
        this.setOpen(!this.isOpen());
    }
    setOpen(next) {
        if (this.disabled())
            return;
        if (next === this.isOpen() && this.open() != null)
            return;
        this.open.set(next);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlDisclosure, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "19.2.25", type: DemlDisclosure, isStandalone: true, selector: "deml-disclosure", inputs: { open: { classPropertyName: "open", publicName: "open", isSignal: true, isRequired: false, transformFunction: null }, defaultOpen: { classPropertyName: "defaultOpen", publicName: "defaultOpen", isSignal: true, isRequired: false, transformFunction: null }, disabled: { classPropertyName: "disabled", publicName: "disabled", isSignal: true, isRequired: false, transformFunction: null }, closeOnEscape: { classPropertyName: "closeOnEscape", publicName: "closeOnEscape", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { open: "openChange" }, host: { properties: { "attr.data-state": "isOpen() ? 'open' : 'closed'", "attr.data-disabled": "disabled() ? '' : null" } }, providers: [{ provide: DEML_DISCLOSURE, useExisting: DemlDisclosure }], ngImport: i0, template: `<ng-content />`, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlDisclosure, decorators: [{
            type: Component,
            args: [{
                    selector: "deml-disclosure",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [{ provide: DEML_DISCLOSURE, useExisting: DemlDisclosure }],
                    template: `<ng-content />`,
                    host: {
                        "[attr.data-state]": "isOpen() ? 'open' : 'closed'",
                        "[attr.data-disabled]": "disabled() ? '' : null",
                    },
                }]
        }] });

/**
 * Disclosure trigger. Prefer `<button type="button">`.
 *
 * @example
 * ```html
 * <button type="button" demlDisclosureButton class="disclosure__trigger">More</button>
 * ```
 */
class DemlDisclosureButton {
    constructor() {
        this.disclosure = inject(DEML_DISCLOSURE);
        this.el = inject((ElementRef));
        this.hostType = this.el.nativeElement.tagName === "BUTTON" ? "button" : null;
    }
    onClick(event) {
        event.preventDefault();
        this.disclosure.toggle();
    }
    onKeydown(event) {
        if (this.disclosure.disabled())
            return;
        if (isActivationKey(event)) {
            event.preventDefault();
            this.disclosure.toggle();
            return;
        }
        if (event.key === "Escape" &&
            this.disclosure.closeOnEscape() &&
            this.disclosure.isOpen()) {
            event.preventDefault();
            this.disclosure.setOpen(false);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlDisclosureButton, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "19.2.25", type: DemlDisclosureButton, isStandalone: true, selector: "[demlDisclosureButton]", host: { listeners: { "click": "onClick($event)", "keydown": "onKeydown($event)" }, properties: { "id": "disclosure.buttonId", "attr.type": "hostType", "attr.aria-expanded": "disclosure.isOpen()", "attr.aria-controls": "disclosure.panelId", "attr.disabled": "disclosure.disabled() ? true : null", "attr.data-state": "disclosure.isOpen() ? 'open' : 'closed'", "attr.data-disabled": "disclosure.disabled() ? '' : null" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlDisclosureButton, decorators: [{
            type: Directive,
            args: [{
                    selector: "[demlDisclosureButton]",
                    host: {
                        "[id]": "disclosure.buttonId",
                        "[attr.type]": "hostType",
                        "[attr.aria-expanded]": "disclosure.isOpen()",
                        "[attr.aria-controls]": "disclosure.panelId",
                        "[attr.disabled]": "disclosure.disabled() ? true : null",
                        "[attr.data-state]": "disclosure.isOpen() ? 'open' : 'closed'",
                        "[attr.data-disabled]": "disclosure.disabled() ? '' : null",
                        "(click)": "onClick($event)",
                        "(keydown)": "onKeydown($event)",
                    },
                }]
        }] });

/**
 * Disclosure panel — shown/hidden from parent `isOpen`.
 *
 * @example
 * ```html
 * <div demlDisclosurePanel class="disclosure__panel">…</div>
 * ```
 */
class DemlDisclosurePanel {
    constructor() {
        this.disclosure = inject(DEML_DISCLOSURE);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlDisclosurePanel, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "19.2.25", type: DemlDisclosurePanel, isStandalone: true, selector: "[demlDisclosurePanel]", host: { attributes: { "role": "region" }, properties: { "id": "disclosure.panelId", "attr.aria-labelledby": "disclosure.buttonId", "hidden": "!disclosure.isOpen()", "attr.data-state": "disclosure.isOpen() ? 'open' : 'closed'" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlDisclosurePanel, decorators: [{
            type: Directive,
            args: [{
                    selector: "[demlDisclosurePanel]",
                    host: {
                        "[id]": "disclosure.panelId",
                        role: "region",
                        "[attr.aria-labelledby]": "disclosure.buttonId",
                        "[hidden]": "!disclosure.isOpen()",
                        "[attr.data-state]": "disclosure.isOpen() ? 'open' : 'closed'",
                    },
                }]
        }] });

/** Convenience import array for standalone apps. */
const DEML_DISCLOSURE_IMPORTS = [
    DemlDisclosure,
    DemlDisclosureButton,
    DemlDisclosurePanel,
];

/** DI token for combobox parts (input, options, button). */
const DEML_COMBOBOX = new InjectionToken("DEML_COMBOBOX");

/**
 * A single combobox option (`role="option"`).
 *
 * Highlight follows pointer + keyboard (`aria-activedescendant` on the input).
 * Clicking selects and closes. `mousedown` is prevented so the input keeps focus.
 *
 * @example
 * ```html
 * <li demlComboboxOption value="apple" class="combo__option">Apple</li>
 * ```
 */
class DemlComboboxOption {
    constructor() {
        this.combobox = inject(DEML_COMBOBOX);
        this.el = inject((ElementRef));
        /** Unique value for this option (required). */
        this.value = input.required();
        /**
         * Display / accessible label. Defaults to the host text content when omitted.
         * Prefer setting this explicitly for stable filtering/display.
         */
        this.label = input(null);
        /** When true, option cannot be selected. */
        this.disabled = input(false);
        this.optionId = computed(() => this.combobox.optionDomId(this.value()));
        this.selected = computed(() => this.combobox.isSelected(this.value()));
        this.active = computed(() => this.combobox.isActive(this.value()));
    }
    /**
     * Resolved label for selection sync + change events.
     * Prefers the `label` input, then text content, then `value`.
     */
    resolvedLabel() {
        const explicit = this.label();
        if (explicit != null && explicit !== "")
            return explicit;
        return this.el.nativeElement.textContent?.trim() ?? this.value();
    }
    onClick(event) {
        event.preventDefault();
        if (this.disabled())
            return;
        this.combobox.select(this.value());
    }
    onPointerMove() {
        if (this.disabled())
            return;
        this.combobox.setActiveValue(this.value());
    }
    toData() {
        return {
            value: this.value(),
            label: this.resolvedLabel(),
            disabled: this.disabled(),
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlComboboxOption, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "17.1.0", version: "19.2.25", type: DemlComboboxOption, isStandalone: true, selector: "[demlComboboxOption]", inputs: { value: { classPropertyName: "value", publicName: "value", isSignal: true, isRequired: true, transformFunction: null }, label: { classPropertyName: "label", publicName: "label", isSignal: true, isRequired: false, transformFunction: null }, disabled: { classPropertyName: "disabled", publicName: "disabled", isSignal: true, isRequired: false, transformFunction: null } }, host: { attributes: { "role": "option" }, listeners: { "click": "onClick($event)", "pointermove": "onPointerMove()", "mousedown": "$event.preventDefault()" }, properties: { "id": "optionId()", "attr.aria-selected": "selected()", "attr.aria-disabled": "disabled() ? true : null", "attr.data-active": "active() ? '' : null", "attr.data-selected": "selected() ? '' : null", "attr.data-disabled": "disabled() ? '' : null" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlComboboxOption, decorators: [{
            type: Directive,
            args: [{
                    selector: "[demlComboboxOption]",
                    host: {
                        role: "option",
                        "[id]": "optionId()",
                        "[attr.aria-selected]": "selected()",
                        "[attr.aria-disabled]": "disabled() ? true : null",
                        "[attr.data-active]": "active() ? '' : null",
                        "[attr.data-selected]": "selected() ? '' : null",
                        "[attr.data-disabled]": "disabled() ? '' : null",
                        "(click)": "onClick($event)",
                        "(pointermove)": "onPointerMove()",
                        "(mousedown)": "$event.preventDefault()",
                    },
                }]
        }] });

/**
 * Headless Combobox / Autocomplete root.
 *
 * Completely unstyled. Implements the WAI-ARIA **Editable Combobox with Listbox**
 * pattern using `aria-activedescendant` (focus stays on the input).
 *
 * Composition:
 * - `[demlComboboxLabel]` (optional)
 * - `[demlComboboxInput]` (required)
 * - `[demlComboboxButton]` (optional toggle)
 * - `[demlComboboxOptions]` + `[demlComboboxOption]`
 *
 * Controlled: `[(value)]`, `[(open)]`, `[(query)]`.
 * Uncontrolled: `defaultValue` / `defaultOpen` / `defaultQuery`.
 *
 * Filtering is owned by the consumer — bind `query` and render matching options.
 * The root only manages open/active/selected state and keyboard contracts.
 *
 * @example
 * ```html
 * <deml-combobox [(value)]="fruit" [(query)]="q" [(open)]="open">
 *   <label demlComboboxLabel>Fruit</label>
 *   <input demlComboboxInput class="combo__input" />
 *   <button type="button" demlComboboxButton class="combo__button">▾</button>
 *   <ul demlComboboxOptions class="combo__list">
 *     @for (item of filtered(); track item) {
 *       <li demlComboboxOption [value]="item" class="combo__option">{{ item }}</li>
 *     }
 *   </ul>
 * </deml-combobox>
 * ```
 */
class DemlCombobox {
    constructor() {
        this.host = inject((ElementRef));
        this.destroyRef = inject(DestroyRef);
        // ── Public models / inputs ───────────────────────────────────────────
        /**
         * Selected value (controlled/uncontrolled).
         * `null` means no selection.
         */
        this.value = model(null);
        /** Input text / typeahead query. */
        this.query = model("");
        /** Whether the listbox is open. */
        this.open = model(null);
        /** Uncontrolled initial value when `value` is null. */
        this.defaultValue = input(null);
        /** Uncontrolled initial query. */
        this.defaultQuery = input("");
        /** Uncontrolled initial open state when `open` is null. */
        this.defaultOpen = input(false);
        /** Disables the whole combobox. */
        this.disabled = input(false);
        /**
         * `aria-autocomplete` strategy.
         * - `list` (default): suggestions in a listbox
         * - `both`: list + inline completion (consumer may mirror active option into input)
         * - `none`: no automatic suggestions announced
         */
        this.autocomplete = input("list");
        /**
         * When true (default), open the list when the input is focused.
         * Set false to open only on typing / button / ArrowDown.
         */
        this.openOnFocus = input(true);
        /**
         * When true (default), selecting an option writes the option label into `query`.
         */
        this.syncQueryOnSelect = input(true);
        /** Optional name for forms (forwarded to the input directive). */
        this.name = input(null);
        /** Emits on selection change (including clear → null). */
        this.change = output();
        /** Emits when the listbox opens. */
        this.opened = output();
        /** Emits when the listbox closes. */
        this.closed = output();
        // ── Internal ids ─────────────────────────────────────────────────────
        /** @internal */
        this.listboxId = demlId("deml-combobox-listbox");
        /** @internal */
        this.labelId = demlId("deml-combobox-label");
        /** @internal */
        this.inputId = demlId("deml-combobox-input");
        this.baseOptionId = demlId("deml-combobox-option");
        // ── Registration ─────────────────────────────────────────────────────
        /** Registered option directives (content children). */
        this.options = contentChildren(DemlComboboxOption, { descendants: true });
        /** Active (highlighted) option value — drives `aria-activedescendant`. */
        this.activeValue = signal(null);
        /** Whether a label directive is present. */
        this.hasLabel = signal(false);
        /** Input element ref registered by the input directive. */
        this.inputEl = null;
        this.removeOutside = null;
        this.prevOpen = null;
        // ── Derived state ────────────────────────────────────────────────────
        /** Effective selected value (`value` or `defaultValue`). */
        this.selected = computed(() => resolveValue(this.value(), this.defaultValue(), null));
        /** Effective open state. */
        this.isOpen = computed(() => {
            if (this.disabled())
                return false;
            return resolveOpen(this.open(), this.defaultOpen());
        });
        /** Live query text (model). */
        this.displayQuery = computed(() => this.query());
        this.activeOption = computed(() => {
            const v = this.activeValue();
            if (v == null)
                return null;
            return this.options().find((o) => o.value() === v) ?? null;
        });
        this.activeDescendantId = computed(() => {
            const opt = this.activeOption();
            return opt && this.isOpen() ? opt.optionId() : null;
        });
        this.enabledOptions = computed(() => this.options().filter((o) => !o.disabled()));
        // Keep uncontrolled query seeded once.
        afterNextRender(() => {
            if (this.query() === "" && this.defaultQuery()) {
                this.query.set(this.defaultQuery());
            }
            if (this.value() == null && this.defaultValue() != null) {
                this.value.set(this.defaultValue());
            }
        });
        effect(() => {
            const open = this.isOpen();
            if (this.prevOpen == null) {
                this.prevOpen = open;
                return;
            }
            if (open === this.prevOpen)
                return;
            this.prevOpen = open;
            if (open) {
                this.opened.emit();
                this.ensureActive();
                this.bindOutside();
            }
            else {
                this.closed.emit();
                this.activeValue.set(null);
                this.unbindOutside();
            }
        });
        this.destroyRef.onDestroy(() => this.unbindOutside());
    }
    // ── Public API ───────────────────────────────────────────────────────
    /** Open the listbox (no-op when disabled). */
    show() {
        if (this.disabled())
            return;
        this.open.set(true);
    }
    /** Close the listbox. */
    hide() {
        this.open.set(false);
    }
    /** Toggle open state. */
    toggle() {
        if (this.isOpen())
            this.hide();
        else
            this.show();
    }
    /** Select an option by value (or clear with `null`). */
    select(next) {
        if (this.disabled())
            return;
        if (next != null) {
            const opt = this.options().find((o) => o.value() === next);
            if (!opt || opt.disabled())
                return;
            this.value.set(next);
            if (this.syncQueryOnSelect()) {
                this.query.set(opt.resolvedLabel());
            }
            this.change.emit({ value: next, option: opt.toData() });
        }
        else {
            this.value.set(null);
            this.change.emit({ value: null, option: null });
        }
        this.hide();
        this.focusInput();
    }
    /** Clear selection and optionally the query. */
    clear(clearQuery = true) {
        this.select(null);
        if (clearQuery)
            this.query.set("");
    }
    /** Move highlight to the next/previous enabled option. */
    moveActive(delta) {
        const list = this.enabledOptions();
        if (list.length === 0)
            return;
        if (!this.isOpen())
            this.show();
        const current = this.activeValue();
        let index = list.findIndex((o) => o.value() === current);
        if (index < 0)
            index = delta > 0 ? -1 : 0;
        const next = (index + delta + list.length) % list.length;
        this.activeValue.set(list[next].value());
    }
    /** Highlight first / last enabled option. */
    moveActiveToEdge(edge) {
        const list = this.enabledOptions();
        if (list.length === 0)
            return;
        if (!this.isOpen())
            this.show();
        const opt = edge === "start" ? list[0] : list[list.length - 1];
        this.activeValue.set(opt.value());
    }
    /** Commit the currently highlighted option. */
    selectActive() {
        const active = this.activeValue();
        if (active != null)
            this.select(active);
    }
    /** @internal — option DOM id helper */
    optionDomId(value) {
        return `${this.baseOptionId}-${value}`;
    }
    /** @internal */
    setActiveValue(value) {
        this.activeValue.set(value);
    }
    /** @internal */
    isActive(value) {
        return this.activeValue() === value;
    }
    /** @internal */
    isSelected(value) {
        return this.selected() === value;
    }
    /** @internal */
    registerInput(el) {
        this.inputEl = el;
    }
    /** @internal */
    registerLabel(present) {
        this.hasLabel.set(present);
    }
    /** @internal */
    onQueryInput(next) {
        if (this.disabled())
            return;
        this.query.set(next);
        if (!this.isOpen())
            this.show();
        // Reset highlight so ArrowDown starts fresh after filter changes.
        this.activeValue.set(null);
        queueMicrotask(() => this.ensureActive());
    }
    /** @internal */
    onInputFocus() {
        if (this.disabled())
            return;
        if (this.openOnFocus())
            this.show();
    }
    /** @internal */
    onInputBlur(relatedTarget) {
        // Delay close so option click can run first.
        queueMicrotask(() => {
            const root = this.host.nativeElement;
            const active = document.activeElement;
            if (relatedTarget instanceof Node && root.contains(relatedTarget))
                return;
            if (active && root.contains(active))
                return;
            this.hide();
        });
    }
    focusInput() {
        this.inputEl?.focus();
    }
    /** Snapshot of selected option data (if any). */
    selectedOptionData() {
        const v = this.selected();
        if (v == null)
            return null;
        return this.options().find((o) => o.value() === v)?.toData() ?? null;
    }
    ensureActive() {
        if (this.activeValue() != null)
            return;
        const selected = this.selected();
        if (selected != null) {
            const match = this.enabledOptions().find((o) => o.value() === selected);
            if (match) {
                this.activeValue.set(match.value());
                return;
            }
        }
        const first = this.enabledOptions()[0];
        if (first)
            this.activeValue.set(first.value());
    }
    bindOutside() {
        this.unbindOutside();
        this.removeOutside = onClickOutside(this.host.nativeElement, () => {
            this.hide();
        });
    }
    unbindOutside() {
        this.removeOutside?.();
        this.removeOutside = null;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlCombobox, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.2.0", version: "19.2.25", type: DemlCombobox, isStandalone: true, selector: "deml-combobox", inputs: { value: { classPropertyName: "value", publicName: "value", isSignal: true, isRequired: false, transformFunction: null }, query: { classPropertyName: "query", publicName: "query", isSignal: true, isRequired: false, transformFunction: null }, open: { classPropertyName: "open", publicName: "open", isSignal: true, isRequired: false, transformFunction: null }, defaultValue: { classPropertyName: "defaultValue", publicName: "defaultValue", isSignal: true, isRequired: false, transformFunction: null }, defaultQuery: { classPropertyName: "defaultQuery", publicName: "defaultQuery", isSignal: true, isRequired: false, transformFunction: null }, defaultOpen: { classPropertyName: "defaultOpen", publicName: "defaultOpen", isSignal: true, isRequired: false, transformFunction: null }, disabled: { classPropertyName: "disabled", publicName: "disabled", isSignal: true, isRequired: false, transformFunction: null }, autocomplete: { classPropertyName: "autocomplete", publicName: "autocomplete", isSignal: true, isRequired: false, transformFunction: null }, openOnFocus: { classPropertyName: "openOnFocus", publicName: "openOnFocus", isSignal: true, isRequired: false, transformFunction: null }, syncQueryOnSelect: { classPropertyName: "syncQueryOnSelect", publicName: "syncQueryOnSelect", isSignal: true, isRequired: false, transformFunction: null }, name: { classPropertyName: "name", publicName: "name", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { value: "valueChange", query: "queryChange", open: "openChange", change: "change", opened: "opened", closed: "closed" }, host: { properties: { "attr.data-state": "isOpen() ? 'open' : 'closed'", "attr.data-disabled": "disabled() ? '' : null" } }, providers: [{ provide: DEML_COMBOBOX, useExisting: DemlCombobox }], queries: [{ propertyName: "options", predicate: DemlComboboxOption, descendants: true, isSignal: true }], ngImport: i0, template: `<ng-content />`, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlCombobox, decorators: [{
            type: Component,
            args: [{
                    selector: "deml-combobox",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [{ provide: DEML_COMBOBOX, useExisting: DemlCombobox }],
                    template: `<ng-content />`,
                    host: {
                        // Transparent state host — no layout, no styles.
                        "[attr.data-state]": "isOpen() ? 'open' : 'closed'",
                        "[attr.data-disabled]": "disabled() ? '' : null",
                    },
                }]
        }], ctorParameters: () => [] });

/**
 * Combobox text input — keeps focus; listbox uses `aria-activedescendant`.
 *
 * Apply to a native `<input>`. Completely unstyled.
 *
 * Keyboard (when focused):
 * - ArrowDown / ArrowUp — open + move highlight
 * - Home / End — first / last option
 * - Enter — select highlighted option
 * - Escape — close (clears highlight); second Escape can be handled by consumer
 * - Tab — close and move focus naturally
 *
 * @example
 * ```html
 * <input demlComboboxInput class="combo__input" placeholder="Search…" />
 * ```
 */
class DemlComboboxInput {
    constructor() {
        this.combobox = inject(DEML_COMBOBOX);
        this.el = inject((ElementRef));
        this.labelledBy = computed(() => this.combobox.hasLabel() ? this.combobox.labelId : null);
        afterNextRender(() => {
            this.combobox.registerInput(this.el.nativeElement);
        });
    }
    ngOnDestroy() {
        this.combobox.registerInput(null);
    }
    onInput(event) {
        const target = event.target;
        this.combobox.onQueryInput(target.value);
    }
    onBlur(event) {
        this.combobox.onInputBlur(event.relatedTarget);
    }
    onKeydown(event) {
        if (this.combobox.disabled())
            return;
        switch (event.key) {
            case "ArrowDown":
                event.preventDefault();
                if (!this.combobox.isOpen())
                    this.combobox.show();
                else
                    this.combobox.moveActive(1);
                break;
            case "ArrowUp":
                event.preventDefault();
                if (!this.combobox.isOpen())
                    this.combobox.show();
                else
                    this.combobox.moveActive(-1);
                break;
            case "Home":
                if (this.combobox.isOpen()) {
                    event.preventDefault();
                    this.combobox.moveActiveToEdge("start");
                }
                break;
            case "End":
                if (this.combobox.isOpen()) {
                    event.preventDefault();
                    this.combobox.moveActiveToEdge("end");
                }
                break;
            case "Enter":
                if (this.combobox.isOpen()) {
                    event.preventDefault();
                    this.combobox.selectActive();
                }
                break;
            case "Escape":
                if (this.combobox.isOpen()) {
                    event.preventDefault();
                    this.combobox.hide();
                }
                break;
            case "Tab":
                this.combobox.hide();
                break;
            default:
                break;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlComboboxInput, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "19.2.25", type: DemlComboboxInput, isStandalone: true, selector: "input[demlComboboxInput]", host: { attributes: { "role": "combobox" }, listeners: { "input": "onInput($event)", "keydown": "onKeydown($event)", "focus": "combobox.onInputFocus()", "blur": "onBlur($event)" }, properties: { "id": "combobox.inputId", "attr.aria-expanded": "combobox.isOpen()", "attr.aria-controls": "combobox.listboxId", "attr.aria-autocomplete": "combobox.autocomplete()", "attr.aria-activedescendant": "combobox.activeDescendantId()", "attr.aria-labelledby": "labelledBy()", "attr.aria-disabled": "combobox.disabled() ? true : null", "attr.disabled": "combobox.disabled() ? true : null", "attr.name": "combobox.name()", "attr.autocomplete": "'off'", "attr.data-state": "combobox.isOpen() ? 'open' : 'closed'", "value": "combobox.displayQuery()" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlComboboxInput, decorators: [{
            type: Directive,
            args: [{
                    selector: "input[demlComboboxInput]",
                    host: {
                        role: "combobox",
                        "[id]": "combobox.inputId",
                        "[attr.aria-expanded]": "combobox.isOpen()",
                        "[attr.aria-controls]": "combobox.listboxId",
                        "[attr.aria-autocomplete]": "combobox.autocomplete()",
                        "[attr.aria-activedescendant]": "combobox.activeDescendantId()",
                        "[attr.aria-labelledby]": "labelledBy()",
                        "[attr.aria-disabled]": "combobox.disabled() ? true : null",
                        "[attr.disabled]": "combobox.disabled() ? true : null",
                        "[attr.name]": "combobox.name()",
                        "[attr.autocomplete]": "'off'",
                        "[attr.data-state]": "combobox.isOpen() ? 'open' : 'closed'",
                        "[value]": "combobox.displayQuery()",
                        "(input)": "onInput($event)",
                        "(keydown)": "onKeydown($event)",
                        "(focus)": "combobox.onInputFocus()",
                        "(blur)": "onBlur($event)",
                    },
                }]
        }], ctorParameters: () => [] });

/**
 * Optional button that toggles the listbox open/closed.
 * Prefer `<button type="button">`.
 *
 * @example
 * ```html
 * <button type="button" demlComboboxButton aria-label="Show options">▾</button>
 * ```
 */
class DemlComboboxButton {
    constructor() {
        this.combobox = inject(DEML_COMBOBOX);
        this.el = inject((ElementRef));
        this.hostType = this.el.nativeElement.tagName === "BUTTON" ? "button" : null;
    }
    onClick(event) {
        event.preventDefault();
        if (this.combobox.disabled())
            return;
        this.combobox.toggle();
        this.combobox.focusInput();
    }
    onKeydown(event) {
        if (this.combobox.disabled())
            return;
        if (event.key === "ArrowDown" || event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            this.combobox.show();
            this.combobox.focusInput();
        }
        if (event.key === "Escape" && this.combobox.isOpen()) {
            event.preventDefault();
            this.combobox.hide();
            this.combobox.focusInput();
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlComboboxButton, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "19.2.25", type: DemlComboboxButton, isStandalone: true, selector: "[demlComboboxButton]", host: { listeners: { "click": "onClick($event)", "keydown": "onKeydown($event)" }, properties: { "attr.type": "hostType", "attr.tabindex": "combobox.disabled() ? -1 : 0", "attr.aria-haspopup": "'listbox'", "attr.aria-expanded": "combobox.isOpen()", "attr.aria-controls": "combobox.listboxId", "attr.disabled": "combobox.disabled() ? true : null", "attr.data-state": "combobox.isOpen() ? 'open' : 'closed'" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlComboboxButton, decorators: [{
            type: Directive,
            args: [{
                    selector: "[demlComboboxButton]",
                    host: {
                        "[attr.type]": "hostType",
                        "[attr.tabindex]": "combobox.disabled() ? -1 : 0",
                        "[attr.aria-haspopup]": "'listbox'",
                        "[attr.aria-expanded]": "combobox.isOpen()",
                        "[attr.aria-controls]": "combobox.listboxId",
                        "[attr.disabled]": "combobox.disabled() ? true : null",
                        "[attr.data-state]": "combobox.isOpen() ? 'open' : 'closed'",
                        "(click)": "onClick($event)",
                        "(keydown)": "onKeydown($event)",
                    },
                }]
        }] });

/**
 * Listbox container for combobox options.
 *
 * Hidden when closed. Completely unstyled — apply your own list styles.
 *
 * @example
 * ```html
 * <ul demlComboboxOptions class="combo__list">…</ul>
 * ```
 */
class DemlComboboxOptions {
    constructor() {
        this.combobox = inject(DEML_COMBOBOX);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlComboboxOptions, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "19.2.25", type: DemlComboboxOptions, isStandalone: true, selector: "[demlComboboxOptions]", host: { attributes: { "role": "listbox" }, properties: { "id": "combobox.listboxId", "attr.aria-labelledby": "combobox.hasLabel() ? combobox.labelId : null", "hidden": "!combobox.isOpen()", "attr.data-state": "combobox.isOpen() ? 'open' : 'closed'" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlComboboxOptions, decorators: [{
            type: Directive,
            args: [{
                    selector: "[demlComboboxOptions]",
                    host: {
                        role: "listbox",
                        "[id]": "combobox.listboxId",
                        "[attr.aria-labelledby]": "combobox.hasLabel() ? combobox.labelId : null",
                        "[hidden]": "!combobox.isOpen()",
                        "[attr.data-state]": "combobox.isOpen() ? 'open' : 'closed'",
                    },
                }]
        }] });

/**
 * Optional label for the combobox input (`aria-labelledby` wiring).
 *
 * @example
 * ```html
 * <label demlComboboxLabel class="combo__label">Fruit</label>
 * ```
 */
class DemlComboboxLabel {
    constructor() {
        this.combobox = inject(DEML_COMBOBOX);
        this.combobox.registerLabel(true);
    }
    ngOnDestroy() {
        this.combobox.registerLabel(false);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlComboboxLabel, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "19.2.25", type: DemlComboboxLabel, isStandalone: true, selector: "[demlComboboxLabel]", host: { properties: { "id": "combobox.labelId", "attr.for": "combobox.inputId" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlComboboxLabel, decorators: [{
            type: Directive,
            args: [{
                    selector: "[demlComboboxLabel]",
                    host: {
                        "[id]": "combobox.labelId",
                        "[attr.for]": "combobox.inputId",
                    },
                }]
        }], ctorParameters: () => [] });

/** Convenience import array for standalone apps. */
const DEML_COMBOBOX_IMPORTS = [
    DemlCombobox,
    DemlComboboxInput,
    DemlComboboxButton,
    DemlComboboxOptions,
    DemlComboboxOption,
    DemlComboboxLabel,
];

/** DI token for menu parts (button, items, item). */
const DEML_MENU = new InjectionToken("DEML_MENU");

/**
 * A single menu item (`role="menuitem"`).
 *
 * Prefer `<button type="button">` or `<a href>`. Completely unstyled.
 *
 * - Disabled items are skipped by keyboard navigation and are not activatable.
 * - `data-active` marks the keyboard/pointer-highlighted item for styling.
 *
 * @example
 * ```html
 * <button type="button" demlMenuItem value="edit" class="menu__item">Edit</button>
 * ```
 */
class DemlMenuItem {
    constructor() {
        this.menu = inject(DEML_MENU);
        this.el = inject((ElementRef));
        /**
         * Optional stable value emitted on root `change` / item `select`.
         * When omitted, only the label is available on the event.
         */
        this.value = input(null);
        /**
         * Optional label override. Defaults to the host text content.
         * Used for typeahead matching and change events.
         */
        this.label = input(null);
        /** When true, item cannot be activated and is skipped in arrow navigation. */
        this.disabled = input(false);
        /** Fires when this item is activated (in addition to the menu `change` output). */
        this.select = output();
        this.hostType = this.el.nativeElement.tagName === "BUTTON" ? "button" : null;
        this.index = computed(() => this.menu.indexOf(this));
        this.active = computed(() => this.menu.isActiveIndex(this.index()));
        /** Roving tabindex: only the active item is in the tab order while open. */
        this.tabIndex = computed(() => {
            if (!this.menu.isOpen() || this.disabled())
                return -1;
            return this.active() ? 0 : -1;
        });
    }
    resolvedLabel() {
        const explicit = this.label();
        if (explicit != null && explicit !== "")
            return explicit;
        return this.el.nativeElement.textContent?.trim() ?? this.value() ?? "";
    }
    focus() {
        this.el.nativeElement.focus();
    }
    /** @internal called by menu root after activation */
    notifySelect() {
        this.select.emit(this.toData());
    }
    toData() {
        return {
            value: this.value(),
            label: this.resolvedLabel(),
            disabled: this.disabled(),
        };
    }
    onClick(event) {
        if (this.disabled()) {
            event.preventDefault();
            event.stopPropagation();
            return;
        }
        event.preventDefault();
        this.menu.activateIndex(this.index());
    }
    onPointerMove() {
        if (this.disabled())
            return;
        this.menu.setActiveFromItem(this);
    }
    onFocus() {
        if (this.disabled())
            return;
        this.menu.setActiveFromItem(this);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlMenuItem, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "17.1.0", version: "19.2.25", type: DemlMenuItem, isStandalone: true, selector: "[demlMenuItem]", inputs: { value: { classPropertyName: "value", publicName: "value", isSignal: true, isRequired: false, transformFunction: null }, label: { classPropertyName: "label", publicName: "label", isSignal: true, isRequired: false, transformFunction: null }, disabled: { classPropertyName: "disabled", publicName: "disabled", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { select: "select" }, host: { attributes: { "role": "menuitem" }, listeners: { "click": "onClick($event)", "pointermove": "onPointerMove()", "focus": "onFocus()" }, properties: { "attr.type": "hostType", "attr.tabindex": "tabIndex()", "attr.aria-disabled": "disabled() ? true : null", "attr.data-active": "active() ? '' : null", "attr.data-disabled": "disabled() ? '' : null" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlMenuItem, decorators: [{
            type: Directive,
            args: [{
                    selector: "[demlMenuItem]",
                    host: {
                        role: "menuitem",
                        "[attr.type]": "hostType",
                        "[attr.tabindex]": "tabIndex()",
                        "[attr.aria-disabled]": "disabled() ? true : null",
                        "[attr.data-active]": "active() ? '' : null",
                        "[attr.data-disabled]": "disabled() ? '' : null",
                        "(click)": "onClick($event)",
                        "(pointermove)": "onPointerMove()",
                        "(focus)": "onFocus()",
                    },
                }]
        }] });

/**
 * Headless Menu root — Trigger (`demlMenuButton`) + Panel (`demlMenuItems`).
 *
 * Completely unstyled. Implements the WAI-ARIA **Menu** pattern:
 * focus moves into the menu when open and restores to the trigger on close.
 *
 * Controlled: `[(open)]`. Uncontrolled: `defaultOpen`.
 *
 * @example
 * ```html
 * <deml-menu [(open)]="open" (change)="onChange($event)">
 *   <button type="button" demlMenuButton class="menu__trigger">Actions</button>
 *   <div demlMenuItems class="menu__panel">
 *     <button type="button" demlMenuItem value="edit" class="menu__item">Edit</button>
 *     <button type="button" demlMenuItem value="delete" class="menu__item">Delete</button>
 *     <button type="button" demlMenuItem disabled class="menu__item">Archive</button>
 *   </div>
 * </deml-menu>
 * ```
 */
class DemlMenu {
    constructor() {
        this.host = inject((ElementRef));
        this.destroyRef = inject(DestroyRef);
        /** Whether the menu panel is open. */
        this.open = model(null);
        /** Uncontrolled initial open state when `open` is null. */
        this.defaultOpen = input(false);
        /** Disables the trigger and prevents opening. */
        this.disabled = input(false);
        /**
         * When true (default), activating an item closes the menu.
         * Set false for persistent menus (rare).
         */
        this.closeOnSelect = input(true);
        /** Emits when an enabled item is activated (rich payload). */
        this.change = output();
        /** Emits when the menu opens. */
        this.opened = output();
        /** Emits when the menu closes. */
        this.closed = output();
        /** @internal */
        this.menuId = demlId("deml-menu");
        /** @internal */
        this.buttonId = demlId("deml-menu-button");
        this.items = contentChildren(DemlMenuItem, { descendants: true });
        /** Index of the focused / active item among registered items. */
        this.activeIndex = signal(-1);
        this.buttonEl = null;
        this.itemsEl = null;
        this.removeOutside = null;
        this.prevOpen = null;
        this.typeahead = new TypeaheadBuffer(500);
        this.isOpen = computed(() => {
            if (this.disabled())
                return false;
            return resolveOpen(this.open(), this.defaultOpen());
        });
        this.enabledItems = computed(() => this.items().filter((item) => !item.disabled()));
        this.activeItem = computed(() => {
            const i = this.activeIndex();
            const list = this.items();
            return i >= 0 && i < list.length ? list[i] : null;
        });
        effect(() => {
            const open = this.isOpen();
            if (this.prevOpen == null) {
                this.prevOpen = open;
                if (open)
                    this.onOpened();
                return;
            }
            if (open === this.prevOpen)
                return;
            this.prevOpen = open;
            if (open)
                this.onOpened();
            else
                this.onClosed();
        });
        this.destroyRef.onDestroy(() => {
            this.unbindOutside();
            this.typeahead.dispose();
        });
    }
    // ── Public API ───────────────────────────────────────────────────────
    show(focus = "first") {
        if (this.disabled())
            return;
        this.open.set(true);
        queueMicrotask(() => {
            if (focus === "first")
                this.focusItemAt(this.firstEnabledIndex());
            else if (focus === "last")
                this.focusItemAt(this.lastEnabledIndex());
        });
    }
    hide(restoreFocus = true) {
        this.open.set(false);
        if (restoreFocus)
            queueMicrotask(() => this.buttonEl?.focus());
    }
    toggle() {
        if (this.isOpen())
            this.hide();
        else
            this.show("first");
    }
    /** Activate item by registered index (skips disabled). */
    activateIndex(index) {
        const item = this.items()[index];
        if (!item || item.disabled())
            return;
        this.change.emit({
            value: item.value(),
            label: item.resolvedLabel(),
        });
        item.notifySelect();
        if (this.closeOnSelect())
            this.hide(true);
    }
    /** @internal */
    registerButton(el) {
        this.buttonEl = el;
    }
    /** @internal */
    registerItemsEl(el) {
        this.itemsEl = el;
    }
    /** @internal */
    isActiveIndex(index) {
        return this.activeIndex() === index;
    }
    /** @internal index of a given item directive among content children */
    indexOf(item) {
        return this.items().indexOf(item);
    }
    /** @internal keyboard handler for the menu panel */
    onMenuKeydown(event) {
        const list = this.items();
        if (list.length === 0)
            return;
        const current = Math.max(0, this.activeIndex());
        const next = nextRovingIndex(event, current, list.length, "vertical");
        if (next != null) {
            event.preventDefault();
            const dir = event.key === "ArrowUp" || event.key === "End" ? -1 : 1;
            this.focusItemAt(this.nearestEnabled(next, dir));
            this.typeahead.clear();
            return;
        }
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            this.activateIndex(this.activeIndex());
            return;
        }
        if (event.key === "Escape") {
            event.preventDefault();
            this.hide(true);
            return;
        }
        if (event.key === "Tab") {
            this.hide(false);
            return;
        }
        // Typeahead — printable characters
        if (event.key.length === 1 && !event.ctrlKey && !event.metaKey && !event.altKey) {
            const buffer = this.typeahead.push(event.key);
            if (!buffer)
                return;
            event.preventDefault();
            const labels = list.map((i) => i.resolvedLabel());
            const match = findTypeaheadIndex(buffer, labels, current, (i) => !list[i].disabled());
            if (match >= 0)
                this.focusItemAt(match);
        }
    }
    /** @internal trigger keyboard when closed / to open */
    onButtonKeydown(event) {
        if (this.disabled())
            return;
        if (event.key === "ArrowDown" || event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            this.show("first");
            return;
        }
        if (event.key === "ArrowUp") {
            event.preventDefault();
            this.show("last");
            return;
        }
    }
    /** @internal pointer highlight */
    setActiveFromItem(item) {
        const index = this.indexOf(item);
        if (index >= 0 && !item.disabled())
            this.activeIndex.set(index);
    }
    onOpened() {
        this.opened.emit();
        this.bindOutside();
        // Default focus first enabled if nothing focused yet
        queueMicrotask(() => {
            if (this.activeIndex() < 0) {
                this.focusItemAt(this.firstEnabledIndex());
            }
            else {
                this.items()[this.activeIndex()]?.focus();
            }
        });
    }
    onClosed() {
        this.closed.emit();
        this.activeIndex.set(-1);
        this.typeahead.clear();
        this.unbindOutside();
    }
    focusItemAt(index) {
        if (index < 0)
            return;
        const item = this.items()[index];
        if (!item || item.disabled())
            return;
        this.activeIndex.set(index);
        item.focus();
    }
    firstEnabledIndex() {
        return this.items().findIndex((i) => !i.disabled());
    }
    lastEnabledIndex() {
        const list = this.items();
        for (let i = list.length - 1; i >= 0; i--) {
            if (!list[i].disabled())
                return i;
        }
        return -1;
    }
    /**
     * If `index` is disabled, walk in `dir` until an enabled item is found.
     */
    nearestEnabled(index, dir) {
        const list = this.items();
        if (list.length === 0)
            return -1;
        let i = index;
        for (let n = 0; n < list.length; n++) {
            const item = list[i];
            if (item && !item.disabled())
                return i;
            i = (i + dir + list.length) % list.length;
        }
        return -1;
    }
    bindOutside() {
        this.unbindOutside();
        this.removeOutside = onClickOutside(this.host.nativeElement, () => this.hide(true), [this.buttonEl]);
    }
    unbindOutside() {
        this.removeOutside?.();
        this.removeOutside = null;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlMenu, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.2.0", version: "19.2.25", type: DemlMenu, isStandalone: true, selector: "deml-menu", inputs: { open: { classPropertyName: "open", publicName: "open", isSignal: true, isRequired: false, transformFunction: null }, defaultOpen: { classPropertyName: "defaultOpen", publicName: "defaultOpen", isSignal: true, isRequired: false, transformFunction: null }, disabled: { classPropertyName: "disabled", publicName: "disabled", isSignal: true, isRequired: false, transformFunction: null }, closeOnSelect: { classPropertyName: "closeOnSelect", publicName: "closeOnSelect", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { open: "openChange", change: "change", opened: "opened", closed: "closed" }, host: { properties: { "attr.data-state": "isOpen() ? 'open' : 'closed'", "attr.data-disabled": "disabled() ? '' : null" } }, providers: [{ provide: DEML_MENU, useExisting: DemlMenu }], queries: [{ propertyName: "items", predicate: DemlMenuItem, descendants: true, isSignal: true }], ngImport: i0, template: `<ng-content />`, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlMenu, decorators: [{
            type: Component,
            args: [{
                    selector: "deml-menu",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [{ provide: DEML_MENU, useExisting: DemlMenu }],
                    template: `<ng-content />`,
                    host: {
                        "[attr.data-state]": "isOpen() ? 'open' : 'closed'",
                        "[attr.data-disabled]": "disabled() ? '' : null",
                    },
                }]
        }], ctorParameters: () => [] });

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
class DemlMenuButton {
    constructor() {
        this.menu = inject(DEML_MENU);
        this.el = inject((ElementRef));
        this.hostType = this.el.nativeElement.tagName === "BUTTON" ? "button" : null;
        afterNextRender(() => {
            this.menu.registerButton(this.el.nativeElement);
        });
    }
    ngOnDestroy() {
        this.menu.registerButton(null);
    }
    onClick(event) {
        event.preventDefault();
        if (this.menu.disabled())
            return;
        this.menu.toggle();
    }
    onKeydown(event) {
        this.menu.onButtonKeydown(event);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlMenuButton, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "19.2.25", type: DemlMenuButton, isStandalone: true, selector: "[demlMenuButton]", host: { listeners: { "click": "onClick($event)", "keydown": "onKeydown($event)" }, properties: { "id": "menu.buttonId", "attr.type": "hostType", "attr.aria-haspopup": "'menu'", "attr.aria-expanded": "menu.isOpen()", "attr.aria-controls": "menu.menuId", "attr.disabled": "menu.disabled() ? true : null", "attr.data-state": "menu.isOpen() ? 'open' : 'closed'" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlMenuButton, decorators: [{
            type: Directive,
            args: [{
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
                }]
        }], ctorParameters: () => [] });

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
class DemlMenuItems {
    constructor() {
        this.menu = inject(DEML_MENU);
        this.el = inject((ElementRef));
        afterNextRender(() => {
            this.menu.registerItemsEl(this.el.nativeElement);
        });
    }
    ngOnDestroy() {
        this.menu.registerItemsEl(null);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlMenuItems, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "19.2.25", type: DemlMenuItems, isStandalone: true, selector: "[demlMenuItems]", host: { attributes: { "role": "menu" }, listeners: { "keydown": "menu.onMenuKeydown($event)" }, properties: { "id": "menu.menuId", "attr.aria-labelledby": "menu.buttonId", "attr.tabindex": "menu.isOpen() ? -1 : null", "hidden": "!menu.isOpen()", "attr.data-state": "menu.isOpen() ? 'open' : 'closed'" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlMenuItems, decorators: [{
            type: Directive,
            args: [{
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
                }]
        }], ctorParameters: () => [] });

/** Convenience import array for standalone apps. */
const DEML_MENU_IMPORTS = [
    DemlMenu,
    DemlMenuButton,
    DemlMenuItems,
    DemlMenuItem,
];

/**
 * deml-ui headless Angular primitives.
 *
 * Unstyled, accessible building blocks. Apply your own classes/CSS.
 * See `CONVENTIONS.md` and `USAGE.md` in this folder.
 *
 * @packageDocumentation
 */
/** All headless standalone directives/components. */
const DEML_HEADLESS = [
    ...DEML_TABS_IMPORTS,
    ...DEML_DIALOG_IMPORTS,
    ...DEML_DISCLOSURE_IMPORTS,
    ...DEML_COMBOBOX_IMPORTS,
    ...DEML_MENU_IMPORTS,
];

/**
 * deml-ui Angular public API.
 *
 * - Markup wrappers: generated from components HTML (styled by you via CSS)
 * - Headless primitives: unstyled behavior (tabs, dialog, disclosure, menu, combobox)
 */
/** Markup dumps + headless primitives. */
const DEML_COMPONENTS = [
    ...DEML_MARKUP_COMPONENTS,
    ...DEML_HEADLESS,
];

/**
 * Generated bundle index. Do not edit.
 */

export { DEML_COMBOBOX, DEML_COMBOBOX_IMPORTS, DEML_COMPONENTS, DEML_DIALOG, DEML_DIALOG_IMPORTS, DEML_DISCLOSURE, DEML_DISCLOSURE_IMPORTS, DEML_HEADLESS, DEML_MARKUP_COMPONENTS, DEML_MENU, DEML_MENU_IMPORTS, DEML_TABS, DEML_TABS_IMPORTS, DemlAccordion, DemlActivityList, DemlAppFooter, DemlAppHeader, DemlAppLayout, DemlAppSidebar, DemlAreaChart, DemlArticle, DemlAutocomplete, DemlAvatar, DemlBadge, DemlBanner, DemlBarChart, DemlBox, DemlBrand, DemlBreadcrumbs, DemlBulkToolbar, DemlButton, DemlButtonGroup, DemlCallout, DemlCard, DemlCardGrid, DemlChart, DemlChartCard, DemlChartEmptyState, DemlChartPanel, DemlCheckbox, DemlCheckboxField, DemlCluster, DemlCombobox, DemlComboboxButton, DemlComboboxInput, DemlComboboxLabel, DemlComboboxOption, DemlComboboxOptions, DemlCommand, DemlConfirmDialog, DemlContainer, DemlContentLayout, DemlDashboardGrid, DemlDialog, DemlDialogClose, DemlDialogDescription, DemlDialogPanel, DemlDialogTitle, DemlDisclosure, DemlDisclosureButton, DemlDisclosurePanel, DemlDropdown, DemlEmptyState, DemlErrorState, DemlExploreCard, DemlField, DemlFileUpload, DemlFlashbar, DemlFormGrid, DemlFormPanel, DemlFormSection, DemlGrid, DemlHelpPanel, DemlHudPanel, DemlIcon, DemlInputDate, DemlInputEmail, DemlInputNumber, DemlInputPassword, DemlInputRange, DemlInputSearch, DemlInputText, DemlInputTime, DemlKbd, DemlLabel, DemlLoadingOverlay, DemlMenu, DemlMenuButton, DemlMenuItem, DemlMenuItems, DemlMetricCard, DemlMetricList, DemlMicrocard, DemlMicrocardGrid, DemlNavbar, DemlNavigationMenu, DemlPageBackLink, DemlPageHeader, DemlPageSection, DemlPageShell, DemlPageTemplate, DemlPagination, DemlPanelGrid, DemlPopover, DemlProfile, DemlProgress, DemlPropertyFilter, DemlRadioGroup, DemlScrollArea, DemlSection, DemlSectionHeader, DemlSectionTemplate, DemlSelect, DemlSeparator, DemlSheet, DemlSidebarNav, DemlSiteFooter, DemlSkeleton, DemlSkipLink, DemlSpinner, DemlSplitPanel, DemlStack, DemlStatCard, DemlStatusBadge, DemlStatusCard, DemlStatusPill, DemlSwitch, DemlTab, DemlTabList, DemlTabPanel, DemlTable, DemlTabs, DemlTextField, DemlTextarea, DemlThemeToggle, DemlTileBoard, DemlTimeline, DemlToast, DemlToggle, DemlTooltip, DemlWizard, TypeaheadBuffer, createFocusTrap, demlId, findTypeaheadIndex, isActivationKey, nextRovingIndex, onClickOutside, resolveOpen, resolveValue };
//# sourceMappingURL=deml-ui.mjs.map
