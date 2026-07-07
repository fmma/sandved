import { html } from "lit";

export function render_synkron() {
    return html`
        <div class="ol-card ol-synkron">
        <div class="ol-head">
            <img class="ol-icon" src="https://snesl.dk/media/4315dc69f12d24d887934111a3e25ef6.webp" alt="">
            <div class="ol-head-text">
                <h3 class="ol-title">Synkronsvømning</h3>
                <p class="ol-meta">
                    <span class="ol-clock">Udfordringen varer 50 minutter</span>
                    <span class="ol-star">Op til 5 point i hver kategori</span>
                </p>
            </div>
        </div>
        <p class="ol-loc">Lokation: Poolen eller græs med fantasi</p>
        <div class="ol-body">
            <div class="ol-main">
                <p><strong>Beskrivelse:</strong><br>
                Sjov og kreativ opvisning – måske på land – hvor hold laver synkrone “svømmetricks”.
                </p>
                <p><strong>Sådan foregår spillet:</strong></p>
                <ul>
                    <li>Holdene laver deres egen synkronsvømnings-serie til et selvvalgt musiknummer. De har 20 minutter til at vælge musik, finde på bevægelser og øve serien sammen.</li>
                    <li>Serien skal vare præcis 2 minutter, og alle på holdet skal deltage aktivt under opvisningen.</li>
                    <li>Holdene opviser på skift deres serie i poolen foran dommerne og de andre hold.</li>
                </ul>
                <p><strong>Der skal bruges:</strong></p>
                <ul>
                    <li>Musik (mobil + højttaler)</li>
                    <li>Kostumer eller rekvisitter (valgfrit)</li>
                </ul>
            </div>
            <div class="ol-panel">
                <p><strong>Der gives point i 3 kategorier (1-5 point):</strong></p>
                <h5>1. Kreativitet</h5>
                <p>Hvor fantasifuld og original serien er – fx sjove idéer, tema, rekvisitter, overraskelser og humor.</p>
                <h5>2. Synkronitet</h5>
                <p>Hvor godt holdet bevæger sig sammen – fx timing, ens bevægelser, samarbejde og formationer.</p>
                <h5>3. Ynde</h5>
                <p>Hvor elegant og flot serien udføres – fx bevægelser, udstråling, flow, stil og præsentation.</p>
            </div>
        </div>
        <div class="ol-footer">
            <p><strong>Facilitatorens rolle og ansvar:</strong><br>
            Opfordre til kreativitet, dele hold, spille musik og holde tid. Skabe tryghed og masser af grin. Udpege dommere, der giver point i de tre kategorier, og notere holdenes point.<br>
            Denne aktivitet er en del af festivalens olympiske lege. Regler og pointgivning er fastlagt på forhånd. Facilitatorens opgave er at gennemgå reglerne med deltagerne, holde styr på point og registrere resultaterne. Resultaterne afleveres til dagens lejrleder, så dagens vindere kan kåres inden aftensmaden.
            </p>
            <p><strong>Efter aktiviteten:</strong><br>
            Når aktiviteten er færdig skal I huske at rydde op.
            </p>
        </div>
        </div>
    `;
}
