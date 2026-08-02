/* AUTO-GENERATED from components/banner/banner.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<div class=\"banner\"><p class=\"banner__title\">Banner</p><p class=\"banner__text\">Supporting message.</p></div>";

@Component({
  selector: "deml-banner",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlBanner implements OnInit {
  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
