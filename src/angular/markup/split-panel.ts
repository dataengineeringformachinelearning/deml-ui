/* AUTO-GENERATED from components/split-panel/split-panel.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<div class=\"split-panel\">\n      <div class=\"split-panel__main\">\n        <p>Main content region.</p>\n      </div>\n      <aside class=\"split-panel__side\" aria-label=\"Details\">\n        <h3>Details</h3>\n        <p>Contextual side panel.</p>\n      </aside>\n    </div>";

@Component({
  selector: "deml-split-panel",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlSplitPanel implements OnInit {
  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
