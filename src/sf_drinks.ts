import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement('sf-drinks')
export class sf_drinks extends LitElement {
    renderRoot = this;

    render() {
        return html`
            <div class="sf-content">
                <h3>Drikkevarersortiment</h3>
                <p>
                    Køb foregår med et stregsystem, hvor man tager en drikkevare og sætter en streg på et ark. Afregning sker i slutningen af festivalen.
                </p>
                <table class="sf-drinks-table">
                    <tbody>
                        <tr>
                            <td><strong>Sodavand, dåse/flaske</strong></td>
                            <td nowrap>5 kr</td>
                        </tr>
                        <tr>
                            <td style="padding-left:2em;"><em>Coca cola, Coca cola zero, Pepsi max, Faxe Kondi, Faxe kondi free, Fanta, abrikosvand, citronvand, rød sodavand, passionsbrus, danskvand</em></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td><strong>Øl, dåse</strong></td>
                            <td nowrap>5 kr</td>
                        </tr>
                        <tr>
                            <td style="padding-left:2em;"><em>Pilsner, IPA</em></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td><strong>Vin, 150cl</strong></td>
                            <td nowrap>5 kr</td>
                        </tr>
                        <tr>
                            <td style="padding-left:2em;"><em>Rød, hvid og rosé</em></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td><strong>Cider og Smirnoff, dåse</strong></td>
                            <td nowrap>13 kr</td>
                        </tr>
                        <tr>
                            <td style="padding-left:2em;"><em>Æble, Smirnoff ice original</em></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td><strong>Sun lolly</strong></td>
                            <td nowrap>2 kr</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `;
    }
}