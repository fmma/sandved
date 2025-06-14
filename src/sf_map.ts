import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement('sf-map')
export class sf_map extends LitElement {
    renderRoot = this;

    kort = '44fea9256cd7d7f6c482ec637adf35f5.png';

    render() {
        // return html`
        //     <img src="${import.meta.env.BASE_URL}ims/kort.png" alt="Festivalkort" class="sf-map" />
        // `;
        return html`
            <div class="sf-content-special">
                <img src="https://snesl.dk/media/${this.kort}" alt="Festivalkort" class="sf-map" />
            </div>
        `;
    }
}