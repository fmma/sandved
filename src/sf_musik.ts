import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement('sf-musik')
export class sf_musik extends LitElement {
    renderRoot = this;
    render() {
        return html`
            <div class="sf-content-special">
                <img src="https://snesl.dk/media/8a09f20d34289a696e4e576640ff12d7.webp" alt="Musikplakat" class="sf-plakat" />
            </div>
        `;
    }
}
