import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement('sf-film')
export class sf_film extends LitElement {
    renderRoot = this;
    render() {
        return html`
            <div class="sf-content-special">
                <img src="https://snesl.dk/media/378bb9d7f99804c637290823957af33d.webp" alt="Filmplakat" class="sf-plakat" />
            </div>
        `;
    }
}
