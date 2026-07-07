import { html } from "lit";

export function render_daasekast() {
    return html`
        <div class="ol-card ol-daasekast">
        <div class="ol-head">
            <img class="ol-icon" src="https://snesl.dk/media/6c5f3f27d9fc60db1fb1ad53d9c743ed.webp" alt="">
            <div class="ol-head-text">
                <h3 class="ol-title">Dåsekast</h3>
                <p class="ol-meta">
                    <span class="ol-clock">Udfordringen varer 20 minutter</span>
                    <span class="ol-star">1 point pr. væltet dåse</span>
                </p>
            </div>
        </div>
        <p class="ol-loc">Lokation: Græsplæne</p>
        <div class="ol-body">
            <div class="ol-main">
                <p><strong>Beskrivelse:</strong><br>
                Sigt godt og kast! Vi stabler dåser i en pyramide, og så gælder det om at vælte så mange som muligt med bolde eller risposer.
                </p>
                <p><strong>Sådan foregår det:</strong></p>
                <ul>
                    <li>Spilleren står bag kastelinjen.</li>
                    <li>Der kastes 3 poser pr. runde – kun én pose ad gangen.</li>
                    <li>Dåserne sættes op igen mellem hver runde.</li>
                    <li>Kun dåser, der vælter helt, tæller med.</li>
                </ul>
                <p><strong>Banen:</strong> Der kastes fra 3 forskellige afstande – 1. runde: 2 meter, 2. runde: 5 meter, 3. runde: 10 meter.</p>
                <p><strong>Der skal bruges:</strong></p>
                <ul>
                    <li>Dåser</li>
                    <li>Kasteposer (ris- eller ærteposer)</li>
                    <li>Banemarkering til de tre afstande</li>
                </ul>
            </div>
            <figure class="ol-figure">
                <img src="https://snesl.dk/media/bb0004bacb9f1b5c0cea8171f117909f.webp" alt="Opsætning og redskaber til Dåsekast" loading="lazy">
            </figure>
        </div>
        <div class="ol-footer">
            <p><strong>Facilitatorens rolle og ansvar:</strong><br>
            Stille dåserne op, forklare regler og tælle nedfaldne dåser. Sørge for fair forsøg og god stemning.<br>
            Denne aktivitet er en del af festivalens olympiske lege. Regler og pointgivning er fastlagt på forhånd. Facilitatorens opgave er at gennemgå reglerne med deltagerne, holde styr på point og registrere resultaterne. Resultaterne afleveres til dagens lejrleder, så dagens vindere kan kåres inden aftensmaden.
            </p>
            <p><strong>Efter aktiviteten:</strong><br>
            Når aktiviteten er færdig skal I huske at rydde op.
            </p>
        </div>
        </div>
    `;
}
