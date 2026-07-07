import { html } from "lit";

export function render_hovdingebold() {
    return html`
        <div class="ol-card ol-hovdingebold">
        <div class="ol-head">
            <img class="ol-icon" src="${import.meta.env.BASE_URL}ims/ol_icon_hovdingebold.webp" alt="">
            <div class="ol-head-text">
                <h3 class="ol-title">Høvdingebold</h3>
                <p class="ol-meta">
                    <span class="ol-clock">Kampen varer 10 minutter</span>
                    <span class="ol-star">Vinderholdet får 5 point</span>
                </p>
            </div>
        </div>
        <p class="ol-loc">Lokation: Græsplæne</p>
        <div class="ol-body">
            <div class="ol-main">
                <p><strong>Beskrivelse:</strong><br>
                Den klassiske holdkamp! To hold står over for hinanden, og med en blød bold gælder det om at ramme modstanderne – mens man beskytter sin egen høvding.
                </p>
                <p><strong>Regler:</strong></p>
                <ul>
                    <li><strong>Hold og høvding:</strong> Hvert hold udpeger en høvding, der placeres bag modstanderens banehalvdel.</li>
                    <li><strong>Spillets gang:</strong> Det gælder om at ramme modstanderne (markspillerne) med bolden. Bolden må ikke ramme jorden først.</li>
                    <li><strong>Død og genoplivning:</strong> Rammes en spiller, er denne "død" og går til høvdingefeltet. Griber en spiller bolden, dør kasteren, og en medspiller genoplives.</li>
                    <li><strong>Høvdingens rolle:</strong> Når alle markspillere er "døde", går høvdingen ind på banen. Holdet vinder, når modstanderens høvding også er ramt.</li>
                    <li><strong>Bane og ulovligheder:</strong> Det er ikke tilladt at krydse midterlinjen eller løbe med bolden.</li>
                </ul>
                <p><strong>Der skal bruges:</strong></p>
                <ul>
                    <li>Blød bold</li>
                    <li>Banemarkering</li>
                </ul>
            </div>
            <figure class="ol-figure">
                <img src="${import.meta.env.BASE_URL}ims/ol_hovdingebold.webp" alt="Baneopsætning for Høvdingebold" loading="lazy">
                <img class="ol-sched" src="${import.meta.env.BASE_URL}ims/ol_sched_hovdingebold.webp" alt="Kampprogram for Høvdingebold" loading="lazy">
                <figcaption>Kampprogram</figcaption>
            </figure>
        </div>
        <div class="ol-footer">
            <p><strong>Facilitatorens rolle og ansvar:</strong><br>
            Sætte banen op, dele hold og forklare regler. Lede kampene og sikre fair og sikkert spil.<br>
            Denne aktivitet er en del af festivalens olympiske lege. Regler og pointgivning er fastlagt på forhånd. Facilitatorens opgave er at gennemgå reglerne med deltagerne, holde styr på point og registrere resultaterne. Resultaterne afleveres til dagens lejrleder, så dagens vindere kan kåres inden aftensmaden.
            </p>
            <p><strong>Efter aktiviteten:</strong><br>
            Når aktiviteten er færdig skal I huske at rydde op.
            </p>
        </div>
        </div>
    `;
}
