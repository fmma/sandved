import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement('sf-contact')
export class sf_contact extends LitElement {
    renderRoot = this;

    contact = [
        { n: 'Frederik', tlf: '20724383', email: 'frederik.meisner@gmail.com' },
        { n: 'Nikoline', tlf: '51927986', email: 'nikoline.petersen@live.com' },
        { n: 'Sif', tlf: '', email: '' },
        { n: 'Michael', tlf: '', email: '' },
        { n: 'Janne', tlf: '31228832', email: 'janne_meisner@hotmail.com' },
        { n: 'Morten', tlf: '', email: '' },
    ]

    render_contacts() {
        return this.contact.map(c =>
            html`
            <li>${c.n}: ${c.tlf} <a href="mailto:${c.email}">${c.email}</a></li>
        `);
    }

    render() {
        return html`
            <div class="sf-content">
                <h3>Kontakt</h3>
                <p>Har du spørgsmål eller kommentarer, så kontakt os venligst.</p>
                <ul>
                    ${this.render_contacts()}
                </ul>
            </div>
        `;
    }
}