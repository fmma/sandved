import { html } from "lit";

export function render_morgenmad() {
    return html`
    <p><strong>Anbefalet mødetid:</strong> kl. 7.00</p>
        <p><strong>Morgenmaden serveres:</strong> fra kl. 8.00-9.30</p>
        <p>
            Morgenbuffet består af brød, smør, ost, syltetøj, kaffe, the, mælk, juice, yoghurt, müsli, havregryn, cornflakes, cocopops, nutella, kødpålæg. Måske lidt frugt og grønt.<br>
            Skal stilles frem og serveres på kølebordet.
        </p>
        <p><strong>Opgaver:</strong></p>
        <ul>
            <li>Lave kaffe og te-vand</li>
            <li>Varme brød</li>
            <li>Finde ting frem til buffeten</li>
            <li>Fylde buffeten op undervejs efter behov</li>
            <li>Morgenmadsholdet laver et snackfad som skal stå fremme mellem måltider (kiks, grønt, osv.)</li>
            <li>Lave snobrødsdej, som stilles klar i køleskabet</li>
        </ul>
    `;
}

export function render_morgenmad_opr() {
    return html`
    <p>Efter morgenmaden skal der ryddes op.</p>
        <p><strong>Opgaver:</strong></p>
        <ul>
            <li>Rydde op og tørre kølebordet af</li>
            <li>Rydde op og tørre spiseborde af</li>
            <li>Vaske op efter morgenmaden i køkkenet</li>
            <li>Vaske gulve efter behov</li>
            <li>Bære skrald ud</li>
        </ul>
    `;
}