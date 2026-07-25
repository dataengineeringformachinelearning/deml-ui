/* AUTO-GENERATED from components/table/table.html — do not edit */
export class DemlTable extends HTMLElement {
  static readonly tagName = "deml-table";
  static readonly componentName = "table";

  connectedCallback(): void {
    if (this.dataset.demlHydrated === "true") return;
    this.dataset.demlHydrated = "true";
    if (!this.hasChildNodes()) {
      this.innerHTML = `<table>
      <caption>Sample data table</caption>
      <colgroup>
        <col span="1">
        <col span="2">
      </colgroup>
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Role</th>
          <th scope="col">Score</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Ada</th>
          <td>Engineer</td>
          <td>98</td>
        </tr>
        <tr>
          <th scope="row">Grace</th>
          <td>Scientist</td>
          <td>95</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th scope="row">Average</th>
          <td colspan="2">96.5</td>
        </tr>
      </tfoot>
    </table>`;
    }
  }
}

export function defineTable(): void {
  if (!customElements.get(DemlTable.tagName)) {
    customElements.define(DemlTable.tagName, DemlTable);
  }
}

export default DemlTable;
