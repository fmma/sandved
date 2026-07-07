import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement('sf-musik')
export class sf_musik extends LitElement {
    renderRoot = this;
    render() {
        return html`
            <div class="sf-content-special">
                <img src="${import.meta.env.BASE_URL}ims/musik_plakat.webp" alt="Musikplakat" class="sf-plakat" />
            </div>
        `;
    }
}
