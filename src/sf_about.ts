import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement('sf-about')
export class sf_about extends LitElement {
    renderRoot = this;
    render() {
        return html`
            <div class="sf-content">
                <h3>Om Festivalen</h3>

                <p><em>Festivalen afholdes fra 24.-27. juli 2025 på Møllevej 44 i Sandved.</em></p>
                <p>Vi håber I vil komme og være med til at lave en fantastisk non-profit sommerfestival for børn og voksne i Sandved. Sif og Michael bor på et stort landsted med masser af plads til musik, aktiviteter, telte, sjov og ballade. Vi strikker et fedt program sammen, så alle aldre og typer kan få de mest hyggelige dage sammen.</p>

                <p> Der kommer til at være musikscene, pool, bålsted og hyggeligt samvær. Vi opfordrer alle til at bidrage med indslag og ideer. Vores håb er nogle skønne dage med højt til loftet og solskin i fantastisk selskab med hyggelige og sjove aktiviteter. Så kom og slå teltet op og nyd 4 dage i de bedste omgivelser.</p>

                <img src="https://snesl.dk/media/7f3129d99fb471685992f9bb960868e0.png" alt="Festival Logo" class="sf-logo-inline" />
            </div>
        `;
    }
}