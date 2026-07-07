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
                    <strong>Morgenbuffet</strong> består af brød, smør, ost, syltetøj, kaffe, the, mælk, juice, yoghurt, müsli, havregryn, cornflakes, cocopops, nutella, kødpålæg. Måske lidt frugt og grønt.
                </p>

                <p>
                    <strong>Frokostbuffeten</strong> består af rugbrød, brød fra morgenmaden, smør, ost, kødpålæg, surt, remoulade, mayo, vegetarpålæg, ristet løg, rester fra aftensmaden, frugt og grønt.
                </p>

                <p><strong>Eftermiddag:</strong> kage.</p>

                <p>
                    <strong>Aftensmaden</strong> består af dagens ret.
                </p>

                <p><strong>Natmad:</strong> Ved eventuelle sene aftener, har vi mulighed for at varme lidt kage eller pizzaer.</p>

                <p>Der vil være mulighed for <strong>mellemmåltider</strong> til de mindste eller særligt trængende i form af brød, pålæg og frugt.</p>
                <p style="font-size:2em;">😁</p>
            </div>
        `;
    }
}
