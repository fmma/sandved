import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement('sf-program')
export class sf_program extends LitElement {
  renderRoot = this;

  render() {
    return html`
      <div class="sf-content-special">
        <img src="https://snesl.dk/media/4c63bc790e3248d29e7581117d6ccd7d.webp" alt="Program for Ved Verdens Ende 2026" class="sf-map" />
      </div>
    `;
  }
}
