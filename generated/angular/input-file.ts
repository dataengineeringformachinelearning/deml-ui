/* AUTO-GENERATED from components/input-file/input-file.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
  inject,
} from "@angular/core";

const DEML_TEMPLATE = "<label for=\"input-file-field\">File</label>\n    <input id=\"input-file-field\" name=\"file\" type=\"file\" accept=\"image/*,.pdf\">";

@Component({
  selector: "deml-input-file",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlInputFile implements OnInit {
  private readonly host = inject(ElementRef<HTMLElement>);

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
