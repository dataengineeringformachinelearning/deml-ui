/* AUTO-GENERATED from components/embed-object/embed-object.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
  inject,
} from "@angular/core";

const DEML_TEMPLATE = "<embed\n      src=\"https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf\"\n      type=\"application/pdf\"\n      width=\"100%\"\n      height=\"160\">";

@Component({
  selector: "deml-embed-object",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlEmbedObject implements OnInit {
  private readonly host = inject(ElementRef<HTMLElement>);

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
