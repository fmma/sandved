import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement('sf-food')
export class sf_food extends LitElement {
    renderRoot = this;

    render() {
        return html`
            <h3>Mad</h3>
            <p>Her kommer madprogrammet.</p>
        `;
    }
}