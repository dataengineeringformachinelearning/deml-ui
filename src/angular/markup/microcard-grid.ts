/* AUTO-GENERATED from components/microcard-grid/microcard-grid.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<div class=\"microcard-grid\"><article class=\"microcard\"><p class=\"microcard__label\">A</p><p class=\"microcard__value\">1</p></article></div>";

@Component({
  selector: "deml-microcard-grid",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlMicrocardGrid implements OnInit {
  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
