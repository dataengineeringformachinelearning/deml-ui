/* AUTO-GENERATED from components/site-footer/site-footer.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
  inject,
} from "@angular/core";

const DEML_TEMPLATE = "<footer class=\"site-footer\">\n  <p>HTML Element Reference — not every obscure or deprecated tag, but the common living HTML elements and form controls.</p>\n</footer>";

@Component({
  selector: "deml-site-footer",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlSiteFooter implements OnInit {
  private readonly host = inject(ElementRef<HTMLElement>);

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
