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
    
    render() {
        return html`
            <div class="sf-content-special">

    <h4 id="merch:merchandise">Merch</h4>
    <table class="sf-program-table">
        <thead>
        <tr>
            <th colspan="2" rowspan="1">
                <p><span class="sf-activity">Merch</span></p>
            </th>
            <th colspan="1" rowspan="1">
                <p><span>Model og link</span></p>
            </th>
            <th colspan="1" rowspan="1">
                <p><span>Styk pris*</span></p>
                <p><span>*Alle priser er ude tryk ca en merpris på 20 kr</span></p>
            </th>
            <th colspan="1" rowspan="1">
                <p><span>forventet mængderabat pris</span></p>
            </th>
        </tr>
        </thead>
        <tr>
            <td colspan="1" rowspan="1">
                <p><span>Herre t-shirt</span></p>
            </td>
            <td colspan="1" rowspan="1">
                <p><span
                        style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 106.00px; height: 133.33px;"><img
                            alt="" src="https://snesl.dk/media/${this.im_merch_t_shirt_m}"
                            style="width: 106.00px; height: 133.33px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                            title=""></span></p>
            </td>
            <td colspan="1" rowspan="1">
                <p><span>Herre premium T-shirt</span></p>
                <p><span><a
                            href="https://www.google.com/url?q=https://www.teamshirts.dk/produkt/herre-premium-t-shirt/2?embroidery%3Dfalse&amp;sa=D&amp;source=editors&amp;ust=1749976519450319&amp;usg=AOvVaw271PbsR3rwuw3dKAZ7Sf7B">link<-</span>
                </p>
                <p><span></span></p>
            </td>
            <td colspan="1" rowspan="1">
                <p><span>155 kr</span></p>
            </td>
            <td colspan="1" rowspan="1">
                <p><span>106 kr</span></p>
            </td>
        </tr>
        <tr>
            <td colspan="1" rowspan="1">
                <p><span>Kvinde t-shirt</span></p>
            </td>
            <td colspan="1" rowspan="1">
                <p><span
                        style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 106.00px; height: 130.67px;"><img
                            alt="" src="https://snesl.dk/media/${this.im_merch_t_shirt_f}"
                            style="width: 106.00px; height: 130.67px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                            title=""></span></p>
            </td>
            <td colspan="1" rowspan="1">
                <p><span>Damer glidan heavy t-shirt</span></p>
                <p><span><a
                            href="https://www.google.com/url?q=https://www.teamshirts.dk/produkt/damer-gildan-heavy-t-shirt/2%23price&amp;sa=D&amp;source=editors&amp;ust=1749976519451246&amp;usg=AOvVaw35liKaAMeS5HeHC7wJrr4o">link<-</span>
                </p>
                <p><span></span></p>
                <p><span></span></p>
            </td>
            <td colspan="1" rowspan="1">
                <p><span>119 kr</span></p>
            </td>
            <td colspan="1" rowspan="1">
                <p><span>90 kr</span></p>
            </td>
        </tr>
        <tr>
            <td colspan="1" rowspan="1">
                <p><span>Lille Børne T-shirt</span></p>
            </td>
            <td colspan="1" rowspan="1">
                <p><span
                        style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 106.00px; height: 120.00px;"><img
                            alt="" src="https://snesl.dk/media/${this.im_merch_t_shirt_child_s}"
                            style="width: 106.00px; height: 120.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                            title=""></span></p>
            </td>
            <td colspan="1" rowspan="1">
                <p><span>Børne premium T-shirt </span><span><a
                            href="https://www.google.com/url?q=https://www.teamshirts.dk/produkt/borne-premium-t-shirt/348%23price&amp;sa=D&amp;source=editors&amp;ust=1749976519452179&amp;usg=AOvVaw3Lrq3oiaB6moZ2bY2ix9eQ">link<-</span>
                </p>
                <p><span></span></p>
            </td>
            <td colspan="1" rowspan="1">
                <p><span>99 kr</span></p>
            </td>
            <td colspan="1" rowspan="1">
                <p><span>81 kr</span></p>
            </td>
        </tr>
        <tr>
            <td colspan="1" rowspan="1">
                <p><span>Stor Børne T-shirt</span></p>
            </td>
            <td colspan="1" rowspan="1">
                <p><span
                        style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 106.00px; height: 121.33px;"><img
                            alt="" src="https://snesl.dk/media/${this.im_merch_t_shirt_child_l}"
                            style="width: 106.00px; height: 121.33px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                            title=""></span></p>
            </td>
            <td colspan="1" rowspan="1">
                <p><span>Teenager premium T-shirt</span></p>
                <p><span><a href="https://www.google.com/url?q=https://www.teamshirts.dk/produkt/teenager-premium-t-shirt/2?embroidery%3Dfalse&amp;sa=D&amp;source=editors&amp;ust=1749976519453139&amp;usg=AOvVaw2jGVTUBO9pqJ7Yw3rrLyxt">link<-</span>
                </p>
                <p><span></span></p>
            </td>
            <td colspan="1" rowspan="1">
                <p><span>99 kr</span></p>
            </td>
            <td colspan="1" rowspan="1">
                <p><span>81 kr</span></p>
            </td>
        </tr>
        <tr>
            <td colspan="1" rowspan="1">
                <p><span>Hættetrøje</span></p>
            </td>
            <td colspan="1" rowspan="1">
                <p><span
                        style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 106.00px; height: 150.67px;"><img
                            alt="" src="https://snesl.dk/media/${this.im_merch_hoodie}"
                            style="width: 106.00px; height: 150.67px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                            title=""></span></p>
            </td>
            <td colspan="1" rowspan="1">
                <p><span>Hættetrøje unisex</span></p>
                <p><span><a
                            href="https://www.google.com/url?q=https://www.teamshirts.dk/produkt/hattetroje-unisex/2?embroidery%3Dfalse&amp;sa=D&amp;source=editors&amp;ust=1749976519454498&amp;usg=AOvVaw0llf_2Pe-_Z-vQNHL6YyCw">link<-</span>
                </p>
                <p><span></span></p>
            </td>
            <td colspan="1" rowspan="1">
                <p><span>245 kr</span></p>
            </td>
            <td colspan="1" rowspan="1">
                <p><span>154 kr</span></p>
            </td>
        </tr>
        <tr>
            <td colspan="1" rowspan="1">
                <p><span>Kasket</span></p>
            </td>
            <td colspan="1" rowspan="1">
                <p><span
                        style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 106.00px; height: 85.33px;"><img
                            alt="" src="https://snesl.dk/media/${this.im_merch_cap}"
                            style="width: 106.00px; height: 85.33px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                            title=""></span></p>
            </td>
            <td colspan="1" rowspan="1">
                <p><span>Snapbak Cap</span></p>
                <p><span><a
                            href="https://www.google.com/url?q=https://www.teamshirts.dk/produkt/snapback-cap/14?embroidery%3Dfalse%23price&amp;sa=D&amp;source=editors&amp;ust=1749976519455389&amp;usg=AOvVaw3j1gO6uLn_60ujfux_8S_A">link<-</span>
                </p>
                <p><span></span></p>
            </td>
            <td colspan="1" rowspan="1">
                <p><span>109 kr</span></p>
            </td>
            <td colspan="1" rowspan="1">
                <p><span>85 kr</span></p>
            </td>
        </tr>
        <tr>
            <td colspan="1" rowspan="1">
                <p><span>Mulepose</span></p>
            </td>
            <td colspan="1" rowspan="1">
                <p><span
                        style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 106.00px; height: 188.00px;"><img
                            alt="" src="https://snesl.dk/media/${this.im_merch_bag}"
                            style="width: 106.00px; height: 188.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                            title=""></span></p>
            </td>
            <td colspan="1" rowspan="1">
                <p><span>Mulepose</span></p>
                <p><span><a
                            href="https://www.google.com/url?q=https://www.teamshirts.dk/produkt/mulepose/360?embroidery%3Dfalse&amp;sa=D&amp;source=editors&amp;ust=1749976519456254&amp;usg=AOvVaw0Xma8-8DYIwbKQkhHLo2OZ">link<-</span>
                </p>
                <p><span></span></p>
            </td>
            <td colspan="1" rowspan="1">
                <p><span>75 kr</span></p>
            </td>
            <td colspan="1" rowspan="1">
                <p><span>70 kr</span></p>
            </td>
        </tr>
    </table>

<a href="#merch:top">Tilbage til toppen</a>
            </div>
        `;
    }
}
