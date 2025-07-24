/*
VERS 1
Ingen festival uden sang.
Alle ved at vi har lavet den med Chat GPT.
Ingen festival uden telt.
Nu er pladsen åben,
og vi glæder os.

BRIDGE
Klokken var lidt i fem.
(Sig Sandved)
Vi er ved verdens end'.
(Sig Sandved)
Ja det er her det sker,
(Sig Sandved)
og alle folk ku' tænke sig at være her.

OMKVÆD
Har du dit merch på?
Husk nu du må ik' ud i mark gå.
Kom heller' hen og slå dig ned ved store scene,
og glem nu ik,
stregsystem!
Ellers bli'r det dit problem.

VERS 2
Aktiviteterne er godt i gang.
Vi maler skilter, snitter, kæmper med en sang.
Er du til OL eller musikquiz?
Nu er pladsen åben,
og vi elsker det!

BRIDGE
Klokken var lidt i fem.
(Sig Sandved)
Vi er ved verdens end'.
(Sig Sandved)
Ja det er her det sker,
(Sig Sandved)
og alle folk ku' tænke sig at være her.

OMKVÆD
Har du dit merch på?
Husk nu du må ik' ud i mark gå.
Kom heller' hen og slå dig ned ved store scene,
og glem nu ik,
stregsystem!
Ellers bli'r det dit problem.
*/


import { html, LitElement } from "lit";
import { customElement, state } from "lit/decorators.js";

@customElement('sf-sang')
export class sf_sang extends LitElement {
    renderRoot = this;

    render() {

        return html`

            <div class="sf-content">
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
</div>
</div>
        `;
    }
}