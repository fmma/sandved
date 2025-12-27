 


 import { html, LitElement } from "lit";
 import { customElement } from "lit/decorators.js";
 
 @customElement('sf-film')
 export class sf_film extends LitElement {
     renderRoot = this;
     render() {
         return html`
             <div class="sf-content">
                <p> Filmprogram annonceres snart. </p>
             </div>
         `;

         //        <img src="https://snesl.dk/media/52e36bc47a11126c771aca9fa766671e.png" alt="Filmplakat" class="sf-map" />
     }
 }