/* AUTO-GENERATED from components/toc/toc.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<nav class=\"toc\" aria-label=\"Contents\">\n      <h2 class=\"toc__heading\">Contents</h2>\n      <div class=\"toc__group\">\n        <h3 class=\"toc__group-title\">Part I</h3>\n        <ol class=\"toc__list\">\n          <li>\n            <a class=\"toc__item\" href=\"#\">\n              <span class=\"toc__num\">1</span>\n              <span class=\"toc__label\">Getting started</span>\n            </a>\n          </li>\n          <li>\n            <a class=\"toc__item\" href=\"#\">\n              <span class=\"toc__num\">2</span>\n              <span class=\"toc__label\">Keep the codebase clean</span>\n            </a>\n          </li>\n        </ol>\n      </div>\n    </nav>";

@Component({
  selector: "deml-toc",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlToc implements OnInit {
  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
