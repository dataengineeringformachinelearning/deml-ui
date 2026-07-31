/* AUTO-GENERATED from components/popover/popover.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<div class=\"popover\">\n      <button type=\"button\" class=\"popover__trigger\" aria-expanded=\"false\" aria-controls=\"popover-panel\">Open popover</button>\n      <div id=\"popover-panel\" class=\"popover__panel\" role=\"dialog\" aria-label=\"Popover\" hidden>\n        <p>Popover content for contextual actions.</p>\n        <button type=\"button\" class=\"button\">Got it</button>\n      </div>\n    </div>";

@Component({
  selector: "deml-popover",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlPopover implements OnInit {
  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
