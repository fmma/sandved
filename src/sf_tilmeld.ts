import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement('sf-tilmeld')
export class sf_tilmeld extends LitElement {
    renderRoot = this;

    render() {
        return html`
            <div class="sf-content">
                <h3>Pris og tilmelding</h3>
                <p> Pris: Prisen for de 4 dages festival er 1000 kr pr voksen og 250 kr pr barn og dette indkluderer:</p>
                <ul>
                    <li>Plads til telt.</li>
                    <li>Toiletfaciliteter.</li>
                    <li>Mad som laves i fællesskab til alle måltider.</li>
                    <li>Underholdning af meget lokale kunstnere.</li>
                    <li>Adgang til billig bar - vi regner med et stregesystem til indkøbspris.</li>
                </ul>
                <p> Skulle nogen ønske at deltage i en kortere del af festivalen bliver prisen som følger:</p>
                <ul>
                    <li>1 døgn: 400kr (børn 100kr)</li>
                    <li>2 døgn: 750 kr (børn 180kr)</li>
                </ul>
                <p>Der vil være frokost og aftensmad, samt morgenmad dagen efter med i en døgnbillet. </p>
                <p>Der er frist for tilmelding d. 1/5 og bindende tilmelding foregår ved betaling til reg: 6771 konto: 6416752. Skriv gerne jeres tilmelding herinde (eller privat til en af os) også, så vi ved hvor mange, og hvilke dage i kommer.</p>

            </div>
        `;
    }
}