/* AUTO-GENERATED from components/help-panel/help-panel.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<aside class=\"help-panel\" aria-labelledby=\"help-panel-title\">\n      <h3 id=\"help-panel-title\">Help</h3>\n      <p>Contextual guidance for this page.</p>\n      <a href=\"#\">Learn more</a>\n    </aside>";

@Component({
  selector: "deml-help-panel",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlHelpPanel implements OnInit {
  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
