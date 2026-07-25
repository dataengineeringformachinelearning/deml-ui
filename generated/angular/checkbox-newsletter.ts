/* AUTO-GENERATED from components/checkbox-newsletter/checkbox-newsletter.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
  inject,
} from "@angular/core";

const DEML_TEMPLATE = "<label><input type=\"checkbox\" name=\"features\" value=\"news\"> Newsletter</label>";

@Component({
  selector: "deml-checkbox-newsletter",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlCheckboxNewsletter implements OnInit {
  private readonly host = inject(ElementRef<HTMLElement>);

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
