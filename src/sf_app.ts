import { LitElement, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import './sf_about.js';
import './sf_archive.js';
import './sf_feedback.js';
import './sf_media.js';
import './sf_map.js';
import './sf_program.js';
import './sf_practical_info.js';
import './sf_contact.js';
import './sf_drinks.js';
import './sf_tilmeld.js';
import './sf_tjanser.js';
import './sf_food.js';
import './sf_merch.js';
import './sf_film.js';
import './sf_sang.js';

import { configure } from '@fmma-npm/http-client';

configure({
    host: 'https://snesl.dk',
});

@customElement('sf-app')
export class sf_app extends LitElement {

    renderRoot = this;

    @state()
    private page: string = this.get_page();

    constructor() {
        super();
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }
        window.addEventListener('hashchange', () => {
            const new_page = this.get_page();
            if (new_page !== this.page) {
                this.page = new_page;
                // Scroll to the content anchor after rendering
                setTimeout(() => {
                    const anchor = document.getElementById('sf-content-anchor');
                    if (anchor) {
                        anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }, 0);
            }
        });
    }

    on_nav_click(e: Event) {
        e.preventDefault();
        const target = e.currentTarget as HTMLAnchorElement;
        window.location.hash = target.getAttribute('href')!;
    }

    render() {

        const menu_items = [
            { id: 'om', title: 'Om' },
            // { id: 'feedback', title: 'Feedback' },
            // { id: 'media', title: 'Billeder og Videoer' },
            // { id: 'archive', title: 'Arkiv' },

            { id: 'praktisk', title: 'Praktisk Info' },
            { id: 'kort', title: 'Kort' },
            { id: 'merch', title: 'Merch' },
            { id: 'program', title: 'Program' },
            { id: 'film', title: 'Film' },
            { id: 'tjanser', title: 'Tjanser' },
            { id: 'mad', title: 'Mad' },
            { id: 'drikkevaremenu', title: 'Drikkevaremenu' },
            { id: 'tilmeld', title: 'Pris og Tilmelding' },
            { id: 'sang', title: 'Sang' },
            { id: 'kontakt', title: 'Kontakt' },
        ];
        const render_menu = (({id, title}: {id: string, title: string}) => {
            const class_names = this.page === id ? "sf-active" : ""
            return html`
                <li><a class="${class_names}" @click=${this.on_nav_click} href="#${id}">${title}</a></li>
            `;
        });

        return html`
            <div class="sf-app">
                <h1 @click=${() => window.location.hash = ''} style="cursor:pointer;">Ved Verdens Ende</h1>
                <img src="https://snesl.dk/media/7f3129d99fb471685992f9bb960868e0.png" alt="Festival Logo" class="sf-logo" />
                <h2>Der Hvor Himlen Møder Jorden</h2>
                <h3>22. - 25. juli 2026</h3>
                <div id="sf-content-anchor"></div>
                <nav class="sf-nav">
                    <ul>
                        ${menu_items.map(render_menu)}
                    </ul>
                </nav>
                    ${this.renderPage()}
                <footer class="sf-footer">Ved Verdens Ende Festival 2026</footer>
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
                return html`
                    <sf-map></sf-map>
                `;
            case 'program':
                return html`<sf-program></sf-program>`;
            case 'film':
                return html`<sf-film></sf-film>`;
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
            case 'merch':
                return html`
                    <sf-merch></sf-merch>
                `;
            case 'sang':
                return html`<sf-sang></sf-sang>`;
            case 'feedback':
                return html`<sf-feedback></sf-feedback>`;
            case 'media':
                return html`<sf-media></sf-media>`;
            case 'archive':
                return html`<sf-archive></sf-archive>`;
            default:
                return html`<h3>Velkommen</h3><p>Vælg en side i menuen.</p>`;
        }
    }
}
