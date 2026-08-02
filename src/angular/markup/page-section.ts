/* AUTO-GENERATED from components/page-section/page-section.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<section class=\"page-section\"><div class=\"page-section__body\">Section body</div></section>";

@Component({
  selector: "deml-page-section",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlPageSection implements OnInit {
  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
