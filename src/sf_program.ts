import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement('sf-program')
export class sf_program extends LitElement {
    renderRoot = this;

    render() {

        return html`
            <div class="sf-content">
                
                <div class="sf-music-program">
                    <h3>Program</h3>
                    <p>
                    Her kommer programmet.
                    </p>
                    Torsdag<br><br>
                    07:00 - 09:00: Morgenmad <br>
                    12:00: Frokost <br>
                    18:00: Aftensmad <br>
                    <br>
                    Fredag<br><br>
                    07:00 - 09:00: Morgenmad <br>
                    12:00: Frokost <br>
                    18:00: Aftensmad <br>
                    <br>
                    Lørdag<br><br>
                    07:00 - 09:00: Morgenmad <br>
                    12:00: Frokost <br>
                    18:00: Aftensmad <br>
                    <br>
                    Søndag<br><br>
                    08:00 - 09:30: Morgenmad <br>

                </div>
            </div>
        `;

        // return html`
        //     <div class="sf-content">
        //         <div class="sf-music-program">
        //             <h3>Musikprogram</h3>
        //             Torsdag<br><br>
        //             07:00 - 09:00: Morgenmad <br>
        //             09:00 - 11:00: AKTIVITET<br>
        //             11:00 - 13:00: Frokost <br>
        //             13:00 - 15:00: AKTIVITET<br>
        //             17:30 - 19:00: Aftensmad <br>
        //             19:00 - 20:00: <span class="sf-scene">[Lille Scene]</span> Sange i Solen med Nikoline <br>
        //             20:30 - 22:00: <span class="sf-scene">[Store Scene]</span> Jam session <br>
        //             <br>
        //             Fredag<br><br>
        //             07:00 - 09:00: Morgenmad <br>
        //             09:00 - 11:00: AKTIVITET<br>
        //             11:00 - 13:00: Frokost <br>
        //             13:00 - 15:00: AKTIVITET<br>
        //             17:30 - 19:00: Aftensmad <br>
        //             19:00 - 20:00: <span class="sf-scene">[Store Scene]</span> Sandved Børnekor <br>
        //             20:30 - 22:00: <span class="sf-scene">[Store Scene]</span> Peter fra Næstved <br>
        //             <br>
        //             Lørdag<br><br>
        //             07:00 - 09:00: Morgenmad <br>
        //             09:00 - 11:00: AKTIVITET<br>
        //             11:00 - 13:00: Frokost <br>
        //             13:00 - 15:00: AKTIVITET<br>
        //             17:30 - 19:00: Aftensmad <br>
        //             19:00 - 20:00: <span class="sf-scene">[Store Scene]</span> Børnemetal med Frederik og Benjamin <br>
        //             20:30 - 22:00: <span class="sf-scene">[Store Scene]</span> Michaels band <br>
        //             <br>
        //             Søndag<br><br>
        //             07:00 - 09:00: Morgenmad <br>
        //             09:00 - 17:00: Oprydning og nedpakning. <br>

        //         </div>
        //     </div>
        // `;
    }
}