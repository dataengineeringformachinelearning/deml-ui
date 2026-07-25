/* AUTO-GENERATED from components/progress/progress.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
  inject,
} from "@angular/core";

const DEML_TEMPLATE = "<label for=\"progress-field\">Progress</label>\n    <progress id=\"progress-field\" value=\"70\" max=\"100\">70%</progress>";

@Component({
  selector: "deml-progress",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlProgress implements OnInit {
  private readonly host = inject(ElementRef<HTMLElement>);

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
