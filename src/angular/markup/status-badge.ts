/* AUTO-GENERATED from components/status-badge/status-badge.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<span class=\"status-badge\" data-tone=\"success\">\n      <span class=\"status-badge__dot\" aria-hidden=\"true\"></span>\n      Operational\n    </span>\n    <span class=\"status-badge\" data-tone=\"danger\">\n      <span class=\"status-badge__dot\" aria-hidden=\"true\"></span>\n      Degraded\n    </span>";

@Component({
  selector: "deml-status-badge",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlStatusBadge implements OnInit {
  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
