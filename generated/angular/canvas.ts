/* AUTO-GENERATED from components/canvas/canvas.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
  inject,
} from "@angular/core";

const DEML_TEMPLATE = "<canvas id=\"demo-canvas\" width=\"200\" height=\"100\" aria-label=\"Canvas demo\"></canvas>";

@Component({
  selector: "deml-canvas",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlCanvas implements OnInit {
  private readonly host = inject(ElementRef<HTMLElement>);

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
