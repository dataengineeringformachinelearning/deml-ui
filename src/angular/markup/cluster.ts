/* AUTO-GENERATED from components/cluster/cluster.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<div class=\"cluster\">\n      <button type=\"button\">Primary</button>\n      <button type=\"button\">Secondary</button>\n      <span class=\"badge\">Tag</span>\n    </div>";

@Component({
  selector: "deml-cluster",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlCluster implements OnInit {
  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
