import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement('sf-archive')
export class sf_archive extends LitElement {
    renderRoot = this;

    render() {
        return html`
            <div class="sf-content">
                <h3>Arkiv</h3>
                <p>Her kan du finde tidligere års informationer og materialer.</p>
                <ul>
                    <li><a href="https://vedverdensende.dk/2025">Sandved Verdens Ende 2025</li>
                </ul>
            </div>
        `;
    }
}