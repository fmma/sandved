import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement('sf-activity')
export class sf_activity extends LitElement {
    renderRoot = this;

    render() {
        return html`
            <h3>Aktivitetsprogram</h3>
        
            <p>Her kommer aktivitetsprogrammet.</p>
        `;
    }
}