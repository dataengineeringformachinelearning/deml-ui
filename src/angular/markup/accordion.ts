/* AUTO-GENERATED from components/accordion/accordion.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<div class=\"accordion\">\n      <details class=\"accordion__item\" open>\n        <summary class=\"accordion__trigger\">Section one</summary>\n        <div class=\"accordion__panel\">Content for section one.</div>\n      </details>\n      <details class=\"accordion__item\">\n        <summary class=\"accordion__trigger\">Section two</summary>\n        <div class=\"accordion__panel\">Content for section two.</div>\n      </details>\n    </div>";

@Component({
  selector: "deml-accordion",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlAccordion implements OnInit {
  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
