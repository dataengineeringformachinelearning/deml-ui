/* AUTO-GENERATED from components/select/select.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<label for=\"select-field\">Country</label>\n    <select id=\"select-field\" name=\"country\">\n      <optgroup label=\"Americas\">\n        <option value=\"us\">United States</option>\n        <option value=\"ca\">Canada</option>\n      </optgroup>\n      <optgroup label=\"Europe\">\n        <option value=\"uk\">United Kingdom</option>\n        <option value=\"de\">Germany</option>\n      </optgroup>\n    </select>";

@Component({
  selector: "deml-select",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlSelect implements OnInit {
  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
