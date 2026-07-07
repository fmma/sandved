import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement('sf-drinks')
export class sf_drinks extends LitElement {
    renderRoot = this;

    render() {
        return html`
            <div class="sf-content">
                <h3>Drikkevaresortiment</h3>
                <p>
                    Køb foregår med et stregsystem, hvor man tager en drikkevare og sætter en streg på et ark. Afregning sker i slutningen af festivalen.
                </p>
                <p>Priserne er indkøbspriser.</p>
                <table class="sf-drinks-table">
                    <tbody>
                        <tr>
                            <td><strong>Øl, dåse</strong></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td style="padding-left:2em;"><em>Pilsner, Classic</em></td>
                            <td nowrap>5 kr</td>
                        </tr>
                        <tr>
                            <td style="padding-left:2em;"><em>IPA (Juicy)</em></td>
                            <td nowrap>10 kr</td>
                        </tr>
                        <tr>
                            <td style="padding-left:2em;"><em>Brown Ale</em></td>
                            <td nowrap>10 kr</td>
                        </tr>
                        <tr>
                            <td><strong>Sodavand, dåse/flaske</strong></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td style="padding-left:2em;"><em>Cola, Cola Zero, Pepsi Max, Faxe Kondi, Faxe Kondi 0 kal., Fanta Lemon Zero, Danskvand</em></td>
                            <td nowrap>4 kr</td>
                        </tr>
                        <tr>
                            <td><strong>Vin</strong></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td style="padding-left:2em;"><em>Rød, hvid og rosé</em></td>
                            <td nowrap>10 kr pr. glas</td>
                        </tr>
                        <tr>
                            <td><strong>Cider og Smirnoff, dåse</strong></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td style="padding-left:2em;"><em>Æblecider</em></td>
                            <td nowrap>10 kr</td>
                        </tr>
                        <tr>
                            <td style="padding-left:2em;"><em>Smirnoff Ice (rød og hvid)</em></td>
                            <td nowrap>10 kr</td>
                        </tr>
                        <tr>
                            <td><strong>Is</strong></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td style="padding-left:2em;"><em>Sun lolly</em></td>
                            <td nowrap>Gratis</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `;
    }
}
