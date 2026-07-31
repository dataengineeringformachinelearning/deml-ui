/* AUTO-GENERATED from components/skip-link/skip-link.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<a class=\"skip-link\" href=\"#main\">Skip to content</a>\n    <p id=\"main\">Focus the skip link (Tab) to reveal it — first focusable control on real pages.</p>";

@Component({
  selector: "deml-skip-link",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlSkipLink implements OnInit {
  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
