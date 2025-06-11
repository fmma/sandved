import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement('sf-program')
export class sf_program extends LitElement {
    renderRoot = this;

    render() {
        return html`
                <div class="sf-music-program">
                    <table class="sf-program-table">
                        <thead>
                            <tr>
                                <th colspan="3" class="sf-title">Ved Verdens Ende 2025</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                              <td class="sf-program-day" rowspan="3"><span class="sf-program-day">Torsdag</span></td>
                              <td class="sf-program-time">08:00 - 09:30</td>
                              <td>Morgenmad</td>
                            </tr>
                            <tr>
                              <td class="sf-program-time">12:00 - 13:00</td>
                              <td>Frokost</td>
                            </tr>
                            <tr>
                              <td class="sf-program-time">18:00 - 19:00</td>
                              <td>Aftensmad</td>
                            </tr>
                            <tr>
                              <td class="sf-program-day" rowspan="4"><span class="sf-program-day">Fredag</span></td>
                              <td class="sf-program-time">08:00 - 09:30</td>
                              <td>Morgenmad</td>
                            </tr>
                            <tr>
                              <td class="sf-program-time">12:00 - 13:00</td>
                              <td>Frokost</td>
                            </tr>
                            <tr>
                              <td class="sf-program-time">18:00 - 19:00</td>
                              <td>Aftensmad</td>
                            </tr>
                            <tr>
                              <td class="sf-program-time">20:00 - 21:00</td>
                              <td><span class="sf-scene">[Store Scene]</span> Michaels Band</td>
                            </tr>
                            <tr>
                              <td class="sf-program-day" rowspan="4"><span class="sf-program-day">Lørdag</span></td>
                              <td class="sf-program-time">08:00 - 09:30</td>
                              <td>Morgenmad</td>
                            </tr>
                            <tr>
                              <td class="sf-program-time">12:00 - 13:00</td>
                              <td>Frokost</td>
                            </tr>
                            <tr>
                              <td class="sf-program-time">18:00 - 19:00</td>
                              <td>Aftensmad</td>
                            </tr>
                            <tr>
                              <td class="sf-program-time">03:00 - 04:00</td>
                              <td>Digtoplæsning</td>
                            </tr>
                            <tr>
                              <td class="sf-program-day"><span class="sf-program-day">Søndag</span></td>
                              <td class="sf-program-time">08:00 - 09:30</td>
                              <td>Morgenmad</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
        `;
    }
}