import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement('sf-map')
export class sf_map extends LitElement {
    renderRoot = this;

    render() {
        return html`

            <div class="sf-content">
                <p><em>Festivalen afholdes 22. - 25. juli 2026 på Møllevej 44 i Sandved.</em></p>
                <p><em>Kortet kan ændres.</em></p>
            </div>
            <div class="sf-content-special">
                <img src="https://snesl.dk/media/4eb402498ce388a029615493b0df48cd.webp" alt="Festivalkort" class="sf-map" />
            </div>
        `;
    }
}