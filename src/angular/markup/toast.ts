/* AUTO-GENERATED from components/toast/toast.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<div class=\"toast\" role=\"status\">\n      <p class=\"toast__title\">Saved</p>\n      <p class=\"toast__description\">Your changes were saved.</p>\n      <button type=\"button\" class=\"toast__close\" aria-label=\"Dismiss\">×</button>\n    </div>";

@Component({
  selector: "deml-toast",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlToast implements OnInit {
  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
