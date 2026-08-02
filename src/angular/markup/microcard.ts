/* AUTO-GENERATED from components/microcard/microcard.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<article class=\"microcard\"><p class=\"microcard__label\">Label</p><p class=\"microcard__value\">42</p></article>";

@Component({
  selector: "deml-microcard",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlMicrocard implements OnInit {
  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
