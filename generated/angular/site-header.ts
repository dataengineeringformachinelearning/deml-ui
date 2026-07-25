/* AUTO-GENERATED from components/site-header/site-header.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
  inject,
} from "@angular/core";

const DEML_TEMPLATE = "<header class=\"site-header\">\n  <hgroup>\n    <h1>HTML Element Reference</h1>\n    <p>A single-page catalog of common HTML elements and form controls.</p>\n  </hgroup>\n</header>";

@Component({
  selector: "deml-site-header",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlSiteHeader implements OnInit {
  private readonly host = inject(ElementRef<HTMLElement>);

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
