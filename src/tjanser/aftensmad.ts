import { html } from "lit";

export function render_aftensmad() {
    return html`
<p><strong>Anbefalet mødetid:</strong> kl. 16.00</p>
        <p><strong>Maden serveres:</strong> fra kl. 18.00-19.00</p>
        <p>
            Michael er køkkenchef. I får et par sjove timer i køkkenet med en kok, som har styr på mængder, menú og hvordan man får det sjovest når man laver mad. Man kan benytte køkkenet og grillen. Husk også noget vegetarisk og ryd gerne op løbende.
        </p>
    `;
}

export function render_aftensmad_opr() {
    return html`
    <p>Efter aftensmad skal der ryddes op.</p>
        <p><strong>Opgaver:</strong></p>
        <ul>
            <li>Rydde op og tørre kølebordet af.</li>
            <li>Rydde op og tørre spiseborde af.</li>
            <li>Vaske op efter aftensmaden i køkkenet.</li>
            <li>Vaske gulve efter behov.</li>
            <li>Bære skrald ud.</li>
            <li>Sætte drikkevarer på køl.</li>
        </ul>
    `;
}