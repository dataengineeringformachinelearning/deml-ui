/* AUTO-GENERATED from components/kbd/kbd.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<p>Press <kbd class=\"kbd\">⌘</kbd> <kbd class=\"kbd\">K</kbd> to search.</p>";

@Component({
  selector: "deml-kbd",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlKbd implements OnInit {
  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
