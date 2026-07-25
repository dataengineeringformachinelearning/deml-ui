/* AUTO-GENERATED from components/ordered-list/ordered-list.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
  inject,
} from "@angular/core";

const DEML_TEMPLATE = "<ol>\n      <li>First</li>\n      <li>Second</li>\n      <li>Third</li>\n    </ol>";

@Component({
  selector: "deml-ordered-list",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlOrderedList implements OnInit {
  private readonly host = inject(ElementRef<HTMLElement>);

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
