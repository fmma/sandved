import { html } from "lit";

export function render_petang() {
    return html`
        <div class="ol-card ol-petang">
        <div class="ol-head">
            <img class="ol-icon" src="https://snesl.dk/media/12b7235b878fb526f9448f163d1dc0c4.webp" alt="">
            <div class="ol-head-text">
                <h3 class="ol-title">Petanque</h3>
                <p class="ol-meta">
                    <span class="ol-clock">Kampen varer 10 minutter</span>
                    <span class="ol-star">Vinderholdet får 5 point</span>
                </p>
            </div>
        </div>
        <p class="ol-loc">Lokation: Grus eller græs</p>
        <div class="ol-body">
            <div class="ol-main">
                <p><strong>Beskrivelse:</strong><br>
                Et klassisk og roligt havespil – kaste kugler tættest på målkuglen.
                </p>
                <p><strong>Sådan foregår spillet:</strong></p>
                <ul>
                    <li><strong>Starten:</strong> Et hold kaster lod om, hvem der starter. Vinderholdet tegner en kastecirkel (ca. 35-50 cm i diameter) på jorden.</li>
                    <li><strong>Kast grisen:</strong> En spiller kaster grisen ud i en afstand af 6 til 10 meter. Begge fødder skal holdes samlet og placeret inden for cirklen under kastet.</li>
                    <li><strong>Første kugle:</strong> Samme hold kaster deres første kugle og forsøger at komme så tæt på grisen som muligt.</li>
                    <li><strong>Næste kast:</strong> Modstanderholdet kaster nu deres kugle. De skal enten <em>lægge</em> (komme tættere på grisen end modstanderen) eller <em>skyde</em> (ramme og flytte modstanderens kugle væk).</li>
                    <li><strong>Hvem kaster?</strong> Det hold, der ikke ligger tættest på grisen, fortsætter med at kaste, indtil de enten får en kugle tættest på eller løber tør for kugler.</li>
                </ul>
                <p><strong>Der skal bruges:</strong></p>
                <ul>
                    <li>Petanquesæt (kugler og gris)</li>
                    <li>Kridt eller snor til kastecirkel</li>
                </ul>
            </div>
            <figure class="ol-figure">
                <img src="https://snesl.dk/media/1fc2a1984e6d72ad708f848b68cd84f0.webp" alt="Bane og redskaber til Petanque" loading="lazy">
                <img class="ol-sched" src="https://snesl.dk/media/64d5f5b1d2a7f32ea3b990ce94ecad5b.webp" alt="Kampprogram for Petanque" loading="lazy">
                <figcaption>Kampprogram</figcaption>
            </figure>
        </div>
        <div class="ol-footer">
            <p><strong>Facilitatorens rolle og ansvar:</strong><br>
            Forklare regler, sikre fair spil og opmuntre alle til at være med – også dem der aldrig har prøvet før.<br>
            Denne aktivitet er en del af festivalens olympiske lege. Regler og pointgivning er fastlagt på forhånd. Facilitatorens opgave er at gennemgå reglerne med deltagerne, holde styr på point og registrere resultaterne. Resultaterne afleveres til dagens lejrleder, så dagens vindere kan kåres inden aftensmaden.
            </p>
            <p><strong>Efter aktiviteten:</strong><br>
            Når aktiviteten er færdig skal I huske at rydde op.
            </p>
        </div>
        </div>
    `;
}
