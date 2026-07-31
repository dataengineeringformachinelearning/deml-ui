/* AUTO-GENERATED from components/button-group/button-group.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<div class=\"button-group\" role=\"group\" aria-label=\"Alignment\">\n      <button type=\"button\">Left</button>\n      <button type=\"button\">Center</button>\n      <button type=\"button\">Right</button>\n    </div>";

@Component({
  selector: "deml-button-group",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlButtonGroup implements OnInit {
  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
