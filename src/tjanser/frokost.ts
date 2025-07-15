import { html } from "lit";

export function render_frokost() {
    return html`
<p>Anbefalet mødetid kl. 11.00

<p>Frokosten serveres fra kl. 12.00-13.00

<p>Frokostbuffetenbestår af rugbrød, brød fra morgenmaden, smør, ost, kødpålæg, surt, remoulade, mayo, vegetarpålæg, ristet løg, rester fra aftensmaden, frugt og grønt.
Skal stilles frem og serveres på kølebordet.</p>

<p>Opgaver:</p>
<ul>
<li>Finde ting frem til buffeten. </li>
<li>Fylde buffeten op undervejs efter behov. </li>
<li>Kontroller snackfad som kan stå fremme mellem måltider (kiks, grønt, osv.) og fyld op efter behov.</li>
</ul>
    `
}


export function render_frokost_opr() {
    return html`
<p>
Efter frokost skal der ryddes op. 
</p>

<p>Opgaver:</p>
<ul>
<li>Rydde op og tørre kølebordet af.</li>
<li>Rydde op og tørre spiseborde af.</li>
<li>Vaske op efter frokosten i køkkenet.</li>
<li>Vaske gulve efter behov.</li>
<li>Bære skrald ud.</li>
</ul>
    `
}