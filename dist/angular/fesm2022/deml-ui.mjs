import * as i0 from '@angular/core';
import { ViewEncapsulation, Component, InjectionToken, inject, ElementRef, input, computed, Directive, model, contentChildren, afterNextRender, ChangeDetectionStrategy, DestroyRef, viewChild, output, effect, signal } from '@angular/core';

/* AUTO-GENERATED from components/app-layout/app-layout.html — do not edit */
const DEML_TEMPLATE$1D = "<div class=\"app-layout\">\n      <aside class=\"app-layout__nav\" aria-label=\"App navigation\">Nav</aside>\n      <div class=\"app-layout__main\">\n        <header class=\"app-layout__header\">Header</header>\n        <main class=\"app-layout__content\">Main content</main>\n      </div>\n      <aside class=\"app-layout__tools\" aria-label=\"Tools\">Tools</aside>\n    </div>";
class DemlAppLayout {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$1D;
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

/* AUTO-GENERATED from components/area-chart/area-chart.html — do not edit */
const DEML_TEMPLATE$1B = "<div class=\"chart-board\" data-chart-board data-chart-ymax=\"auto\">\n      <article class=\"chart-card\" data-accent=\"primary\" aria-labelledby=\"area-a\">\n        <header class=\"chart-card-header\">\n          <h3 class=\"chart-card-heading\" id=\"area-a\">Streams</h3>\n          <p class=\"chart-card-meta\">Shared Y · 0–max</p>\n        </header>\n        <div class=\"chart-card-body\">\n          <div class=\"area-chart-frame\" data-variant=\"spark\" role=\"img\" aria-label=\"Streams\">\n            <div\n              class=\"area-chart-mount\"\n              data-chart=\"area\"\n              data-series=\"[120,156,142,188,210,196,230]\"\n              data-categories='[\"Mon\",\"Tue\",\"Wed\",\"Thu\",\"Fri\",\"Sat\",\"Sun\"]'\n            ></div>\n          </div>\n        </div>\n      </article>\n\n      <article class=\"chart-card\" data-accent=\"primary\" aria-labelledby=\"area-b\">\n        <header class=\"chart-card-header\">\n          <h3 class=\"chart-card-heading\" id=\"area-b\">Saves</h3>\n          <p class=\"chart-card-meta\">Same scale</p>\n        </header>\n        <div class=\"chart-card-body\">\n          <div class=\"area-chart-frame\" data-variant=\"spark\" role=\"img\" aria-label=\"Saves\">\n            <div\n              class=\"area-chart-mount\"\n              data-chart=\"area\"\n              data-series=\"[48,62,55,70,84,78,96]\"\n              data-categories='[\"Mon\",\"Tue\",\"Wed\",\"Thu\",\"Fri\",\"Sat\",\"Sun\"]'\n            ></div>\n          </div>\n        </div>\n      </article>\n\n      <article class=\"chart-card\" data-accent=\"primary\" aria-labelledby=\"area-c\">\n        <header class=\"chart-card-header\">\n          <h3 class=\"chart-card-heading\" id=\"area-c\">Shares</h3>\n          <p class=\"chart-card-meta\">Same scale</p>\n        </header>\n        <div class=\"chart-card-body\">\n          <div class=\"area-chart-frame\" data-variant=\"spark\" role=\"img\" aria-label=\"Shares\">\n            <div\n              class=\"area-chart-mount\"\n              data-chart=\"area\"\n              data-series=\"[18,22,20,28,34,30,42]\"\n              data-categories='[\"Mon\",\"Tue\",\"Wed\",\"Thu\",\"Fri\",\"Sat\",\"Sun\"]'\n            ></div>\n          </div>\n        </div>\n      </article>\n    </div>";
class DemlAreaChart {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$1B;
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
const DEML_TEMPLATE$1A = "<article class=\"article\">\n      <div class=\"article-body\">\n        <h2>Section title</h2>\n        <p>Body copy for long-form reading — paragraphs, lists, and code.</p>\n        <ul>\n          <li>First point</li>\n          <li>Second point</li>\n        </ul>\n        <pre><code>npm run build</code></pre>\n      </div>\n    </article>";
class DemlArticle {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$1A;
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

/* AUTO-GENERATED from components/badge/badge.html — do not edit */
const DEML_TEMPLATE$1x = "<span class=\"badge\">Badge</span>\n    <span class=\"badge\" data-tone=\"success\">Success</span>\n    <span class=\"badge\" data-tone=\"warning\">Warning</span>\n    <span class=\"badge\" data-tone=\"danger\">Danger</span>";
class DemlBadge {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$1x;
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
const DEML_TEMPLATE$9 = "<div class=\"banner banner--hero\" data-variant=\"hero\">\n      <p class=\"preheader\">DEML</p>\n      <h1 class=\"banner-heading\">Status your customers can trust.</h1>\n      <p class=\"lede\">Publish public status pages, share clear uptime, and manage your account in one place.</p>\n      <div class=\"banner-actions\">\n        <div class=\"button-group\">\n          <a class=\"button button--primary\" href=\"#\">Explore</a>\n          <a class=\"button button--secondary\" href=\"#\">Log in</a>\n        </div>\n      </div>\n    </div>";
class DemlBanner {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$9;
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
const DEML_TEMPLATE$1v = "<div class=\"chart-board\" data-chart-board data-chart-ymax=\"auto\">\n      <article class=\"chart-card\" data-accent=\"primary\" aria-labelledby=\"bar-a\">\n        <header class=\"chart-card-header\">\n          <h3 class=\"chart-card-heading\" id=\"bar-a\">Genre</h3>\n          <p class=\"chart-card-meta\">Shared Y · 0–max</p>\n        </header>\n        <div class=\"chart-card-body\">\n          <div class=\"bar-chart-frame area-chart-frame\" data-variant=\"spark\" role=\"img\" aria-label=\"Genre share\">\n            <div\n              class=\"area-chart-mount\"\n              data-chart=\"bar\"\n              data-series=\"[82,64,48,36]\"\n              data-categories='[\"Synth\",\"Jazz\",\"Folk\",\"Ambient\"]'\n            ></div>\n          </div>\n        </div>\n      </article>\n\n      <article class=\"chart-card\" data-accent=\"primary\" aria-labelledby=\"bar-b\">\n        <header class=\"chart-card-header\">\n          <h3 class=\"chart-card-heading\" id=\"bar-b\">Region</h3>\n          <p class=\"chart-card-meta\">Same scale</p>\n        </header>\n        <div class=\"chart-card-body\">\n          <div class=\"bar-chart-frame area-chart-frame\" data-variant=\"spark\" role=\"img\" aria-label=\"Region share\">\n            <div\n              class=\"area-chart-mount\"\n              data-chart=\"bar\"\n              data-series=\"[70,52,40,28]\"\n              data-categories='[\"NA\",\"EU\",\"APAC\",\"LATAM\"]'\n            ></div>\n          </div>\n        </div>\n      </article>\n\n      <article class=\"chart-card\" data-accent=\"primary\" aria-labelledby=\"bar-c\">\n        <header class=\"chart-card-header\">\n          <h3 class=\"chart-card-heading\" id=\"bar-c\">Device</h3>\n          <p class=\"chart-card-meta\">Same scale</p>\n        </header>\n        <div class=\"chart-card-body\">\n          <div class=\"bar-chart-frame area-chart-frame\" data-variant=\"spark\" role=\"img\" aria-label=\"Device share\">\n            <div\n              class=\"area-chart-mount\"\n              data-chart=\"bar\"\n              data-series=\"[90,44,30,18]\"\n              data-categories='[\"Mobile\",\"Desktop\",\"TV\",\"Other\"]'\n            ></div>\n          </div>\n        </div>\n      </article>\n    </div>";
class DemlBarChart {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$1v;
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
const DEML_TEMPLATE$1u = "<div class=\"box\">\n      <p>Lightweight content grouping box.</p>\n    </div>";
class DemlBox {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$1u;
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
const DEML_TEMPLATE$1t = "<a class=\"brand\" href=\"/\" aria-label=\"Product home\">\n      <span class=\"brand__mark\" aria-hidden=\"true\"></span>\n      <span class=\"brand__wordmark\">Product</span>\n    </a>";
class DemlBrand {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$1t;
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

/* AUTO-GENERATED from components/button/button.html — do not edit */
const DEML_TEMPLATE$5 = "<button type=\"button\" class=\"button button--primary\">Primary</button>\n    <button type=\"button\" class=\"button button--secondary\">Secondary</button>\n    <button type=\"button\" class=\"button button--accent\">Accent</button>\n    <button type=\"button\" class=\"button button--primary button--pill\">Pill</button>\n    <button type=\"button\" class=\"button button--primary\" disabled>Disabled</button>\n    <button type=\"button\" class=\"button button--primary is-busy\" aria-busy=\"true\">\n      <span class=\"button__label\">Saving</span>\n      <span class=\"button__spinner\" aria-hidden=\"true\"></span>\n    </button>";
class DemlButton {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$5;
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
const DEML_TEMPLATE$1p = "<div class=\"button-group\" role=\"group\" aria-label=\"Alignment\">\n      <button type=\"button\">Left</button>\n      <button type=\"button\">Center</button>\n      <button type=\"button\">Right</button>\n    </div>";
class DemlButtonGroup {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$1p;
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
const DEML_TEMPLATE$1o = "<aside class=\"callout\" role=\"status\" data-tone=\"info\">\n      <div class=\"callout__body\">\n        <p class=\"callout__heading\">Callout heading</p>\n        <p class=\"callout__text\">Highlighted message for the user.</p>\n      </div>\n      <button type=\"button\" class=\"callout__close\" aria-label=\"Dismiss\">×</button>\n    </aside>";
class DemlCallout {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$1o;
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
const DEML_TEMPLATE$1n = "<article class=\"card\" data-visual=\"olive\">\n      <div class=\"card-copy\">\n        <p class=\"card-meta\">Feature</p>\n        <h3 class=\"card-heading\">Card title</h3>\n        <p class=\"card-subtext\">Optional supporting text for the elevated cream module.</p>\n        <div class=\"card-actions\">\n          <div class=\"button-group\" data-layout=\"row\" role=\"group\">\n            <button type=\"button\" class=\"button button--primary button--pill\">Action</button>\n          </div>\n        </div>\n      </div>\n      <div class=\"card-media has-visual\" aria-hidden=\"true\"></div>\n    </article>";
class DemlCard {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$1n;
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
const DEML_TEMPLATE$1m = "<div class=\"card-grid\"><article class=\"card\"><h3 class=\"card-heading\">Card</h3></article></div>";
class DemlCardGrid {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$1m;
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
const DEML_TEMPLATE$1l = "<div class=\"chart-board\" data-chart-board data-chart-ymax=\"auto\">\n      <article class=\"chart-card\" data-accent=\"primary\" aria-labelledby=\"line-a\">\n        <header class=\"chart-card-header\">\n          <h3 class=\"chart-card-heading\" id=\"line-a\">Latency</h3>\n          <p class=\"chart-card-meta\">p95 · shared Y</p>\n        </header>\n        <div class=\"chart-card-body\">\n          <div class=\"area-chart-frame\" data-variant=\"spark\" role=\"img\" aria-label=\"Latency line\">\n            <div\n              class=\"area-chart-mount\"\n              data-chart=\"line\"\n              data-series=\"[42,38,45,40,52,48,44]\"\n              data-categories='[\"Mon\",\"Tue\",\"Wed\",\"Thu\",\"Fri\",\"Sat\",\"Sun\"]'\n            ></div>\n          </div>\n        </div>\n      </article>\n\n      <article class=\"chart-card\" data-accent=\"primary\" aria-labelledby=\"line-b\">\n        <header class=\"chart-card-header\">\n          <h3 class=\"chart-card-heading\" id=\"line-b\">Errors</h3>\n          <p class=\"chart-card-meta\">Same scale</p>\n        </header>\n        <div class=\"chart-card-body\">\n          <div class=\"area-chart-frame\" data-variant=\"spark\" role=\"img\" aria-label=\"Errors line\">\n            <div\n              class=\"area-chart-mount\"\n              data-chart=\"line\"\n              data-series=\"[12,9,14,11,18,15,10]\"\n              data-categories='[\"Mon\",\"Tue\",\"Wed\",\"Thu\",\"Fri\",\"Sat\",\"Sun\"]'\n            ></div>\n          </div>\n        </div>\n      </article>\n\n      <article class=\"chart-card\" data-accent=\"primary\" aria-labelledby=\"line-c\">\n        <header class=\"chart-card-header\">\n          <h3 class=\"chart-card-heading\" id=\"line-c\">Saturation</h3>\n          <p class=\"chart-card-meta\">Same scale</p>\n        </header>\n        <div class=\"chart-card-body\">\n          <div class=\"area-chart-frame\" data-variant=\"spark\" role=\"img\" aria-label=\"Saturation line\">\n            <div\n              class=\"area-chart-mount\"\n              data-chart=\"line\"\n              data-series=\"[28,30,26,33,31,29,27]\"\n              data-categories='[\"Mon\",\"Tue\",\"Wed\",\"Thu\",\"Fri\",\"Sat\",\"Sun\"]'\n            ></div>\n          </div>\n        </div>\n      </article>\n    </div>";
class DemlChart {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$1l;
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
const DEML_TEMPLATE$1k = "<div class=\"chart-board\" data-chart-board data-chart-ymax=\"auto\">\n      <article class=\"chart-card\" data-accent=\"primary\" aria-labelledby=\"cc-a\">\n        <header class=\"chart-card-header\">\n          <div class=\"chart-card-header__row\">\n            <h3 class=\"chart-card-heading\" id=\"cc-a\">Listen time</h3>\n            <p class=\"chart-card-value\">230<span class=\"chart-card-unit\">m</span></p>\n          </div>\n          <p class=\"chart-card-meta\">\n            <span class=\"chart-card-trend\" data-trend=\"up\">+12%</span>\n            Last 7 days\n          </p>\n        </header>\n        <div class=\"chart-card-body\">\n          <div class=\"area-chart-frame\" data-variant=\"spark\" role=\"img\" aria-label=\"Listen time\">\n            <div\n              class=\"area-chart-mount\"\n              data-chart=\"area\"\n              data-series=\"[120,156,142,188,210,196,230]\"\n              data-categories='[\"Mon\",\"Tue\",\"Wed\",\"Thu\",\"Fri\",\"Sat\",\"Sun\"]'\n            ></div>\n          </div>\n        </div>\n      </article>\n\n      <article class=\"chart-card\" data-accent=\"primary\" aria-labelledby=\"cc-b\">\n        <header class=\"chart-card-header\">\n          <div class=\"chart-card-header__row\">\n            <h3 class=\"chart-card-heading\" id=\"cc-b\">Playlist adds</h3>\n            <p class=\"chart-card-value\">74</p>\n          </div>\n          <p class=\"chart-card-meta\">\n            <span class=\"chart-card-trend\" data-trend=\"up\">+8%</span>\n            Same Y scale\n          </p>\n        </header>\n        <div class=\"chart-card-body\">\n          <div class=\"area-chart-frame\" data-variant=\"spark\" role=\"img\" aria-label=\"Playlist adds\">\n            <div\n              class=\"area-chart-mount\"\n              data-chart=\"area\"\n              data-series=\"[32,40,38,55,62,58,74]\"\n              data-categories='[\"Mon\",\"Tue\",\"Wed\",\"Thu\",\"Fri\",\"Sat\",\"Sun\"]'\n            ></div>\n          </div>\n        </div>\n      </article>\n\n      <article class=\"chart-card\" data-accent=\"primary\" aria-labelledby=\"cc-c\">\n        <header class=\"chart-card-header\">\n          <div class=\"chart-card-header__row\">\n            <h3 class=\"chart-card-heading\" id=\"cc-c\">Follows</h3>\n            <p class=\"chart-card-value\">34</p>\n          </div>\n          <p class=\"chart-card-meta\">\n            <span class=\"chart-card-trend\" data-trend=\"down\">−3%</span>\n            Same Y scale\n          </p>\n        </header>\n        <div class=\"chart-card-body\">\n          <div class=\"area-chart-frame\" data-variant=\"spark\" role=\"img\" aria-label=\"Follows\">\n            <div\n              class=\"area-chart-mount\"\n              data-chart=\"area\"\n              data-series=\"[14,18,16,22,28,26,34]\"\n              data-categories='[\"Mon\",\"Tue\",\"Wed\",\"Thu\",\"Fri\",\"Sat\",\"Sun\"]'\n            ></div>\n          </div>\n        </div>\n      </article>\n    </div>";
class DemlChartCard {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$1k;
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
const DEML_TEMPLATE$1j = "<div class=\"chart-board chart-board--empty\">\n      <div class=\"chart-empty-state\" data-layout=\"fill\" role=\"status\">\n        <span class=\"chart-empty-state__badge\" aria-hidden=\"true\"></span>\n        <p class=\"chart-empty-state__title\">No chart data</p>\n        <p class=\"chart-empty-state__description\">Signals appear once telemetry lands.</p>\n      </div>\n\n      <div class=\"chart-empty-state\" data-layout=\"inline\" role=\"status\">\n        <span class=\"chart-empty-state__badge\" aria-hidden=\"true\"></span>\n        <p class=\"chart-empty-state__title\">Awaiting signal</p>\n        <p class=\"chart-empty-state__description\">Connect a stream to populate this tile.</p>\n      </div>\n\n      <div class=\"chart-empty-state\" data-layout=\"loading\" role=\"status\" aria-busy=\"true\">\n        <span class=\"chart-empty-state__skeleton\" aria-hidden=\"true\"></span>\n        <p class=\"chart-empty-state__title\">Loading series</p>\n        <p class=\"chart-empty-state__description\">Fetching the latest board domain.</p>\n      </div>\n    </div>";
class DemlChartEmptyState {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$1j;
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
const DEML_TEMPLATE$1i = "<div class=\"chart-board chart-board--panel\" data-chart-board data-chart-ymax=\"auto\">\n      <section class=\"chart-panel\" data-accent=\"primary\" aria-labelledby=\"panel-a\">\n        <header class=\"chart-panel__header\">\n          <div class=\"chart-panel__header-row\">\n            <h3 class=\"chart-panel__title\" id=\"panel-a\">System latency</h3>\n            <p class=\"chart-panel__value\">52<span class=\"chart-panel__unit\">ms</span></p>\n          </div>\n          <p class=\"chart-panel__meta\">\n            <span class=\"chart-card-trend\" data-trend=\"up\">+4%</span>\n            Last 24h · shared Y\n          </p>\n        </header>\n        <div class=\"chart-panel__body\">\n          <div class=\"area-chart-frame\" data-variant=\"spark\" role=\"img\" aria-label=\"Latency\">\n            <div\n              class=\"area-chart-mount\"\n              data-chart=\"area\"\n              data-series=\"[36,40,38,44,52,48,42]\"\n              data-categories='[\"00\",\"04\",\"08\",\"12\",\"16\",\"20\",\"24\"]'\n            ></div>\n          </div>\n        </div>\n      </section>\n\n      <section class=\"chart-panel\" data-accent=\"primary\" aria-labelledby=\"panel-b\">\n        <header class=\"chart-panel__header\">\n          <div class=\"chart-panel__header-row\">\n            <h3 class=\"chart-panel__title\" id=\"panel-b\">Throughput</h3>\n            <p class=\"chart-panel__value\">1.2<span class=\"chart-panel__unit\">k</span></p>\n          </div>\n          <p class=\"chart-panel__meta\">\n            <span class=\"chart-card-trend\" data-trend=\"up\">+9%</span>\n            Same scale\n          </p>\n        </header>\n        <div class=\"chart-panel__body\">\n          <div class=\"area-chart-frame\" data-variant=\"spark\" role=\"img\" aria-label=\"Throughput\">\n            <div\n              class=\"area-chart-mount\"\n              data-chart=\"area\"\n              data-series=\"[22,28,26,34,40,38,32]\"\n              data-categories='[\"00\",\"04\",\"08\",\"12\",\"16\",\"20\",\"24\"]'\n            ></div>\n          </div>\n        </div>\n      </section>\n    </div>";
class DemlChartPanel {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$1i;
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
const DEML_TEMPLATE$1h = "<label class=\"checkbox\">\n      <input type=\"checkbox\" name=\"checkbox-demo\" />\n      <span class=\"checkbox__label\">Checkbox option</span>\n    </label>";
class DemlCheckbox {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$1h;
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
const DEML_TEMPLATE$1g = "<label class=\"checkbox-field\"><input type=\"checkbox\" /><span>Remember me</span></label>";
class DemlCheckboxField {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$1g;
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
const DEML_TEMPLATE$1f = "<div class=\"cluster\">\n      <button type=\"button\">Primary</button>\n      <button type=\"button\">Secondary</button>\n      <span class=\"badge\">Tag</span>\n    </div>";
class DemlCluster {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$1f;
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

/* AUTO-GENERATED from components/confirm-dialog/confirm-dialog.html — do not edit */
const DEML_TEMPLATE$1d = "<button type=\"button\" class=\"button\" data-deml-open-confirm>Delete item</button>\n    <dialog class=\"confirm-dialog\">\n      <form method=\"dialog\">\n        <h3 class=\"confirm-dialog__title\">Confirm action</h3>\n        <p class=\"confirm-dialog__body\">This cannot be undone.</p>\n        <div class=\"confirm-dialog__actions\">\n          <button type=\"submit\" class=\"button\" value=\"cancel\">Cancel</button>\n          <button type=\"submit\" class=\"button\" data-variant=\"primary\" value=\"confirm\">Confirm</button>\n        </div>\n      </form>\n    </dialog>";
class DemlConfirmDialog {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$1d;
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
const DEML_TEMPLATE$1c = "<div class=\"container\">\n      <header class=\"container__header\">\n        <h3 class=\"container__title\">Container</h3>\n        <p class=\"container__description\">Content anatomy wrapper.</p>\n      </header>\n      <div class=\"container__body\">\n        <p>Body content.</p>\n      </div>\n    </div>";
class DemlContainer {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$1c;
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
const DEML_TEMPLATE$1b = "<div class=\"content-layout\">\n      <nav class=\"content-layout__breadcrumbs\" aria-label=\"Breadcrumb\">Home / Page</nav>\n      <header class=\"content-layout__header\">\n        <h1>Content layout</h1>\n      </header>\n      <div class=\"content-layout__body\">Body region</div>\n    </div>";
class DemlContentLayout {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$1b;
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
const DEML_TEMPLATE$1a = "<div class=\"dashboard-grid\">\n      <div class=\"dashboard-grid__cell\" data-size=\"sm\">Tile SM</div>\n      <div class=\"dashboard-grid__cell\" data-size=\"md\">Tile MD</div>\n      <div class=\"dashboard-grid__cell\" data-size=\"sm\">Tile SM</div>\n    </div>";
class DemlDashboardGrid {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$1a;
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
const DEML_TEMPLATE$18 = "<div class=\"dropdown\">\n      <button type=\"button\" class=\"dropdown__trigger\" aria-haspopup=\"menu\" aria-expanded=\"false\" aria-controls=\"dropdown-menu\">Actions</button>\n      <ul id=\"dropdown-menu\" class=\"dropdown__menu\" role=\"menu\" hidden>\n        <li role=\"none\"><button type=\"button\" role=\"menuitem\">Edit</button></li>\n        <li role=\"none\"><button type=\"button\" role=\"menuitem\">Duplicate</button></li>\n        <li role=\"none\"><button type=\"button\" role=\"menuitem\">Delete</button></li>\n      </ul>\n    </div>";
class DemlDropdown {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$18;
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
const DEML_TEMPLATE$17 = "<div class=\"empty-state\" role=\"status\">\n      <p class=\"empty-state__eyebrow\">Empty</p>\n      <p class=\"empty-state__title\">No items yet</p>\n      <p class=\"empty-state__description\">Create your first item to get started.</p>\n      <div class=\"empty-state__actions\">\n        <button type=\"button\">Create item</button>\n      </div>\n    </div>";
class DemlEmptyState {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$17;
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
const DEML_TEMPLATE$16 = "<div class=\"error-state\" role=\"alert\">\n      <p class=\"error-state__title\">Something went wrong</p>\n      <p class=\"error-state__description\">We could not load this resource. Try again.</p>\n      <div class=\"error-state__actions\">\n        <button type=\"button\">Retry</button>\n      </div>\n    </div>";
class DemlErrorState {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$16;
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
const DEML_TEMPLATE$4 = "<article class=\"explore-card\" data-status=\"operational\">\n      <header class=\"explore-card__header\">\n        <div class=\"explore-card__meta\">\n          <span class=\"status-pill\" data-status=\"up\">Operational</span>\n          <span class=\"explore-card__tag\">Public Status Page</span>\n        </div>\n        <h3 class=\"explore-card__title\">Platform Status</h3>\n        <p class=\"explore-card__lede\">Live service health for teams publishing status with DEML.</p>\n      </header>\n      <ul class=\"explore-card__metrics\" role=\"list\">\n        <li class=\"explore-card__metric\">\n          <span class=\"explore-card__metric-label\">Cumulative SLA</span>\n          <span class=\"explore-card__metric-value\">99.98%</span>\n          <span class=\"explore-card__metric-meta\">Based on real telemetry</span>\n        </li>\n        <li class=\"explore-card__metric\">\n          <span class=\"explore-card__metric-label\">P99 Latency</span>\n          <span class=\"explore-card__metric-value\">42ms</span>\n          <span class=\"explore-card__metric-meta\">Last 24h</span>\n        </li>\n        <li class=\"explore-card__metric\">\n          <span class=\"explore-card__metric-label\">Spike Risk</span>\n          <span class=\"explore-card__metric-value\">12.00</span>\n          <span class=\"explore-card__metric-meta\">Dynamic Temporal Forecasting</span>\n        </li>\n        <li class=\"explore-card__metric\">\n          <span class=\"explore-card__metric-label\">Threat Anomaly</span>\n          <span class=\"explore-card__metric-value\">0.40%</span>\n          <span class=\"explore-card__metric-meta\">Active</span>\n        </li>\n      </ul>\n      <div class=\"explore-card__uptime\">\n        <div class=\"explore-card__uptime-head\">\n          <span class=\"explore-card__uptime-label\">Uptime</span>\n          <span class=\"explore-card__uptime-value\">99.9%</span>\n        </div>\n        <div class=\"explore-card__uptime-track\" aria-hidden=\"true\">\n          <span class=\"explore-card__uptime-seg\" data-status=\"up\"></span>\n          <span class=\"explore-card__uptime-seg\" data-status=\"up\"></span>\n          <span class=\"explore-card__uptime-seg\" data-status=\"partial\"></span>\n          <span class=\"explore-card__uptime-seg\" data-status=\"up\"></span>\n          <span class=\"explore-card__uptime-seg\" data-status=\"up\"></span>\n        </div>\n        <p class=\"explore-card__uptime-summary\">No current issues</p>\n      </div>\n      <footer class=\"explore-card__footer\">\n        <a class=\"button button--primary button--pill\" href=\"#\">View status</a>\n      </footer>\n    </article>";
class DemlExploreCard {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$4;
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
const DEML_TEMPLATE$14 = "<div class=\"field\" role=\"group\" aria-labelledby=\"field-label\">\n      <label class=\"field__label-wrap\" for=\"field-input\">\n        <span class=\"field__label\" id=\"field-label\">Field label <span class=\"field__required\" aria-hidden=\"true\">*</span></span>\n        <input id=\"field-input\" class=\"field__control\" type=\"text\" name=\"field\" required aria-describedby=\"field-desc\" />\n      </label>\n      <p class=\"field__description\" id=\"field-desc\">Helper text for the control.</p>\n    </div>";
class DemlField {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$14;
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

/* AUTO-GENERATED from components/form-grid/form-grid.html — do not edit */
const DEML_TEMPLATE$11 = "<div class=\"form-grid\">\n      <label>First name <input type=\"text\" name=\"first\" /></label>\n      <label>Last name <input type=\"text\" name=\"last\" /></label>\n      <label>Email <input type=\"email\" name=\"email\" /></label>\n      <label>Company <input type=\"text\" name=\"company\" /></label>\n    </div>";
class DemlFormGrid {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$11;
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
const DEML_TEMPLATE$10 = "<form class=\"form-panel\"><label class=\"field\"><span class=\"field__label\">Email</span><input class=\"input-text\" type=\"email\" /></label><button class=\"button button--primary\" type=\"submit\">Submit</button></form>";
class DemlFormPanel {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$10;
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
const DEML_TEMPLATE$$ = "<section class=\"form-section\">\n      <header class=\"form-section__header\">\n        <h3 class=\"form-section__title\">Account</h3>\n        <p class=\"form-section__description\">Basic profile settings.</p>\n      </header>\n      <div class=\"form-section__body\">\n        <label>Name <input type=\"text\" name=\"name\" /></label>\n        <label>Email <input type=\"email\" name=\"email\" /></label>\n      </div>\n    </section>";
class DemlFormSection {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$$;
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
const DEML_TEMPLATE$_ = "<div class=\"grid\">\n      <div class=\"grid__item\">A</div>\n      <div class=\"grid__item\">B</div>\n      <div class=\"grid__item\">C</div>\n      <div class=\"grid__item\">D</div>\n    </div>";
class DemlGrid {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$_;
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

/* AUTO-GENERATED from components/icon/icon.html — do not edit */
const DEML_TEMPLATE$X = "<svg class=\"icon\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n      <circle cx=\"12\" cy=\"12\" r=\"9\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" />\n      <path d=\"M12 8v4l3 2\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" />\n    </svg>\n    <span class=\"icon-label\">Icon placeholder</span>";
class DemlIcon {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$X;
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
const DEML_TEMPLATE$W = "<label for=\"input-date-field\">Date</label>\n    <input id=\"input-date-field\" name=\"date\" type=\"date\">";
class DemlInputDate {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$W;
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
const DEML_TEMPLATE$V = "<label for=\"input-email-field\">Email</label>\n    <input id=\"input-email-field\" name=\"email\" type=\"email\" placeholder=\"you@example.com\" autocomplete=\"email\">";
class DemlInputEmail {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$V;
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
const DEML_TEMPLATE$U = "<label for=\"input-number-field\">Number</label>\n    <input id=\"input-number-field\" name=\"number\" type=\"number\" min=\"0\" max=\"100\" step=\"1\" value=\"10\">";
class DemlInputNumber {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$U;
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
const DEML_TEMPLATE$T = "<label for=\"input-password-field\">Password</label>\n    <input id=\"input-password-field\" name=\"password\" type=\"password\" placeholder=\"Password\" autocomplete=\"new-password\">";
class DemlInputPassword {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$T;
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
const DEML_TEMPLATE$S = "<label for=\"input-range-field\">Range</label>\n    <input id=\"input-range-field\" name=\"range\" type=\"range\" min=\"0\" max=\"100\" value=\"40\">";
class DemlInputRange {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$S;
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
const DEML_TEMPLATE$R = "<label for=\"input-search-field\">Search</label>\n    <input id=\"input-search-field\" name=\"search\" type=\"search\" placeholder=\"Search…\">";
class DemlInputSearch {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$R;
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
const DEML_TEMPLATE$Q = "<label for=\"input-text-field\">Name</label>\n    <input id=\"input-text-field\" name=\"name\" type=\"text\" placeholder=\"Name\" autocomplete=\"name\" required>";
class DemlInputText {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$Q;
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
const DEML_TEMPLATE$P = "<label for=\"input-time-field\">Time</label>\n    <input id=\"input-time-field\" name=\"time\" type=\"time\">";
class DemlInputTime {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$P;
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

/* AUTO-GENERATED from components/label/label.html — do not edit */
const DEML_TEMPLATE$N = "<label class=\"label\" for=\"label-demo-input\">Label</label>\n    <input id=\"label-demo-input\" type=\"text\" name=\"label-demo\" />";
class DemlLabel {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$N;
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

/* AUTO-GENERATED from components/navbar/navbar.html — do not edit */
const DEML_TEMPLATE$H = "<header class=\"site-navbar\"><div class=\"site-navbar-branding\"><a class=\"site-navbar-icon\" href=\"#\">DEML</a></div><nav class=\"main-navigation\"><ul><li><a href=\"#\">Home</a></li></ul></nav></header>";
class DemlNavbar {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$H;
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

/* AUTO-GENERATED from components/page-back-link/page-back-link.html — do not edit */
const DEML_TEMPLATE$F = "<a class=\"page-back-link\" href=\"#\">← Back to list</a>";
class DemlPageBackLink {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$F;
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
const DEML_TEMPLATE$E = "<header class=\"page-header\">\n      <div class=\"page-header__text\">\n        <h1 class=\"page-header__title\">Page title</h1>\n        <p class=\"page-header__subtitle\">Short page description.</p>\n      </div>\n      <div class=\"page-header__actions\">\n        <button type=\"button\">Secondary</button>\n        <button type=\"button\">Primary</button>\n      </div>\n    </header>";
class DemlPageHeader {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$E;
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
const DEML_TEMPLATE$D = "<section class=\"page-section\"><div class=\"page-section__body\">Section body</div></section>";
class DemlPageSection {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$D;
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
const DEML_TEMPLATE$C = "<div class=\"page-shell\">\n      <div class=\"page-shell__inner\">\n        <p>Constrained page canvas content.</p>\n      </div>\n    </div>";
class DemlPageShell {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$C;
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
const DEML_TEMPLATE$B = "<div class=\"page-template\">\n      <header class=\"page-template__header\">\n        <h1>Page template</h1>\n        <div class=\"page-template__actions\"><button type=\"button\">Action</button></div>\n      </header>\n      <div class=\"page-template__content\">\n        <p>Route content region.</p>\n      </div>\n      <footer class=\"page-template__footer\">Footer slot</footer>\n    </div>";
class DemlPageTemplate {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$B;
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
const DEML_TEMPLATE$A = "<nav class=\"pagination\" aria-label=\"Pagination\">\n      <button type=\"button\" class=\"pagination__prev\" aria-label=\"Previous page\">Previous</button>\n      <ul class=\"pagination__pages\">\n        <li><button type=\"button\" aria-current=\"page\">1</button></li>\n        <li><button type=\"button\">2</button></li>\n        <li><button type=\"button\">3</button></li>\n      </ul>\n      <button type=\"button\" class=\"pagination__next\" aria-label=\"Next page\">Next</button>\n    </nav>";
class DemlPagination {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$A;
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
const DEML_TEMPLATE$z = "<div class=\"panel-grid\">\n      <article class=\"panel-grid__item\">Panel A</article>\n      <article class=\"panel-grid__item\">Panel B</article>\n    </div>";
class DemlPanelGrid {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$z;
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

/* AUTO-GENERATED from components/progress/progress.html — do not edit */
const DEML_TEMPLATE$w = "<label for=\"progress-field\">Progress</label>\n    <progress id=\"progress-field\" value=\"70\" max=\"100\">70%</progress>";
class DemlProgress {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$w;
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

/* AUTO-GENERATED from components/radio-group/radio-group.html — do not edit */
const DEML_TEMPLATE$u = "<fieldset class=\"radio-group\">\n      <legend class=\"radio-group__legend\">Plan</legend>\n      <label class=\"radio-group__option\"><input type=\"radio\" name=\"plan\" value=\"free\" /> Free</label>\n      <label class=\"radio-group__option\"><input type=\"radio\" name=\"plan\" value=\"pro\" checked /> Pro</label>\n      <label class=\"radio-group__option\"><input type=\"radio\" name=\"plan\" value=\"team\" /> Team</label>\n    </fieldset>";
class DemlRadioGroup {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$u;
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
const DEML_TEMPLATE$t = "<div class=\"scroll-area\" tabindex=\"0\">\n      <p>Scrollable region with constrained height.</p>\n      <p>Additional content for overflow.</p>\n      <p>More content.</p>\n      <p>Even more content.</p>\n    </div>";
class DemlScrollArea {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$t;
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
const DEML_TEMPLATE$s = "<section class=\"section\">\n      <header class=\"section__header\">\n        <h3 class=\"section__title\">Section title</h3>\n        <p class=\"section__description\">Section supporting text.</p>\n      </header>\n      <div class=\"section__body\">\n        <p>Section body.</p>\n      </div>\n    </section>";
class DemlSection {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$s;
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
const DEML_TEMPLATE$r = "<header class=\"section-header\"><p class=\"type-eyebrow\">Eyebrow</p><h2 class=\"type-display\">Section</h2><p class=\"type-intro\">Supporting copy.</p></header>";
class DemlSectionHeader {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$r;
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
const DEML_TEMPLATE$q = "<section class=\"section-template\">\n      <header class=\"section-template__header\">\n        <div>\n          <h3 class=\"section-template__title\">Section template</h3>\n          <p class=\"section-template__description\">Reusable section anatomy.</p>\n        </div>\n        <div class=\"section-template__actions\"><button type=\"button\">Action</button></div>\n      </header>\n      <hr class=\"section-template__divider\" />\n      <div class=\"section-template__body\">Body content.</div>\n    </section>";
class DemlSectionTemplate {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$q;
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
const DEML_TEMPLATE$p = "<label for=\"select-field\">Country</label>\n    <select id=\"select-field\" name=\"country\">\n      <optgroup label=\"Americas\">\n        <option value=\"us\">United States</option>\n        <option value=\"ca\">Canada</option>\n      </optgroup>\n      <optgroup label=\"Europe\">\n        <option value=\"uk\">United Kingdom</option>\n        <option value=\"de\">Germany</option>\n      </optgroup>\n    </select>";
class DemlSelect {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$p;
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
const DEML_TEMPLATE$o = "<p>Above</p>\n    <hr class=\"separator\" />\n    <p>Below</p>\n    <div class=\"separator separator--vertical\" role=\"separator\" aria-orientation=\"vertical\"></div>";
class DemlSeparator {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$o;
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
const DEML_TEMPLATE$n = "<div class=\"sheet-overlay\" role=\"presentation\">\n      <div class=\"sheet\" role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"sheet-title\">\n        <div class=\"sheet__handle\" aria-hidden=\"true\"></div>\n        <header class=\"sheet__header\">\n          <h3 class=\"sheet__title\" id=\"sheet-title\">Confirm action</h3>\n        </header>\n        <div class=\"sheet__body\">\n          <p>Bottom sheet on phone; centered panel from 800px.</p>\n        </div>\n        <footer class=\"sheet__footer\">\n          <button type=\"button\" class=\"button button--secondary button--pill\">Cancel</button>\n          <button type=\"button\" class=\"button button--primary button--pill\">Confirm</button>\n        </footer>\n      </div>\n    </div>";
class DemlSheet {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$n;
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

/* AUTO-GENERATED from components/site-footer/site-footer.html — do not edit */
const DEML_TEMPLATE$1 = "<footer class=\"site-footer\">\n      <div class=\"site-footer__inner\">\n        <nav class=\"site-footer__directory\" aria-label=\"Footer\">\n          <ul class=\"site-footer__list\">\n            <li><a href=\"/privacy/\">Privacy</a></li>\n            <li><a href=\"/terms/\">Terms</a></li>\n            <li><a href=\"/status/platform-status\">Status</a></li>\n          </ul>\n        </nav>\n\n        <div class=\"site-footer__bottom\">\n          <p class=\"site-footer__badge\">Made in the U.S.A.</p>\n          <p class=\"site-footer__copy\">\n            Copyright © 2026 Data Engineering for Machine Learning by\n            <a href=\"https://joealongi.dev/\" target=\"_blank\" rel=\"noopener noreferrer\">Joe Alongi</a>.\n            All rights reserved.\n          </p>\n        </div>\n      </div>\n    </footer>";
class DemlSiteFooter {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$1;
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
const DEML_TEMPLATE$k = "<div class=\"skeleton\" aria-hidden=\"true\">\n      <div class=\"skeleton__line skeleton__line--short\"></div>\n      <div class=\"skeleton__line skeleton__line--long\"></div>\n      <div class=\"skeleton__line skeleton__line--medium\"></div>\n    </div>";
class DemlSkeleton {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$k;
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
const DEML_TEMPLATE$j = "<a class=\"skip-link\" href=\"#main\">Skip to content</a>\n    <p id=\"main\">Focus the skip link (Tab) to reveal it — first focusable control on real pages.</p>";
class DemlSkipLink {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$j;
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
const DEML_TEMPLATE$i = "<span class=\"spinner\" role=\"status\" aria-label=\"Loading\">\n      <span class=\"spinner__visual\" aria-hidden=\"true\"></span>\n    </span>";
class DemlSpinner {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$i;
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

/* AUTO-GENERATED from components/stack/stack.html — do not edit */
const DEML_TEMPLATE$g = "<div class=\"stack\">\n      <div>Stack item one</div>\n      <div>Stack item two</div>\n      <div>Stack item three</div>\n    </div>";
class DemlStack {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$g;
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
const DEML_TEMPLATE$f = "<article class=\"stat-card\"><p class=\"stat-card__label\">Sessions</p><p class=\"stat-card__value\">1.2k</p><p class=\"stat-card__delta\">+4%</p></article>";
class DemlStatCard {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$f;
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
const DEML_TEMPLATE$e = "<span class=\"status-badge\" data-tone=\"success\">\n      <span class=\"status-badge__dot\" aria-hidden=\"true\"></span>\n      Operational\n    </span>\n    <span class=\"status-badge\" data-tone=\"danger\">\n      <span class=\"status-badge__dot\" aria-hidden=\"true\"></span>\n      Degraded\n    </span>";
class DemlStatusBadge {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$e;
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

/* AUTO-GENERATED from components/status-pill/status-pill.html — do not edit */
const DEML_TEMPLATE$c = "<span class=\"status-pill\" data-status=\"up\">Up</span>\n    <span class=\"status-pill\" data-status=\"down\">Down</span>\n    <span class=\"status-pill\" data-status=\"maintenance\">Maintenance</span>";
class DemlStatusPill {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$c;
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
const DEML_TEMPLATE$b = "<label class=\"switch\">\n      <span class=\"switch__track\">\n        <input type=\"checkbox\" role=\"switch\" name=\"switch-demo\" aria-checked=\"false\" />\n        <span class=\"switch__thumb\" aria-hidden=\"true\"></span>\n      </span>\n      <span class=\"switch__content\">\n        <span class=\"switch__label\">Enable notifications</span>\n        <span class=\"switch__description\">Receive product updates by email.</span>\n      </span>\n    </label>";
class DemlSwitch {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$b;
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
const DEML_TEMPLATE$a = "<table>\n      <caption>Sample data table</caption>\n      <colgroup>\n        <col span=\"1\">\n        <col span=\"2\">\n      </colgroup>\n      <thead>\n        <tr>\n          <th scope=\"col\">Name</th>\n          <th scope=\"col\">Role</th>\n          <th scope=\"col\">Score</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <th scope=\"row\">Ada</th>\n          <td>Engineer</td>\n          <td>98</td>\n        </tr>\n        <tr>\n          <th scope=\"row\">Grace</th>\n          <td>Scientist</td>\n          <td>95</td>\n        </tr>\n      </tbody>\n      <tfoot>\n        <tr>\n          <th scope=\"row\">Average</th>\n          <td colspan=\"2\">96.5</td>\n        </tr>\n      </tfoot>\n    </table>";
class DemlTable {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$a;
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
const DEML_TEMPLATE = "<label class=\"text-field\"><span class=\"text-field__label\">Name</span><input class=\"text-field__control\" type=\"text\" /></label>";
class DemlTextField {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE;
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
const DEML_TEMPLATE$8 = "<label for=\"textarea-field\">Message</label>\n    <textarea id=\"textarea-field\" name=\"message\" rows=\"4\" cols=\"40\" placeholder=\"Message\"></textarea>";
class DemlTextarea {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$8;
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
const DEML_TEMPLATE$7 = "<button type=\"button\" class=\"theme-toggle\" aria-pressed=\"false\" aria-label=\"Toggle dark mode\">\n      Theme\n    </button>";
class DemlThemeToggle {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$7;
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
const DEML_TEMPLATE$6 = "<div class=\"tile-board\">\n      <div class=\"dashboard-grid\">\n        <article class=\"tile-board__cell\" data-size=\"sm\">Stat</article>\n        <article class=\"tile-board__cell\" data-size=\"md\">Chart</article>\n        <article class=\"tile-board__cell\" data-size=\"sm\">KPI</article>\n      </div>\n    </div>";
class DemlTileBoard {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$6;
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

/* AUTO-GENERATED from components/toc/toc.html — do not edit */
const DEML_TEMPLATE$3 = "<nav class=\"toc\" aria-label=\"Contents\">\n      <h2 class=\"toc__heading\">Contents</h2>\n      <div class=\"toc__group\">\n        <h3 class=\"toc__group-title\">Part I</h3>\n        <ol class=\"toc__list\">\n          <li>\n            <a class=\"toc__item\" href=\"#\">\n              <span class=\"toc__num\">1</span>\n              <span class=\"toc__label\">Getting started</span>\n            </a>\n          </li>\n          <li>\n            <a class=\"toc__item\" href=\"#\">\n              <span class=\"toc__num\">2</span>\n              <span class=\"toc__label\">Keep the codebase clean</span>\n            </a>\n          </li>\n        </ol>\n      </div>\n    </nav>";
class DemlToc {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const el = this.host.nativeElement;
        if (!el.hasChildNodes()) {
            el.innerHTML = DEML_TEMPLATE$3;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlToc, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.25", type: DemlToc, isStandalone: true, selector: "deml-toc", ngImport: i0, template: "", isInline: true, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.25", ngImport: i0, type: DemlToc, decorators: [{
            type: Component,
            args: [{
                    selector: "deml-toc",
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

/* AUTO-GENERATED — do not edit */
/** Markup-dump Angular wrappers only (headless lives in src/angular/headless). */
const DEML_MARKUP_COMPONENTS = [
    DemlAppLayout,
    DemlAreaChart,
    DemlArticle,
    DemlBadge,
    DemlBanner,
    DemlBarChart,
    DemlBox,
    DemlBrand,
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
    DemlConfirmDialog,
    DemlContainer,
    DemlContentLayout,
    DemlDashboardGrid,
    DemlDropdown,
    DemlEmptyState,
    DemlErrorState,
    DemlExploreCard,
    DemlField,
    DemlFormGrid,
    DemlFormPanel,
    DemlFormSection,
    DemlGrid,
    DemlIcon,
    DemlInputDate,
    DemlInputEmail,
    DemlInputNumber,
    DemlInputPassword,
    DemlInputRange,
    DemlInputSearch,
    DemlInputText,
    DemlInputTime,
    DemlLabel,
    DemlNavbar,
    DemlPageBackLink,
    DemlPageHeader,
    DemlPageSection,
    DemlPageShell,
    DemlPageTemplate,
    DemlPagination,
    DemlPanelGrid,
    DemlProgress,
    DemlRadioGroup,
    DemlScrollArea,
    DemlSection,
    DemlSectionHeader,
    DemlSectionTemplate,
    DemlSelect,
    DemlSeparator,
    DemlSheet,
    DemlSiteFooter,
    DemlSkeleton,
    DemlSkipLink,
    DemlSpinner,
    DemlStack,
    DemlStatCard,
    DemlStatusBadge,
    DemlStatusPill,
    DemlSwitch,
    DemlTable,
    DemlTextField,
    DemlTextarea,
    DemlThemeToggle,
    DemlTileBoard,
    DemlToc,
    DemlToggle,
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

export { DEML_COMBOBOX, DEML_COMBOBOX_IMPORTS, DEML_COMPONENTS, DEML_DIALOG, DEML_DIALOG_IMPORTS, DEML_DISCLOSURE, DEML_DISCLOSURE_IMPORTS, DEML_HEADLESS, DEML_MARKUP_COMPONENTS, DEML_MENU, DEML_MENU_IMPORTS, DEML_TABS, DEML_TABS_IMPORTS, DemlAppLayout, DemlAreaChart, DemlArticle, DemlBadge, DemlBanner, DemlBarChart, DemlBox, DemlBrand, DemlButton, DemlButtonGroup, DemlCallout, DemlCard, DemlCardGrid, DemlChart, DemlChartCard, DemlChartEmptyState, DemlChartPanel, DemlCheckbox, DemlCheckboxField, DemlCluster, DemlCombobox, DemlComboboxButton, DemlComboboxInput, DemlComboboxLabel, DemlComboboxOption, DemlComboboxOptions, DemlConfirmDialog, DemlContainer, DemlContentLayout, DemlDashboardGrid, DemlDialog, DemlDialogClose, DemlDialogDescription, DemlDialogPanel, DemlDialogTitle, DemlDisclosure, DemlDisclosureButton, DemlDisclosurePanel, DemlDropdown, DemlEmptyState, DemlErrorState, DemlExploreCard, DemlField, DemlFormGrid, DemlFormPanel, DemlFormSection, DemlGrid, DemlIcon, DemlInputDate, DemlInputEmail, DemlInputNumber, DemlInputPassword, DemlInputRange, DemlInputSearch, DemlInputText, DemlInputTime, DemlLabel, DemlMenu, DemlMenuButton, DemlMenuItem, DemlMenuItems, DemlNavbar, DemlPageBackLink, DemlPageHeader, DemlPageSection, DemlPageShell, DemlPageTemplate, DemlPagination, DemlPanelGrid, DemlProgress, DemlRadioGroup, DemlScrollArea, DemlSection, DemlSectionHeader, DemlSectionTemplate, DemlSelect, DemlSeparator, DemlSheet, DemlSiteFooter, DemlSkeleton, DemlSkipLink, DemlSpinner, DemlStack, DemlStatCard, DemlStatusBadge, DemlStatusPill, DemlSwitch, DemlTab, DemlTabList, DemlTabPanel, DemlTable, DemlTabs, DemlTextField, DemlTextarea, DemlThemeToggle, DemlTileBoard, DemlToc, DemlToggle, TypeaheadBuffer, createFocusTrap, demlId, findTypeaheadIndex, isActivationKey, nextRovingIndex, onClickOutside, resolveOpen, resolveValue };
//# sourceMappingURL=deml-ui.mjs.map
