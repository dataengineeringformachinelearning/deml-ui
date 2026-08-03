/* AUTO-GENERATED from components/tile-board/tile-board.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<div class=\"tile-board\">\n      <div class=\"dashboard-grid\">\n        <article class=\"tile-board__cell\" data-size=\"sm\">Stat</article>\n        <article class=\"tile-board__cell\" data-size=\"md\">Chart</article>\n        <article class=\"tile-board__cell\" data-size=\"sm\">KPI</article>\n      </div>\n    </div>";

@Component({
  selector: "deml-tile-board",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlTileBoard implements OnInit {
  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
