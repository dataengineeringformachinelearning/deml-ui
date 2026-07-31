/* AUTO-GENERATED from components/label/label.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<label class=\"label\" for=\"label-demo-input\">Label</label>\n    <input id=\"label-demo-input\" type=\"text\" name=\"label-demo\" />";

@Component({
  selector: "deml-label",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlLabel implements OnInit {
  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
