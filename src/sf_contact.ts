import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement('sf-contact')
export class sf_contact extends LitElement {
    renderRoot = this;

    contact = [
        { n: 'Frederik', tlf: '20724383', email: 'frederik.meisner@gmail.com' },
        { n: 'Nikoline', tlf: '51927986', email: 'nikoline.petersen@live.com' },
        { n: 'Sif', tlf: '51893559', email: 'wogsteen@gmail.com' },
        { n: 'Michael', tlf: '53581406', email: 'pumbas71@hotmail.com' },
        { n: 'Janne', tlf: '31228832', email: 'janne_meisner@hotmail.com' },
        { n: 'Morten', tlf: '31169995', email: 'bazze8@hotmail.com' },
    ]

    im_highway_sign = '5a423b285b69157619ee20c55ebf18fb.png'

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

                    <img alt="" src="https://snesl.dk/media/${this.im_highway_sign}" style="width: 100%;" title=""> 
            </div>
        `;
    }
}