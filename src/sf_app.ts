import { LitElement, html, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import './sf_about.js';
import './sf_map.js';
import './sf_program.js';
import './sf_practical_info.js';
import './sf_contact.js';
import './sf_activity.js';
import './sf_food.js';
import './sf_drinks.js';
import './sf_tilmeld.js';
import './sf_tjanser.js';


@customElement('sf-app')
export class sf_app extends LitElement {

    renderRoot = this;

    @state()
    private page: string = this.get_page();

    constructor() {
        super();
        window.addEventListener('hashchange', () => {
            const new_page = this.get_page();
            if(new_page !== this.page) {
                this.page = new_page;
            }
        });
    }

    render() {
        return html`
            <div class="sf-app">
                <h1>Ved Verdens Ende</h1>
                <img src="https://snesl.dk/media/7f3129d99fb471685992f9bb960868e0.png" alt="Festival Logo" class="sf-logo" />
                <h2>Der Hvor Himlen Møder Jorden</h2>
                <h3>24. juli - 27. juli 2025</h3>
                <nav class="sf-nav">
                    <ul>
                        <li><a id="om" href="#om">Om</a></li>
                        <li><a id="praktisk" href="#praktisk">Praktisk Info</a></li>
                        <li><a href="#kort" class="${this.page === 'kort' ? 'active' : ''}">Kort</a></li>
                        <li><a id="program" href="#program">Program</a></li>
                        <li><a id="tjanser" href="#tjanser">Tjanser</a></li>
                        <li><a id="drikkevaremenu" href="#drikkevaremenu">Drikkevaremenu</a></li>
                        <li><a id="tilmeld" href="#tilmeld">Pris og Tilmelding</a></li>
                        <li><a id="kontakt" href="#kontakt">Kontakt</a></li>
                    </ul>
                </nav>
                ${this.renderPage()}
            <hr class="sf-footer">Ved Verdens Ende Festival 2025</hr>
            </div>
        `;
    }

    private get_page() {
        const page = window.location.hash.replace('#', '') || 'om';
        return page.split(':')[0]; // Return the first part of the hash (e.g., 'om', 'kort', etc.)
    }


    private renderPage() {
        switch (this.page) {
            case 'om':
                return html`<sf-about></sf-about>`;
            case 'kort':
                return html`<sf-map></sf-map>`;
            case 'program':
                return html`<sf-program></sf-program>`;
            case 'tjanser':
                return html`<sf-tjanser></sf-tjanser>`;
            case 'praktisk':
                return html`<sf-practical-info></sf-practical-info>`;
            case 'drikkevaremenu':
                return html`<sf-drinks></sf-drinks>`;
            case 'kontakt':
                return html`<sf-contact></sf-contact>`;
            case 'tilmeld':
                return html`<sf-tilmeld></sf-tilmeld>`;
            default:
                return html`<h3>Velkommen</h3><p>Vælg en side i menuen.</p>`;
        }
    }
}
