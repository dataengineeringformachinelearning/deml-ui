/* AUTO-GENERATED from components/output/output.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
  inject,
} from "@angular/core";

const DEML_TEMPLATE = "<label for=\"output-a\">A</label>\n    <input id=\"output-a\" type=\"number\" value=\"2\">\n    <label for=\"output-b\">B</label>\n    <input id=\"output-b\" type=\"number\" value=\"3\">\n    <output id=\"output-sum\" name=\"sum\" for=\"output-a output-b\">5</output>";

@Component({
  selector: "deml-output",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlOutput implements OnInit {
  private readonly host = inject(ElementRef<HTMLElement>);

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
