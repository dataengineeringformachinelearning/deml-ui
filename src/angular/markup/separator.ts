/* AUTO-GENERATED from components/separator/separator.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<p>Above</p>\n    <hr class=\"separator\" />\n    <p>Below</p>\n    <div class=\"separator separator--vertical\" role=\"separator\" aria-orientation=\"vertical\"></div>";

@Component({
  selector: "deml-separator",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlSeparator implements OnInit {
  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
