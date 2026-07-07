import { html } from "lit";

export function render_tovtraek() {
    return html`
        <div class="ol-card ol-tovtraek">
        <div class="ol-head">
            <img class="ol-icon" src="https://snesl.dk/media/e75977e4554677718f6d5c55b8dc4c45.webp" alt="">
            <div class="ol-head-text">
                <h3 class="ol-title">Tovtrækning</h3>
                <p class="ol-meta">
                    <span class="ol-clock">Udfordringen varer 30 minutter</span>
                    <span class="ol-star">Vinderholdet får 5 point</span>
                </p>
            </div>
        </div>
        <p class="ol-loc">Lokation: Græsplæne</p>
        <div class="ol-body">
            <div class="ol-main">
                <p><strong>Beskrivelse:</strong><br>
                To hold, ét reb, én vinder! Tovtrækning sætter styrke og samarbejde i spil.
                </p>
                <p><strong>Sådan foregår spillet:</strong></p>
                <ul>
                    <li><strong>Hold:</strong> To jævnbyrdige hold med lige mange deltagere.</li>
                    <li><strong>Udstyr:</strong> Et langt, stærkt reb med en markering (f.eks. en klud) på midten.</li>
                    <li><strong>Bane:</strong> En midterlinje markeres på jorden, og ofte to linjer ca. 4-5 meter fra midten.</li>
                    <li><strong>Start:</strong> Midtermarkeringen på rebet placeres over midterlinjen på jorden.</li>
                    <li><strong>Sejr:</strong> Vinderen er det hold, der trækker modstanderens markering (eller første mand) over midterlinjen.</li>
                </ul>
            </div>
            <div class="ol-main">
                <p><strong>Der skal bruges:</strong></p>
                <ul>
                    <li>Kraftigt tov med midtermarkering</li>
                    <li>Afmærkning (kegler eller snor)</li>
                </ul>
                <p><strong>Kampprogram</strong> (kl. 13.30-14.00):</p>
                <img class="ol-sched" src="https://snesl.dk/media/1005f2ad5f44d7c8bdff737cc527fba6.webp" alt="Kampprogram for Tovtrækning" loading="lazy">
            </div>
        </div>
        <img class="ol-banner" src="https://snesl.dk/media/77a37ee012fef93677213fa703cbe968.webp" alt="Regler for Tovtrækning" loading="lazy">
        <div class="ol-footer">
            <p><strong>Facilitatorens rolle og ansvar:</strong><br>
            Lede kampen, sørge for sikkerhed, og sikre fair opdeling og god stemning blandt deltagerne.<br>
            Denne aktivitet er en del af festivalens olympiske lege. Regler og pointgivning er fastlagt på forhånd. Facilitatorens opgave er at gennemgå reglerne med deltagerne, holde styr på point og registrere resultaterne. Resultaterne afleveres til dagens lejrleder, så dagens vindere kan kåres inden aftensmaden.
            </p>
            <p><strong>Efter aktiviteten:</strong><br>
            Når aktiviteten er færdig skal I huske at rydde op.
            </p>
        </div>
        </div>
    `;
}
