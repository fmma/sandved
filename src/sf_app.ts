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
import './sf_food.js';


@customElement('sf-app')
export class sf_app extends LitElement {

    renderRoot = this;

    @state()
    private page: string = this.get_page();

    constructor() {
        super();
        // Prevent browser from restoring scroll position on hash navigation
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }
        window.addEventListener('hashchange', () => {
            // Always scroll to top immediately
            // window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

            // Then update the page state after a tick
            const new_page = this.get_page();
            if (new_page !== this.page) {
                this.page = new_page;
            }
        });
    }

    on_nav_click(e: Event) {
        e.preventDefault();
        const target = e.currentTarget as HTMLAnchorElement;
        window.location.hash = target.getAttribute('href')!;
    }

    render() {
        return html`
            <div class="sf-app">
                <h1 @click=${() => window.location.hash = ''} style="cursor:pointer;">Ved Verdens Ende</h1>
                <img src="https://snesl.dk/media/7f3129d99fb471685992f9bb960868e0.png" alt="Festival Logo" class="sf-logo" />
                <h2>Der Hvor Himlen Møder Jorden</h2>
                <h3>24. juli - 27. juli 2025</h3>
                <nav class="sf-nav">
                    <ul>
                        <li><a @click=${this.on_nav_click} href="#om">Om</a></li>
                        <li><a @click=${this.on_nav_click} href="#praktisk">Praktisk Info</a></li>
                        <li><a @click=${this.on_nav_click} class="${this.page === 'kort' ? 'active' : ''}">Kort</a></li>
                        <li><a @click=${this.on_nav_click} href="#program">Program</a></li>
                        <li><a @click=${this.on_nav_click} href="#tjanser">Tjanser</a></li>
                        <li><a @click=${this.on_nav_click} href="#mad">Mad</a></li>
                        <li><a @click=${this.on_nav_click} href="#drikkevaremenu">Drikkevaremenu</a></li>
                        <li><a @click=${this.on_nav_click} href="#tilmeld">Pris og Tilmelding</a></li>
                        <li><a @click=${this.on_nav_click} href="#kontakt">Kontakt</a></li>
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
            case 'mad':
                return html`<sf-food></sf-food>`;
            default:
                return html`<h3>Velkommen</h3><p>Vælg en side i menuen.</p>`;
        }
    }
}
