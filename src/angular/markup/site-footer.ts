/* AUTO-GENERATED from components/site-footer/site-footer.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<footer class=\"site-footer\">\n      <div class=\"site-footer__inner\">\n        <nav class=\"site-footer__directory\" aria-label=\"Footer\">\n          <div class=\"site-footer__column\">\n            <h3 class=\"site-footer__heading\">Platforms</h3>\n            <ul class=\"site-footer__list\">\n              <li><a href=\"#\">DEML</a></li>\n              <li><a href=\"#\">FORJD</a></li>\n              <li><a href=\"#\">Explore</a></li>\n              <li><a href=\"#\">Dashboard</a></li>\n            </ul>\n          </div>\n          <div class=\"site-footer__column\">\n            <h3 class=\"site-footer__heading\">Resources</h3>\n            <ul class=\"site-footer__list\">\n              <li><a href=\"#\">Community</a></li>\n              <li><a href=\"#\">Whitepaper</a></li>\n              <li><a href=\"#\">Book</a></li>\n              <li><a href=\"#\">Blue Notes</a></li>\n              <li><a href=\"#\">Learn</a></li>\n            </ul>\n          </div>\n          <div class=\"site-footer__column\">\n            <h3 class=\"site-footer__heading\">Support</h3>\n            <ul class=\"site-footer__list\">\n              <li><a href=\"#\">Platform Status</a></li>\n              <li><a href=\"#\">Report a Bug</a></li>\n            </ul>\n          </div>\n          <div class=\"site-footer__column\">\n            <h3 class=\"site-footer__heading\">Legal &amp; Compliance</h3>\n            <ul class=\"site-footer__list\">\n              <li><a href=\"#\">Privacy Policy</a></li>\n              <li><a href=\"#\">Terms of Service</a></li>\n              <li><a href=\"#\">SOC2 Compliance</a></li>\n              <li><a href=\"#\">GDPR Compliance</a></li>\n            </ul>\n          </div>\n        </nav>\n        <div class=\"site-footer__bottom\">\n          <p class=\"site-footer__badge\">Made in the U.S.A.</p>\n          <p class=\"site-footer__copy\">\n            Copyright © 2026 Data Engineering for Machine Learning by\n            <a href=\"https://joealongi.dev/\" target=\"_blank\" rel=\"noopener noreferrer\">Joe Alongi</a>.\n            All rights reserved.\n          </p>\n        </div>\n      </div>\n    </footer>";

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
