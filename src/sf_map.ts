import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement('sf-map')
export class sf_map extends LitElement {
    renderRoot = this;

    render() {
        return html`
            <img src="${import.meta.env.BASE_URL}ims/kort.png" alt="Festivalkort" class="sf-map" />
        `;
    }
}