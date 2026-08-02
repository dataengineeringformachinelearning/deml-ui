/* AUTO-GENERATED from components/stat-card/stat-card.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<article class=\"stat-card\"><p class=\"stat-card__label\">Sessions</p><p class=\"stat-card__value\">1.2k</p><p class=\"stat-card__delta\">+4%</p></article>";

@Component({
  selector: "deml-stat-card",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlStatCard implements OnInit {
  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
