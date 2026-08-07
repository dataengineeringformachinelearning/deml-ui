/* AUTO-GENERATED from components/site-footer/site-footer.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<footer class=\"site-footer\">\n      <div class=\"site-footer__inner\">\n        <nav class=\"site-footer__directory\" aria-label=\"Footer\">\n          <ul class=\"site-footer__list\">\n            <li><a href=\"/privacy/\">Privacy</a></li>\n            <li><a href=\"/terms/\">Terms</a></li>\n            <li><a href=\"/status/platform-status\">Status</a></li>\n          </ul>\n        </nav>\n\n        <div class=\"site-footer__bottom\">\n          <p class=\"site-footer__badge\">Made in the U.S.A.</p>\n          <p class=\"site-footer__copy\">\n            Copyright © 2026 Data Engineering for Machine Learning by\n            <a href=\"https://joealongi.dev/\" target=\"_blank\" rel=\"noopener noreferrer\">Joe Alongi</a>.\n            All rights reserved.\n          </p>\n        </div>\n      </div>\n    </footer>";

@Component({
  selector: "deml-site-footer",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlSiteFooter implements OnInit {
  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
