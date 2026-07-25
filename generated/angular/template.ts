/* AUTO-GENERATED from components/template/template.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
  inject,
} from "@angular/core";

const DEML_TEMPLATE = "<template id=\"card-template\">\n      <article class=\"templated-card\">\n        <h3></h3>\n        <p></p>\n      </article>\n    </template>\n    <div id=\"template-mount\">";

@Component({
  selector: "deml-template",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlTemplate implements OnInit {
  private readonly host = inject(ElementRef<HTMLElement>);

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
