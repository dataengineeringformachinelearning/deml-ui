/* AUTO-GENERATED from components/spinner/spinner.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<span class=\"spinner\" role=\"status\" aria-label=\"Loading\">\n      <span class=\"spinner__visual\" aria-hidden=\"true\"></span>\n    </span>";

@Component({
  selector: "deml-spinner",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlSpinner implements OnInit {
  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
