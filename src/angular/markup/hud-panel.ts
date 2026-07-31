/* AUTO-GENERATED from components/hud-panel/hud-panel.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<section class=\"hud-panel\" aria-labelledby=\"hud-panel-title\">\n      <header class=\"hud-panel__header\">\n        <h3 id=\"hud-panel-title\">HUD panel</h3>\n      </header>\n      <div class=\"hud-panel__body\">\n        <p>Dashboard panel body.</p>\n      </div>\n    </section>";

@Component({
  selector: "deml-hud-panel",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlHudPanel implements OnInit {
  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
