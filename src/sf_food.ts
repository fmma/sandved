import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement('sf-food')
export class sf_food extends LitElement {
    renderRoot = this;

    render() {
        return html`
            <div class="sf-content">
                <h3>Mad</h3>

                <p> Der vil være fælles måltider på festivalen, som er inkluderet i billetprisen. </p>
                <p> Mere information om madplanen meldes ud før festivalens start. </p>
            </div>
        `;
    }
}