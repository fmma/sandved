import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement('sf-merch')
export class sf_merch extends LitElement {
    renderRoot = this;

    im_merch_bag = 'e8490f4febc3f5dec241060ffde4baab.png' // merch_bag.png
    im_merch_cap = '2777764e9e43b3f3aea13def49223aad.png' // merch_cap.png
    im_merch_hoodie = '51a6344424b79ffba2ae7e910f47fc2c.png' // merch_hoodie.png
    im_merch_t_shirt_child_l = '317b903b3c00df61cef2736f983a9f19.png' // merch_t_shirt_child_l.png
    im_merch_t_shirt_child_s = '6b3274508e49731dd06d7730862c0ae3.png' // merch_t_shirt_child_s.png
    im_merch_t_shirt_f = 'd4a54f0abe96c6adce9af5cdba679371.png' // merch_t_shirt_f.png
    im_merch_t_shirt_m = '480c0eb0e220ef3cf0f8d0865e57c40b.png'  // merch_t_shirt_m.png
    im_sms = '206bd1e87efb53c6b6c60b99f3d443ff.png' // sms.png
    im_merch_hoodie_zipper = '0cedd07b5e4da64a5ea4707c6c3ff4f6.png'

    
    render() {
        return html`


                    <div class="sf-content">
                    <h3> Merch </h3>
                    <p> Kommer snart... </p>
                    </div>
        `;
    }

    private _render_merch_table() {
        return html`
        <table class="sf-program-table">
        <thead>
        <tr>
            <th colspan="2" rowspan="1">
                <p><span class="sf-activity" id="merch:merch">Merch</span></p>
            </th>
            <th colspan="1" rowspan="1">
                <p><span>Ca. pris *</span></p>
            </th>
        </tr>
        </thead>
        <tr>
            <td colspan="1" rowspan="1">
                <p><span
                        style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 106.00px; height: 133.33px;"><img
                            alt="" src="https://snesl.dk/media/${this.im_merch_t_shirt_m}"
                            style="width: 106.00px; height: 133.33px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                            title=""></span></p>
            </td>
            <td colspan="1" rowspan="1">
                <p><span><a
                            href="https://www.teamshirts.dk/produkt/herre-premium-t-shirt/2">Herre t-shirt</a></span>
                </p>
            </td>
            <td colspan="1" rowspan="1" class="sf-shrink-td">
                <p><span>116 kr</span></p>
            </td>
        </tr>
        <tr>
            <td colspan="1" rowspan="1">
                <p><span
                        style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 106.00px; height: 130.67px;"><img
                            alt="" src="https://snesl.dk/media/${this.im_merch_t_shirt_f}"
                            style="width: 106.00px; height: 130.67px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                            title=""></span></p>
            </td>
            <td colspan="1" rowspan="1">
                <p><span><a
                            href="https://www.teamshirts.dk/produkt/damer-gildan-heavy-t-shirt/2">Kvinde t-shirt</a></span>
                </p>
            </td>
            <td colspan="1" rowspan="1" class="sf-shrink-td">
                <p><span>100 kr</span></p>
            </td>
        </tr>
        <tr>
            <td colspan="1" rowspan="1">
                <p><span
                        style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 106.00px; height: 120.00px;"><img
                            alt="" src="https://snesl.dk/media/${this.im_merch_t_shirt_child_s}"
                            style="width: 106.00px; height: 120.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                            title=""></span></p>
            </td>
            <td colspan="1" rowspan="1">
                            <p><span><a href="https://www.teamshirts.dk/produkt/borne-premium-t-shirt/348">Børne T-shirt (2-8 år)</a></span>
                </p>
            </td>
            <td colspan="1" rowspan="1" class="sf-shrink-td">
                <p><span>91 kr</span></p>
            </td>
        </tr>
        <tr>
            <td colspan="1" rowspan="1">
                <p><span
                        style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 106.00px; height: 121.33px;"><img
                            alt="" src="https://snesl.dk/media/${this.im_merch_t_shirt_child_l}"
                            style="width: 106.00px; height: 121.33px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                            title=""></span></p>
            </td>
            <td colspan="1" rowspan="1">
                <p><span><a href="https://www.teamshirts.dk/produkt/teenager-premium-t-shirt/2">Børne T-shirt (10-12 år)</a></span>
                </p>
            </td>
            <td colspan="1" rowspan="1" class="sf-shrink-td">
                <p><span>91 kr</span></p>
            </td>
        </tr>
        <tr>
            <td colspan="1" rowspan="1">
                <p><span
                        style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 106.00px; height: 150.67px;"><img
                            alt="" src="https://snesl.dk/media/${this.im_merch_hoodie}"
                            style="width: 106.00px; height: 150.67px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                            title=""></span></p>
            </td>
            <td colspan="1" rowspan="1">
                <p><span><a
                            href="https://www.teamshirts.dk/produkt/hattetroje-unisex/2">Hættetrøje</a></span>
                </p>
            </td>
            <td colspan="1" rowspan="1" class="sf-shrink-td">
                <p><span>164 kr</span></p>
            </td>
        </tr>
        <tr>
            <td colspan="1" rowspan="1">
                <p><span
                        style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 106.00px; height: 150.67px;"><img
                            alt="" src="https://snesl.dk/media/${this.im_merch_hoodie_zipper}"
                            style="width: 106.00px; height: 150.67px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                            title=""></span></p>
            </td>
            <td colspan="1" rowspan="1">
                <p><span><a
                            href="https://www.teamshirts.dk/produkt/unisex-hattejakke/438">Hættetrøje med lynlås</a></span>
                </p>
            </td>
            <td colspan="1" rowspan="1" class="sf-shrink-td">
                <p><span>187 kr</span></p>
            </td>
        </tr>
        <tr>
            <td colspan="1" rowspan="1">
                <p><span
                        style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 106.00px; height: 85.33px;"><img
                            alt="" src="https://snesl.dk/media/${this.im_merch_cap}"
                            style="width: 106.00px; height: 85.33px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                            title=""></span></p>
            </td>
            <td colspan="1" rowspan="1">
                <p><span><a
                            href="https://www.teamshirts.dk/produkt/snapback-cap/14">Kasket</a></span>
                </p>
            </td>
            <td colspan="1" rowspan="1" class="sf-shrink-td">
                <p><span>95 kr</span></p>
            </td>
        </tr>
        <tr>
            <td colspan="1" rowspan="1">
                <p><span
                        style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 106.00px; height: 188.00px;"><img
                            alt="" src="https://snesl.dk/media/${this.im_merch_bag}"
                            style="width: 106.00px; height: 188.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                            title=""></span></p>
            </td>
            <td colspan="1" rowspan="1">
                <p><span><a
                            href="https://www.teamshirts.dk/produkt/mulepose/360">Mulepose</a></span>
                </p>
            </td>
            <td colspan="1" rowspan="1" class="sf-shrink-td">
                <p><span>80 kr</span></p>
            </td>
        </tr>
    </table>
        `
    }
}
