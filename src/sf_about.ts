import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement('sf-about')
export class sf_about extends LitElement {
    renderRoot = this;

    render() {
        return html`
            <h3>Om Festivalen</h3>
            <p>Ved Verdens Ende er en musikfestival der afholdes i Sandved. Festivalen byder på en bred vifte af musikgenrer og aktiviteter for alle aldre.</p>
            <p>Der er fokus på fællesskab, musik og gode oplevelser, hvor der er plads til børn og barnlige sjæle.</p>
            <p>Alle deltagere er med til at skabe en uforglemmelig oplevelse. Vi laver mad sammen, vi laver sjove aktiviter, vi spiller musik, og vi hygger os sammen i ét stort fællesskab.</p>
            <p>Festivalen er lige startet i år - 2025. Vi er stolte af at kunne præsentere et fantastisk lineup af kunstnere og bands.</p>
            <p>Festivalen finder sted i uge 30. </p>
            <p>Vi glæder os til at se dig!</p>

            <img src="${import.meta.env.BASE_URL}ims/logo.png" alt="Festival Logo" class="sf-logo-inline" />
        `;
    }
}