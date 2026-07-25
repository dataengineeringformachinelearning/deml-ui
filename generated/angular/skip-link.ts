/* AUTO-GENERATED from components/skip-link/skip-link.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
  inject,
} from "@angular/core";

const DEML_TEMPLATE = "<a class=\"skip-link\" href=\"#main\">Skip to content</a>";

@Component({
  selector: "deml-skip-link",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlSkipLink implements OnInit {
  private readonly host = inject(ElementRef<HTMLElement>);

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
