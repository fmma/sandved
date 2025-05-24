import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement('sf-practical-info')
export class sf_practical_info extends LitElement {
    renderRoot = this;

    render() {
        return html`
            <h3>Praktisk Information</h3>
            <p>Festivalen finder sted i uge 30, fra torsdag til søndag.</p>
            <p>Der er mulighed for at overnatte på festivalpladsen i eget telt.</p>
            <p>Der vil være adgang til toiletter.</p>
            <p>Morgenmad, frokost, aftensmad, natmad, og mellemmåltider er inkluderet i billetprisen.</p>
            <p>Der vil være mulighed for at købe drikkevarer med et stregsystem.</p>
            <p>Det forventes at alle deltagere hjælper til med det praktiske arbejde under festivalen, såsom madlavning, oprydning og aktiviteter. Der vil blive lavet et skema med tjanser.</p>
        
            <p>Ophold på naboens græsplæne er ikke tilladt.</p>
            
            <p>Husk at medbringe solcreme, regntøj, og godt humør!</p>
        `;
    }
}