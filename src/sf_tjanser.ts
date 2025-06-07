import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement('sf-tjanser')
export class sf_about extends LitElement {
    renderRoot = this;

    render() {
        return html`
            <div class="sf-content">
                <h3>Tjanser</h3>
                <p>Her kommer tjanserne.</p>
            </div>
        `;
    }
}