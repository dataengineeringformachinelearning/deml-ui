/* AUTO-GENERATED from components/tooltip/tooltip.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<button type=\"button\" class=\"tooltip-trigger\" aria-describedby=\"tooltip-demo\">Hover me</button>\n    <span id=\"tooltip-demo\" class=\"tooltip\" role=\"tooltip\">Helpful tip</span>";

@Component({
  selector: "deml-tooltip",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlTooltip implements OnInit {
  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
