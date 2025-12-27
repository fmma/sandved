import { html, LitElement } from "lit";
import { customElement, state } from "lit/decorators.js";

@customElement('sf-about')
export class sf_about extends LitElement {
    renderRoot = this;



    private getCountdown() {
        const target = new Date(new Date().getFullYear(), 6, 24, 9, 0, 0, 0); // July is month 6 (0-based)
        const now = new Date();
        // If today is after July 24, count down to next year
        if (now > target) {
            target.setFullYear(target.getFullYear() + 1);
        }
        const diff = target.getTime() - now.getTime();
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        return { days, hours, minutes, seconds };
    }


    @state()
    private countdown: {days: number, hours: number, minutes: number, seconds: number} = this.getCountdown();

    private countdownInterval?: number;


    connectedCallback() {
        super.connectedCallback();
        this.countdownInterval = window.setInterval(() => {
            this.countdown = this.getCountdown();
        }, 1000);
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        if (this.countdownInterval) {
            clearInterval(this.countdownInterval);
        }
    }



    render() {

        // Hype countdown banner
        const { days, hours, minutes, seconds } = this.countdown;
        const countdownBanner = html`
            <div style="
                font-size: 2.2em;
                font-weight: bold;
                color: #fff;
                background: linear-gradient(90deg, #d72660 0%, #1b998b 100%);
                text-align: center;
                margin: 0 0 1em 0;
                padding: 0.5em 0;
                letter-spacing: 0.05em;
                border-radius: 0.5em;
                box-shadow: 0 2px 12px #d7266040;
                text-shadow: 2px 2px 8px #d7266040;
            ">
            2026 annonceres snart!
            </div>
        `;

        return html`
            <div class="sf-content">
                <h3>Om Festivalen</h3>

            ${countdownBanner}
            
                <p><em>Festivalen afholdes 22. - 25. juli 2026 på Møllevej 44 i Sandved.</em></p>
                <p>Vi håber I vil komme og være med til at lave en fantastisk non-profit sommerfestival for børn og voksne i Sandved. Sif og Michael bor på et stort landsted med masser af plads til musik, aktiviteter, telte, sjov og ballade. Vi strikker et fedt program sammen, så alle aldre og typer kan få de mest hyggelige dage sammen.</p>

                <p> Der kommer til at være musikscene, pool, bålsted og hyggeligt samvær. Vi opfordrer alle til at bidrage med indslag og ideer. Vores håb er nogle skønne dage med højt til loftet og solskin i fantastisk selskab med hyggelige og sjove aktiviteter. Så kom og slå teltet op og nyd 4 dage i de bedste omgivelser.</p>

                <img src="https://snesl.dk/media/7f3129d99fb471685992f9bb960868e0.png" alt="Festival Logo" class="sf-logo-inline" />
            </div>
        `;
    }
}