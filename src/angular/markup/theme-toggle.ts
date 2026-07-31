/* AUTO-GENERATED from components/theme-toggle/theme-toggle.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<button type=\"button\" class=\"theme-toggle\" aria-pressed=\"false\" aria-label=\"Toggle dark mode\">\n      Theme\n    </button>";

@Component({
  selector: "deml-theme-toggle",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlThemeToggle implements OnInit {
  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
