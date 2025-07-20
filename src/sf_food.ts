import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement('sf-food')
export class sf_food extends LitElement {
    renderRoot = this;

    render() {
        return html`
            <div class="sf-content">
                <h3>Mad</h3>

        <p>
            <strong>Morgenbuffet</strong> består af brød, smør, ost, syltetøj, kaffe, the, mælk, juice, yoghurt, müsli, havregryn, cornflakes, cocopops, nutella, kødpålæg. Måske lidt frugt og grønt.<br>
        </p>


<p><strong>Frokostbuffeten</strong> består af rugbrød, brød fra morgenmaden, smør, ost, kødpålæg, surt, remoulade, mayo, vegetarpålæg, ristet løg, rester fra aftensmaden, frugt og grønt.</p>

        <p><strong>Eftermiddag:</strong> kage.</p>

    <p><strong>Aftensmaden</strong> består af dagens ret som er...</p>
    <ul>
        <li><strong>Torsdag:</strong> Chili con carne.</li>
        <li><strong>Fredag:</strong> Grillet gris i forskellige varianter.</li>
        <li><strong>Lørdag:</strong> Alt godt fra grillen (pølser, koteletter, kyllingbryst).</li>
    </ul>
    <p>
        Til alle aftensmadbuffeter er der ris og pasta, forskellige varianter af grøntsager, vegetarret og friskbagt foccacia.
    </p>
    <p><strong>Natmad:</strong> Ved eventuelle sene aftener, har vi mulighed for at varme lidt kage, pizzaer eller foccacie. </p>

    <p> Der vil være mulighed for <strong>mellemmåltider</strong> til de mindste eller særligt trængende i form af brød, pålæg og frugt. </p>
    <p style="font-size:2em;">😁</p>
            </div>
        `;
    }
}