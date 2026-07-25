/* AUTO-GENERATED from components/datalist/datalist.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
  inject,
} from "@angular/core";

const DEML_TEMPLATE = "<label for=\"datalist-field\">Browser</label>\n    <input id=\"datalist-field\" name=\"browser\" list=\"browsers-list\" placeholder=\"Pick or type\">\n    <datalist id=\"browsers-list\">\n      <option value=\"Chrome\"></option>\n      <option value=\"Firefox\"></option>\n      <option value=\"Safari\"></option>\n      <option value=\"Edge\"></option>\n    </datalist>";

@Component({
  selector: "deml-datalist",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlDatalist implements OnInit {
  private readonly host = inject(ElementRef<HTMLElement>);

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
