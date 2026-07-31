/* AUTO-GENERATED from components/status-pill/status-pill.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<span class=\"status-pill\" data-status=\"up\">Up</span>\n    <span class=\"status-pill\" data-status=\"down\">Down</span>\n    <span class=\"status-pill\" data-status=\"maintenance\">Maintenance</span>";

@Component({
  selector: "deml-status-pill",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlStatusPill implements OnInit {
  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
