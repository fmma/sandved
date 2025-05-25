import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement('sf-drinks')
export class sf_drinks extends LitElement {
    renderRoot = this;

    render() {
        return html`
            <div class="sf-content">
                <h3>Drikkevaremenu</h3>
                
                <p>Her kommer drikkevaremenuen.</p>
            </div>
        `;
    }
}