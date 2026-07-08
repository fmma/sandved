import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement('sf-musik')
export class sf_musik extends LitElement {
    renderRoot = this;
    render() {
        return html`
            <div class="sf-content-special">
                <img src="https://snesl.dk/media/4643995692fc53c714f3d0f28e997241.webp" alt="Musikplakat" class="sf-plakat" />
            </div>
        `;
    }
}
