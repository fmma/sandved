import { html, LitElement } from "lit";
import { customElement, query, state } from "lit/decorators.js";

import { db } from '@fmma-npm/http-client';

const DB_KEY = 'sf2025_feedback';

type FeedbackRecord = { name: string, feedback: string, hide: boolean, date: Date };

@customElement('sf-feedback')
export class sf_feedback extends LitElement {
    renderRoot = this;

    constructor() {
        super();
        this._load_feedback();
    }

    @state()
    private feedbacks: FeedbackRecord[] = [];

    private async _load_feedback() {
        const feedbacks = await db.getAppendObject<FeedbackRecord>(DB_KEY);
        this.feedbacks = feedbacks.filter(f => !f.hide);
    }   

    @query('input[type="text"]')
    private name_input!: HTMLInputElement;

    @query('textarea')
    private feedback_input!: HTMLTextAreaElement;

    @query('input[type="checkbox"]')
    private hide_checkbox!: HTMLInputElement;

    private async _give_feedback() {
        const name = this.name_input.value.trim();
        const feedback = this.feedback_input.value.trim();
        const hide = this.hide_checkbox.checked;
        if (feedback) {
            this.name_input.value = '';
            this.feedback_input.value = '';
            this.hide_checkbox.checked = false;
            await db.appendObject(DB_KEY, {name, feedback, hide, date: new Date()});
            await this._load_feedback();
        } else {
            alert('Please enter your feedback before submitting.');
        }
    }


    render() {
        return html`
            <div class="sf-content">
            <h3>Feedback</h3>
            <p>Vi vil gerne høre din mening om festivalen Ved Verdens Ende 2025. Hvad kunne være bedre? Hvad var godt? Hvad savnede du? Det kan handle om alle aspekter af festivalen og må meget gerne indeholde konkrete forslag til ændringer eller forbedringer.</p>
            <p> Mange har allerede givet feedback skriftligt på festivalen, men nu er der mulighed for at supplere, hvis man er kommet I tanke om mere.</p>
            <p> Skjul din feedback, hvis du ønsker det. Så er det kun arrangørerne der ser det.</p> 
            <input type="text" placeholder="Dit navn (valgfrit)" />
            <label class="checkbox-label">
            <input type="checkbox" /> Skjul
            </label>
            <textarea rows="20" cols="50" placeholder="Skriv din feedback her..."></textarea>
            <p>
            <button @click=${(() => this._give_feedback())}>Send Feedback</button>
            </p>
            <h4>Tidligere Feedback</h4>
            <ul class="sf-feedback-list">
                ${this.feedbacks.reverse().map(feedback => html`
                    <li>
                        <strong>${feedback.name || 'Anonym'}</strong> <em>
                        (${feedback.date?.getDate()}. ${feedback.date?.toLocaleDateString('da-DK', {month: 'long'})})
                        </em>: <span style="white-space: pre-wrap">${feedback.feedback}</span>
                    </li>
                `)}
            </ul>
            <p>Din feedback er vigtig for os, og vi vil gøre vores bedste for at
            forbedre festivalen baseret på dine input. Tak for at dele dine tanker!</p>
            </div>
        `;
    }
}