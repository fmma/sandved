import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement('sf-merch')
export class sf_merch extends LitElement {
    renderRoot = this;
    render() {
        return html`
            <div class="sf-content">
                <h3>Merch</h3>
                <p>Her kan du købe festivalmerchandise.</p>
            </div>
        `;
    }
}
