/* AUTO-GENERATED from components/page-back-link/page-back-link.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<a class=\"page-back-link\" href=\"#\">← Back to list</a>";

@Component({
  selector: "deml-page-back-link",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlPageBackLink implements OnInit {
  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
