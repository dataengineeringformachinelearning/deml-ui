/* AUTO-GENERATED from components/dashboard-grid/dashboard-grid.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<div class=\"dashboard-grid\"><div class=\"dashboard-grid__cell\">Tile</div></div>";

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
