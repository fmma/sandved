import { html } from "lit";

export function render_stafet() {
    return html`
        <div class="ol-card ol-stafet">
        <div class="ol-head">
            <img class="ol-icon" src="https://snesl.dk/media/931c016e01d808f82011746de6204287.webp" alt="">
            <div class="ol-head-text">
                <h3 class="ol-title">Stafet</h3>
                <p class="ol-meta">
                    <span class="ol-clock">Udfordringen varer 10 minutter</span>
                    <span class="ol-star">Point fordeles efter placering</span>
                </p>
            </div>
        </div>
        <p class="ol-loc">Lokation: Græsplæne</p>
        <div class="ol-body">
            <div class="ol-main">
                <p><strong>Beskrivelse:</strong><br>
                En våd og energisk vandstafet, hvor holdene på skift henter vand og fylder holdets spand.
                </p>
                <p><strong>Sådan foregår det:</strong></p>
                <ul>
                    <li>Holdene starter bag startlinjen.</li>
                    <li>Første deltager løber hen til vandspanden og fylder koppen med vand.</li>
                    <li>Deltageren løber tilbage, hælder vandet i holdets spand og giver koppen videre til næste deltager.</li>
                    <li>Alle på holdet skal mindst løbe én tur.</li>
                </ul>
            </div>
            <div class="ol-main">
                <p><strong>Der skal bruges:</strong></p>
                <ul>
                    <li>1 kop pr. hold</li>
                    <li>1 stor spand med vand</li>
                    <li>1 tom spand pr. hold</li>
                    <li>Kegler til bane/startlinje</li>
                </ul>
            </div>
        </div>
        <img class="ol-banner" src="https://snesl.dk/media/aba7bfd4f07cc9c1490ff87a26489277.webp" alt="Regler for Vand-stafet" loading="lazy">
        <div class="ol-footer">
            <p><strong>Facilitatorens rolle og ansvar:</strong><br>
            Sætte banen op, forklare regler og heppe energisk! Holde tiden og sikre at alle får en chance for at deltage.<br>
            Denne aktivitet er en del af festivalens olympiske lege. Regler og pointgivning er fastlagt på forhånd. Facilitatorens opgave er at gennemgå reglerne med deltagerne, holde styr på point og registrere resultaterne. Resultaterne afleveres til dagens lejrleder, så dagens vindere kan kåres inden aftensmaden.
            </p>
            <p><strong>Efter aktiviteten:</strong><br>
            Når aktiviteten er færdig skal I huske at rydde op.
            </p>
        </div>
        </div>
    `;
}
