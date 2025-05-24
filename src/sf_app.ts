
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


@customElement('sf-app')
export class sf_app extends LitElement {

    renderRoot = this;

    @state()
    private page: string = this.get_page();

    constructor() {
        super();
        window.addEventListener('hashchange', () => {
            this.page = this.get_page();
        });
    }

    render() {
        return html`
            <div class="sf-app">
                <h1>Ved Verdens Ende</h1>
                <img src="${import.meta.env.BASE_URL}ims/logo.png" alt="Festival Logo" class="sf-logo" />
                <h2>Sandved Festival</h2>
                <nav class="sf-nav">
                    <ul>
                        <li><a href="#om">Om</a></li>
                        <li><a href="#kort">Kort</a></li>
                        <li><a href="#program">Program</a></li>
                        <li><a href="#praktisk">Praktisk Info</a></li>
                        <li><a href="#drikkevaremenu">Drikkevaremenu</a></li>
                        <li><a href="#kontakt">Kontakt</a></li>
                    </ul>
                </nav>
                <div class="sf-content">
                    ${this.renderPage()}
                </div>
            <hr class="sf-footer">Ved Verdens Ende Festival 2025</hr>
            </div>
        `;
    }

    private get_page() {
        return window.location.hash.replace('#', '') || 'om';
    }


    private renderPage() {
        switch (this.page) {
            case 'om':
                return html`<sf-about></sf-about>`;
            case 'kort':
                return html`<sf-map></sf-map>`;
            case 'program':
                return html`<sf-program></sf-program>`;
            case 'praktisk':
                return html`<sf-practical-info></sf-practical-info>`;
            case 'drikkevaremenu':
                return html`<sf-drinks></sf-drinks>`;
            case 'kontakt':
                return html`<sf-contact></sf-contact>`;
            default:
                return html`<h3>Velkommen</h3><p>Vælg en side i menuen.</p>`;
        }
    }
}
