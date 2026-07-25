/* AUTO-GENERATED from components/input-image/input-image.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
  inject,
} from "@angular/core";

const DEML_TEMPLATE = "<input type=\"image\" src=\"https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png\" alt=\"Image submit\" width=\"32\" height=\"32\">";

@Component({
  selector: "deml-input-image",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlInputImage implements OnInit {
  private readonly host = inject(ElementRef<HTMLElement>);

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
