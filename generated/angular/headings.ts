/* AUTO-GENERATED from components/headings/headings.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
  inject,
} from "@angular/core";

const DEML_TEMPLATE = "<h1>Heading One</h1>";

@Component({
  selector: "deml-headings",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlHeadings implements OnInit {
  private readonly host = inject(ElementRef<HTMLElement>);

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
