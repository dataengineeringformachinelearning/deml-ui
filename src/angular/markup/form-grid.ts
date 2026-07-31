/* AUTO-GENERATED from components/form-grid/form-grid.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<div class=\"form-grid\">\n      <label>First name <input type=\"text\" name=\"first\" /></label>\n      <label>Last name <input type=\"text\" name=\"last\" /></label>\n      <label>Email <input type=\"email\" name=\"email\" /></label>\n      <label>Company <input type=\"text\" name=\"company\" /></label>\n    </div>";

@Component({
  selector: "deml-form-grid",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlFormGrid implements OnInit {
  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
