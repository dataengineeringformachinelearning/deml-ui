/* AUTO-GENERATED from components/dashboard-grid/dashboard-grid.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<div class=\"dashboard-grid\">\n      <div class=\"dashboard-grid__cell\" data-size=\"sm\">Tile SM</div>\n      <div class=\"dashboard-grid__cell\" data-size=\"md\">Tile MD</div>\n      <div class=\"dashboard-grid__cell\" data-size=\"sm\">Tile SM</div>\n    </div>";

@Component({
  selector: "deml-dashboard-grid",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlDashboardGrid implements OnInit {
  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
