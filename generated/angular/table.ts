/* AUTO-GENERATED from components/table/table.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
  inject,
} from "@angular/core";

const DEML_TEMPLATE = "<table>\n      <caption>Sample data table</caption>\n      <colgroup>\n        <col span=\"1\">\n        <col span=\"2\">\n      </colgroup>\n      <thead>\n        <tr>\n          <th scope=\"col\">Name</th>\n          <th scope=\"col\">Role</th>\n          <th scope=\"col\">Score</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <th scope=\"row\">Ada</th>\n          <td>Engineer</td>\n          <td>98</td>\n        </tr>\n        <tr>\n          <th scope=\"row\">Grace</th>\n          <td>Scientist</td>\n          <td>95</td>\n        </tr>\n      </tbody>\n      <tfoot>\n        <tr>\n          <th scope=\"row\">Average</th>\n          <td colspan=\"2\">96.5</td>\n        </tr>\n      </tfoot>\n    </table>";

@Component({
  selector: "deml-table",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlTable implements OnInit {
  private readonly host = inject(ElementRef<HTMLElement>);

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
