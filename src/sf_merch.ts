import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement('sf-merch')
export class sf_merch extends LitElement {
    renderRoot = this;

    render() {
        return html`
            <div class="sf-content-special">
                <img src="${import.meta.env.BASE_URL}ims/merch_plakat.webp" alt="Merchandise-plakat" class="sf-plakat" />
            </div>
            <div class="sf-content">
                <h4>Sådan bestiller du merch</h4>
                <p>
                    Vi har lavet en lille, eksklusiv kollektion af T-shirts, hættetrøjer, kasketter, muleposer og meget mere - alt sammen med vores helt eget Ved Verdens Ende-logo, som vi er utroligt stolte af.
                </p>
                <p>Ved at bære det, er du med til at bære fællesskabet videre 🌞🌈</p>
                <p>
                    Det er ikke en webshop - men en kærligt håndteret bestillingsliste. Du bestiller direkte hos Sif, og vi udleverer alt merch ved ankomst til festivalen.
                </p>

                <h4>🧵 Sådan foregår det</h4>
                <ul>
                    <li><p>📝 <strong>Bestilling sker direkte til Sif</strong> - send en besked via <strong>Messenger</strong> eller <strong>SMS</strong>.</p></li>
                    <li><p>Skriv, hvad du gerne vil bestille (antal og størrelser - se <a href="https://www.teamshirts.dk">teamshirts.dk</a> for modeller).</p></li>
                    <li><p>📬 Du modtager en <strong>personlig</strong> bekræftelse, så du ved, din bestilling er modtaget.</p></li>
                    <li><p>💰 Du skal <strong>først betale</strong>, når vi sender en "opkrævning" - og <strong>først når bestillingen bliver sendt afsted</strong>.</p></li>
                    <li><p>📦 Du får din bestilling udleveret ved ankomst til festivalen - nemt og hyggeligt.</p></li>
                </ul>
                <img src="https://snesl.dk/media/206bd1e87efb53c6b6c60b99f3d443ff.png" alt="Eksempel på SMS-bestilling" class="sf-merch-sms" />

                <h4>⏰ Sidste frist for bestilling</h4>
                <p><strong>Onsdag d. 8. juli 2026</strong></p>
                <p>Herefter sender vi den samlede bestilling afsted.</p>

                <h4>ℹ️ Hvorfor er priserne cirka-priser?</h4>
                <p>
                    Vi bestiller vores merch gennem <a href="https://www.teamshirts.dk">teamshirts.dk</a>, hvor prisen afhænger af, hvor mange produkter vi bestiller samlet. Jo flere bestillinger - jo større rabat.
                </p>
                <p>🧡 Vi i arbejdsgruppen har allerede lagt en stor bestilling, så vi forventer at nå mængderabat.</p>
                <p>
                    Du skal ikke betale noget med det samme - du modtager først en personlig bekræftelse, og derefter en opkrævning, når den endelige pris er kendt.
                </p>
            </div>
        `;
    }
}
