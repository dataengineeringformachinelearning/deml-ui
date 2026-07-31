/* AUTO-GENERATED from components/stack/stack.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<div class=\"stack\">\n      <div>Stack item one</div>\n      <div>Stack item two</div>\n      <div>Stack item three</div>\n    </div>";

@Component({
  selector: "deml-stack",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlStack implements OnInit {
  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
