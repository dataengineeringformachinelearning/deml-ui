/* AUTO-GENERATED from components/textarea/textarea.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<label for=\"textarea-field\">Message</label>\n    <textarea id=\"textarea-field\" name=\"message\" rows=\"4\" cols=\"40\" placeholder=\"Message\"></textarea>";

@Component({
  selector: "deml-textarea",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlTextarea implements OnInit {
  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
