/* AUTO-GENERATED from components/box/box.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<div class=\"box\">\n      <p>Lightweight content grouping box.</p>\n    </div>";

@Component({
  selector: "deml-box",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlBox implements OnInit {
  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
