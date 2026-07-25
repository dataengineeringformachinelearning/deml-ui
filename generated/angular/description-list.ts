/* AUTO-GENERATED from components/description-list/description-list.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
  inject,
} from "@angular/core";

const DEML_TEMPLATE = "<dl>\n      <dt>Term</dt>\n      <dd>Definition of the term.</dd>\n      <dt>Another term</dt>\n      <dd>Another definition.</dd>\n    </dl>";

@Component({
  selector: "deml-description-list",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlDescriptionList implements OnInit {
  private readonly host = inject(ElementRef<HTMLElement>);

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
