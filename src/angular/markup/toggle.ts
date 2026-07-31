/* AUTO-GENERATED from components/toggle/toggle.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<div class=\"toggle-group\" role=\"group\" aria-label=\"View\">\n      <button type=\"button\" class=\"toggle\" aria-pressed=\"true\">List</button>\n      <button type=\"button\" class=\"toggle\" aria-pressed=\"false\">Grid</button>\n    </div>";

@Component({
  selector: "deml-toggle",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlToggle implements OnInit {
  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
