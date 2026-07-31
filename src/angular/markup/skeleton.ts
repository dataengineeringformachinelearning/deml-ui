/* AUTO-GENERATED from components/skeleton/skeleton.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<div class=\"skeleton\" aria-hidden=\"true\">\n      <div class=\"skeleton__line skeleton__line--short\"></div>\n      <div class=\"skeleton__line skeleton__line--long\"></div>\n      <div class=\"skeleton__line skeleton__line--medium\"></div>\n    </div>";

@Component({
  selector: "deml-skeleton",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlSkeleton implements OnInit {
  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
