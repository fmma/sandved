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
import './sf_merch.js';


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
            { id: 'praktisk', title: 'Praktisk Info' },
            { id: 'kort', title: 'Kort' },
            { id: 'program', title: 'Program' },
            { id: 'tjanser', title: 'Tjanser' },
            { id: 'mad', title: 'Mad' },
            { id: 'drikkevaremenu', title: 'Drikkevaremenu' },
            { id: 'tilmeld', title: 'Pris og Tilmelding' },
            { id: 'kontakt', title: 'Kontakt' },
            { id: 'merch', title: 'Merch' }
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
                <h3>24. juli - 27. juli 2025</h3>
                <div id="sf-content-anchor"></div>
                <nav class="sf-nav">
                    <ul>
                        ${menu_items.map(render_menu)}
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
                return html`
                    <div class="sf-content">
                        <p><em>Festivalen afholdes fra 24.-27. juli 2025 på Møllevej 44 i Sandved.</em></p>
                    </div>
                    <sf-map></sf-map>
                `;
            case 'program':
                return html`
                    <div class="sf-content">
                        <p>Her kan du se festivalens program.</p>
                        <p>Programmet er under udvikling, så der kan komme ændringer.</p>
                    </div>
                    <sf-program></sf-program>
                `;
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

                    <div class="sf-content">
                                <h3>Merch</h3>

                    <p> Vi har lavet en lille, eksklusiv kollektion af T-shirts, hættetrøjer, kasketter og muleposer - alt sammen med vores helt eget Ved Verdens Ende-logo, som vi er utroligt stolte af.</p>

                    <p> Ved at bære det, er du med til at bære fællesskabet videre 🌞🌈 </p>
                    <p> Det er ikke en webshop - men en kærligt håndteret bestillingsliste. Du bestiller direkte hos Sif, og vi udleverer alt merch ved ankomst til festivalen. </p>
                <h4 id="merch:top"> Overblik </h4>
                <nav class="sf-subnav">
                    <ul>
                        <li><a href="#merch:merchandise">Gå til merchandise</a></li>
                        <li><a href="#merch:q1">🧵 Sådan foregår det</a></li>
                        <li><a href="#merch:q2">⏰ Sidste frist for bestilling</a></li>
                        <li><a href="#merch:q3">🛍️ Forventede priser på merchandise (ca.-priser)</a></li>
                        <li><a href="#merch:q4">ℹ️ Hvorfor er priserne cirka-priser?</a></li>
                    </ul>
                </nav>

<h4 id="merch:q1"> 🧵 Sådan foregår det </h4>
<ul>
<li><p> 📝 <strong>Bestilling sker direkte til Sif</strong> - send en besked via <strong>Messenger</strong> eller <strong>SMS</strong>.</p></li>
<li><p>  Skriv, hvad du gerne vil bestille (antal og størrelser - se <a href="https://www.teamshirts.dk">teamshirts.dk</a> for modeller).</p></li>
<li><p> 📬 Du modtager en <strong>personlig</strong> bekræftelse, så du ved, din bestilling er modtaget.</p></li>
<li><p> 💰 Du skal <strong>først betale</strong>, når vi sender en “opkrævning” - og <strong>først når bestillingen bliver sendt afsted</strong>.</p></li>
<li><p> 📦 Du får din bestilling udleveret ved ankomst til festivalen - nemt og hyggeligt.</p></li>
</ul>


<a href="#merch:top">Tilbage til toppen</a>
<h4 id="merch:q2"> ⏰ Sidste frist for bestilling </h4>
<p><strong>Mandag d. 8. juli kl. 12.00</strong></p>
<p>Herefter sender vi den samlede bestilling afsted.</p>


<a href="#merch:top">Tilbage til toppen</a>
<h4 id="merch:q3">🛍️ Forventede priser på merchandise (ca.-priser)</h4>
<table class="sf-merch-table">
<thead>
<tr>
<th>Produkt</th>
<th>Forventet pris*</th>
</tr>
</thead>
<tbody>
<tr>
<td>T-shirt - Herre</td>
<td>ca. 106 kr</td>
</tr>
<tr>
<td>T-shirt - Kvinde</td>
<td>ca. 90 kr</td>
</tr>
<tr>
<td>T-shirt - Lille Barn (str. 2-8)</td>
<td>ca. 81 kr</td>
</tr>
<tr>
<td>T-shirt - Stor Barn (str. 10-12)</td>
<td>ca. 81 kr</td>
</tr>
<tr>
<td>Hættetrøje</td>
<td>ca. 154 kr</td>
</tr>
<tr>
<td>Kasket</td>
<td>ca. 85 kr</td>
</tr>
<tr>
<td>Mulepose</td>
<td>ca. 70 kr</td>
</tr>
</tbody>
</table>

<p><em> * Priserne er vejledende og kan ændre sig afhængigt af det samlede antal bestillinger.</em></p>

<a href="#merch:top">Tilbage til toppen</a>
<h4 id="merch:q4">ℹ️ Hvorfor er priserne cirka-priser?</h4>
<p>Vi bestiller vores merch gennem teamshirts.dk, hvor prisen afhænger af hvor mange produkter vi bestiller samlet. Jo flere bestillinger - jo større rabat.</p>
<p>🧡 Vi i arbejdsgruppen har allerede lagt en stor bestilling, så vi forventer at nå mængderabat - og har derfor regnet disse ca.-priser ud fra en samlet bestilling på 35 produkter.</p>
<p>Du skal ikke betale noget med det samme - du modtager først en personlig bekræftelse, og derefter en opkrævning, når den endelige pris er kendt.</p>

<a href="#merch:top">Tilbage til toppen</a>                    
</div>
                    <sf-merch></sf-merch>
                `;
            default:
                return html`<h3>Velkommen</h3><p>Vælg en side i menuen.</p>`;
        }
    }
}
