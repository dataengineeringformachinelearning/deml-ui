/* AUTO-GENERATED from components/panel-grid/panel-grid.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<div class=\"panel-grid\">\n      <article class=\"panel-grid__item\">Panel A</article>\n      <article class=\"panel-grid__item\">Panel B</article>\n    </div>";

@Component({
  selector: "deml-panel-grid",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlPanelGrid implements OnInit {
  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
