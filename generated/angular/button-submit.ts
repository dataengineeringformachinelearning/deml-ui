/* AUTO-GENERATED from components/button-submit/button-submit.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
  inject,
} from "@angular/core";

const DEML_TEMPLATE = "<button type=\"submit\">Submit</button>";

@Component({
  selector: "deml-button-submit",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlButtonSubmit implements OnInit {
  private readonly host = inject(ElementRef<HTMLElement>);

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
