import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement('sf-contact')
export class sf_contact extends LitElement {
    renderRoot = this;

    render() {
        return html`
            <div class="sf-content">
                <h3>Kontakt</h3>
                <p>Har du spørgsmål eller kommentarer, så kontakt os venligst.</p>
                <ul>
                    <li>Frederik. Telefon: 20724393 <a href="mailto:frederik.meisner@gmail.com">frederik.meisner@gmail.com</a> </li>
                    <li>Nikoline. Telefon: 51927986 <a href="mailto:nikoline.petersen@live.com">nikoline.petersen@live.com</a> </li>
                    <li>Sif </li>
                    <li>Michael </li>
                    <li>Janne. Telefon: 31228832 </li>
                    <li>Morten </li>
                </ul>
            </div>
        `;
    }
}