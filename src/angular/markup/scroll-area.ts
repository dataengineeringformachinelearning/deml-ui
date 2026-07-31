/* AUTO-GENERATED from components/scroll-area/scroll-area.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<div class=\"scroll-area\" tabindex=\"0\">\n      <p>Scrollable region with constrained height.</p>\n      <p>Additional content for overflow.</p>\n      <p>More content.</p>\n      <p>Even more content.</p>\n    </div>";

@Component({
  selector: "deml-scroll-area",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlScrollArea implements OnInit {
  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
