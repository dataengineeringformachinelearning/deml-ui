/* AUTO-GENERATED from components/grid/grid.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<div class=\"grid\">\n      <div class=\"grid__item\">A</div>\n      <div class=\"grid__item\">B</div>\n      <div class=\"grid__item\">C</div>\n      <div class=\"grid__item\">D</div>\n    </div>";

@Component({
  selector: "deml-grid",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlGrid implements OnInit {
  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
