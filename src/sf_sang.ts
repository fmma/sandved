/*
FESTIVALSANG 2026
Melodi: En Drøm om et menneske

VERS 1
Vi sætter os ned og ser…
dybt ind i hinanden.
Festivallen, der kan få mig ud til enden.
Hvor mange festivaler kan vi arrangere sammen,
og ka' Arm-the-homeless få os til at løfte armen.

OMKVÆD
En drøm om et Sandved,
en fest på et landsted,
i teltet med stregsystemer.
En drøm om koncerter,
du elsker at være her,
men kun hvis du sætter streger.

VERS 2
Vi opgraderer med badvogne og toiletter.
Stregminister, lejrleder med kasketter.
Så længe du har armbånd på og husker din tjaaaans,
så vil Nik og Frede altid spille op til daaaans.

OMKVÆD
En drøm om et Sandved,
en fest på et landsted,
i teltet med stregsystemer.
En drøm om koncerter,
du elsker at være her,
men kun hvis du sætter streger.


FESTIVALSANG 2025
Melodi: Lidt i Fem

Ingen festival uden sang.
Alle ved at vi har lavet den med Chat GPT.
Ingen festival uden telt.
Nu er pladsen åben,
og vi glæder os.

Klokken var lidt i fem.
(Sig Sandved)
Vi er ved verdens end'.
(Sig Sandved)
Ja det er her det sker,
(Sig Sandved)
og alle folk ku' tænke sig at være her.

Har du dit merch på?
Husk nu du må ik' ud i mark gå.
Kom heller' hen og slå dig ned ved store scene,
og glem nu ik,
stregsystem!
Ellers bli'r det dit problem.

Aktiviteterne er godt i gang.
Vi maler skilter, snitter, kæmper med en sang.
Er du til OL eller musikquiz?
Nu er pladsen åben,
og vi elsker det!
*/


import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement('sf-sang')
export class sf_sang extends LitElement {
    renderRoot = this;

    render() {

        return html`
            <div class="sf-content">
                <div class="sf-song">
                    <p>
                        <strong>Melodi</strong>: En Drøm om et menneske
                    </p>
                    <p>
                        Vi sætter os ned og ser<br>
                        dybt ind i hinanden.<br><br>
                        Festivallen, der kan<br>
                        få mig ud til enden.<br><br>
                        Hvor mange festivaler kan vi<br>
                        arrangere sammen,<br><br>
                        og ka' Arm-the-homeless få os<br>
                        til at løfte armen.
                    </p>
                    <p>
                        En drøm om et Sandved,<br>
                        en fest på et landsted,<br>
                        i teltet med stregsystemer.<br>
                        En drøm om koncerter,<br>
                        du elsker at være her,<br>
                        men kun hvis du sætter streger.
                    </p>
                    <p>
                        Vi opgraderer med bad-<br>
                        vogne og toiletter.<br><br>
                        Stregminister, lejrleder med kasketter.<br>
                        Så længe du har armbånd på og husker din tjaaaans,<br>
                        så vil Nik og Frede altid spille op til daaaans.
                    </p>
                    <p>
                        En drøm om et Sandved,<br>
                        en fest på et landsted,<br>
                        i teltet med stregsystemer.<br>
                        En drøm om koncerter,<br>
                        du elsker at være her,<br>
                        men kun hvis du sætter streger.
                    </p>
                </div>

                <details class="sf-song-archive">
                    <summary>Festivalsang 2025 – Lidt i Fem</summary>
                    <div class="sf-song">
                        <p style="font-size:2em; font-weight:bold; color:#d72660; text-align:center; letter-spacing:0.1em;">
                            Am&nbsp;&nbsp;F&nbsp;&nbsp;Dm&nbsp;&nbsp;G
                        </p>
                        <p>
                            <strong>Melodi</strong>: Lidt i Fem
                        </p>
                        <p>
                            Ingen festival uden sang.<br>
                            Alle ved at vi har lavet den med Chat GPT.<br>
                            Ingen festival uden telt.<br>
                            Nu er pladsen åben,<br>
                            og vi glæder os.
                        </p>
                        <p>
                            Klokken var lidt i fem.<br>
                            (Sig Sandved)<br>
                            Vi er ved verdens end'.<br>
                            (Sig Sandved)<br>
                            Ja det er her det sker,<br>
                            (Sig Sandved)<br>
                            og alle folk ku' tænke sig at være her.
                        </p>
                        <p>
                            Har du dit merch på?<br>
                            Husk nu du må ik' ud i mark gå.<br>
                            Kom heller' hen og slå dig ned ved store scene,<br>
                            og glem nu ik,<br>
                            stregsystem!<br>
                            Ellers bli'r det dit problem.
                        </p>
                        <p>
                            Aktiviteterne er godt i gang.<br>
                            Vi maler skilter, snitter, kæmper med en sang.<br>
                            Er du til OL eller musikquiz?<br>
                            Nu er pladsen åben,<br>
                            og vi elsker det!
                        </p>
                    </div>
                </details>
            </div>
        `;
    }
}
