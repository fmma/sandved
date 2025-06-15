import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement('sf-map')
export class sf_map extends LitElement {
    renderRoot = this;

    kort = '344140da0c079c53574317950687517e.png';

    render() {
        // return html`
        //     <img src="${import.meta.env.BASE_URL}ims/kort.png" alt="Festivalkort" class="sf-map" />
        // `;
        return html`

            <div class="sf-content">
                <p><em>Festivalen afholdes fra 24.-27. juli 2025 på Møllevej 44 i Sandved.</em></p>
            </div>
            <div class="sf-content-special">
                <img src="https://snesl.dk/media/${this.kort}" alt="Festivalkort" class="sf-map" />
            </div>
        `;
    }
}