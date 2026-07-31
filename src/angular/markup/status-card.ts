/* AUTO-GENERATED from components/status-card/status-card.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<article class=\"status-card\">\n      <header class=\"status-card__header\">\n        <h3 class=\"status-card__title\">API</h3>\n        <span class=\"status-pill\" data-status=\"up\">Operational</span>\n      </header>\n      <p class=\"status-card__description\">Public API endpoints.</p>\n      <p class=\"status-card__uptime\">Uptime 99.99%</p>\n    </article>";

@Component({
  selector: "deml-status-card",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlStatusCard implements OnInit {
  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
