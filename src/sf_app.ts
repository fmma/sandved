
import { LitElement, html, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

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
                        <li><a href="#musikprogram">Musikprogram</a></li>
                        <li><a href="#praktisk">Praktisk Info</a></li>
                        <li><a href="#mad">Mad</a></li>
                        <li><a href="#aktivitetsprogram">Aktivitetsprogram</a></li>
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
                return html`<h3>Om Festivalen</h3>
                    <p>Ved Verdens Ende er en musikfestival der afholdes i Sandved. Festivalen byder på en bred vifte af musikgenrer og aktiviteter for alle aldre.</p>
                    <p>Der er fokus på fællesskab, musik og gode oplevelser, hvor der er plads til børn og barnlige sjæle.</p>
                    <p>Alle deltagere er med til at skabe en uforglemmelig oplevelse. Vi laver mad sammen, vi laver sjove aktiviter, vi spiller musik, og vi hygger os sammen i ét stort fællesskab.</p>
                    <p>Festivalen er lige startet i år - 2025. Vi er stolte af at kunne præsentere et fantastisk lineup af kunstnere og bands.</p>
                    <p>Festivalen finder sted i uge 30. </p>
                    <p>Vi glæder os til at se dig!</p>
                    `;
            case 'kort':
                return html`<h3>Kort</h3><p>Her kommer kortet over festivalspladsen.</p>`;
            case 'musikprogram':
                return html`
                    <div class="sf-music-program">
                        <h3>Musikprogram</h3>
                        Torsdag<br><br>
                        19:00 - 20:00: Sandved Børnekor <br>
                        20:30 - 22:00: Jam session <br>
                        <br>
                        Fredag<br><br>
                        19:00 - 20:00: Sandved Børnekor <br>
                        20:30 - 22:00: Peter fra Næstved <br>
                        <br>
                        Lørdag<br><br>
                        19:00 - 20:00: Børnemetal med Frederik og Benjamin <br>
                        20:30 - 22:00: Michaels band <br>
                        <p></p>
                    </div>
                    `;
            case 'praktisk':
                return html`<h3>Praktisk Info</h3><p>Her kommer praktisk information.</p>`;
            case 'mad':
                return html`<h3>Mad</h3><p>Her kommer madprogrammet.</p>`;
            case 'aktivitetsprogram':
                return html`<h3>Aktivitetsprogram</h3><p>Her kommer aktivitetsprogrammet.</p>`;
            case 'drikkevaremenu':
                return html`<h3>Drikkevaremenu</h3><p>Her kommer drikkevaremenuen.</p>`;
            case 'kontakt':
                return html`<h3>Kontakt</h3>
                    <p>Har du spørgsmål eller kommentarer, så kontakt os venligst.</p>
                    <ul>
                        <li>Frederik. Telefon: 20724393 <a href="mailto:frederik.meisner@gmail.com">frederik.meisner@gmail.com</a> </li>
                        <li>Nikoline </li>
                        <li>Sif </li>
                        <li>Michael </li>
                        <li>Janne </li>
                        <li>Morten </li>
                    `;
            default:
                return html`<h3>Velkommen</h3><p>Vælg en side i menuen.</p>`;
        }
    }
}
