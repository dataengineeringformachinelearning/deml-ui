/* AUTO-GENERATED from components/unordered-list/unordered-list.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
  inject,
} from "@angular/core";

const DEML_TEMPLATE = "<ul>\n      <li>List item 1</li>\n      <li>List item 2\n        <ul>\n          <li>Nested item</li>\n        </ul>\n      </li>\n      <li>List item 3</li>\n    </ul>";

@Component({
  selector: "deml-unordered-list",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlUnorderedList implements OnInit {
  private readonly host = inject(ElementRef<HTMLElement>);

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
