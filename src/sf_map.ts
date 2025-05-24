import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement('sf-map')
export class sf_map extends LitElement {
    renderRoot = this;

    render() {
        return html`
            <h3>Kort</h3>
            
            <p>Her kommer kortet over festivalspladsen.</p>
        `;
    }
}