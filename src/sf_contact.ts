import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement('sf-contact')
export class sf_contact extends LitElement {
    renderRoot = this;

    render() {
        return html`
            <h3>Kontakt</h3>
            <p>Har du spørgsmål eller kommentarer, så kontakt os venligst.</p>
            <ul>
                <li>Frederik. Telefon: 20724393 <a href="mailto:frederik.meisner@gmail.com">frederik.meisner@gmail.com</a> </li>
                <li>Nikoline </li>
                <li>Sif </li>
                <li>Michael </li>
                <li>Janne </li>
                <li>Morten </li>
            </ul>
        `;
    }
}