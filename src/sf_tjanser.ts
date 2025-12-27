import { html, LitElement } from "lit";
import { customElement, state } from "lit/decorators.js";
import { render_frokost, render_frokost_opr } from "./tjanser/frokost";
import { render_baalhygge, render_snitte_pinde } from "./tjanser/baalhygge";
import { render_lejroprydning, render_toilet } from "./tjanser/lejr";
import { render_skriv_sang } from "./tjanser/skriv_sang";
import { render_lav_banner } from "./tjanser/lav_banner";
import { render_lav_snobroed } from "./tjanser/lav_snobroed";
import { render_lav_skilt } from "./tjanser/lav_skilt";
import { render_aftensmad, render_aftensmad_opr } from "./tjanser/aftensmad";
import { render_biograf } from "./tjanser/biograf";
import { render_musikquiz } from "./tjanser/musikquiz";
import { render_morgenmad, render_morgenmad_opr } from "./tjanser/morgenmad";
import { render_boernekor } from "./tjanser/boernekor";
import { render_begynderguitar } from "./tjanser/begynderguitar";
import { render_begynderband } from "./tjanser/begynderband";
import { render_vand } from "./tjanser/vand";
import { render_glidebane } from "./tjanser/glidebane";
import { render_saebebobler } from "./tjanser/saebebobler";
import { render_tovtraek } from "./tjanser/tovtraek";
import { render_human_bowling } from "./tjanser/human_bowling";
import { render_kongespil } from "./tjanser/kongespil";
import { render_synkron } from "./tjanser/synkron";
import { render_petang } from "./tjanser/petang";

type Tasks = {
    task_name: string;
    task_time: string;
    participants: string[];
    render_card?: [() => unknown, string];
}[]

type Schedule = {
    activity: string;
    tasks: Tasks;
}[]

type Program = {
    day: string;
    schedule: Schedule;
}[]

@customElement('sf-tjanser')
export class sf_tjanser extends LitElement {
    renderRoot = this;

    @state()
    private _query: string = '';

    program: Program = [
        // {
        //     day: 'Torsdag',
        //     schedule: [
        //         {
        //             activity: '',
        //             tasks: [{
        //                 task_name: 'Reklamemand',
        //                 task_time: 'Hele dagen',
        //                 participants: [
        //                     'Sigurd'
        //                 ]
        //             }]
        //         },
        //         {
        //             activity: '',
        //             tasks: [{
        //                 task_name: 'Lave frokost',
        //                 task_time: '11:00',
        //                 participants: [
        //                     'Sif', 'Pernille'
        //                 ],
        //                 render_card: [render_frokost, "frokost"]
        //             }, {
        //                 task_name: 'Oprydning efter frokost',
        //                 task_time: '13:00',
        //                 participants: [
        //                     'Morten LN', 'Jesper', 'Christian'
        //                 ],
        //                 render_card: [render_frokost_opr, "frokost-opryd"]
        //             }]
        //         },
        //         {
        //             activity: 'Festival Kickstart',
        //             tasks: [{
        //                 task_name: 'Snitte pinde til snobrød',
        //                 task_time: '13:00',
        //                 participants: [
        //                     'Vincent', 'Nickolei',
        //                 ],
        //                 render_card: [render_snitte_pinde, "snit"]
        //             },
        //             {
        //                 task_name: 'Skrive festivalssangen',
        //                 task_time: '13:30',
        //                 participants: [
        //                     'Anne S', 'Theresa', 'Frederik'
        //                 ],
        //                 render_card: [render_skriv_sang, "skriv-sang"]
        //             }, {
        //                 task_name: 'Lave bannere',
        //                 task_time: '13:30',
        //                 participants: [
        //                     'Joan', 'Jannie',
        //                 ],
        //                 render_card: [render_lav_banner, "banner"]
        //             }, {
        //                 task_name: 'Snobrødsdej',
        //                 task_time: '13:30',
        //                 participants: [
        //                     'Morten B',
        //                 ],
        //                 render_card: [render_lav_snobroed, "snobrod"]
        //             }, {
        //                 task_name: 'Skiltelavning',
        //                 task_time: '13:30',
        //                 participants: [
        //                     'Sif', 'Nikoline'
        //                 ],
        //                 render_card: [render_lav_skilt, "skilt"]
        //             }]
        //         },

        //         {
        //             activity: '',
        //             tasks: [{
        //                 task_name: 'Lave aftensmad',
        //                 task_time: '16:00',
        //                 participants: [
        //                     'Michael', 'Rasmus', 'Anne S', 'Theresa'
        //                 ],
        //                 render_card: [render_aftensmad, "aftensmad"]
        //             }, {
        //                 task_name: 'Oprydning efter aftensmad',
        //                 task_time: '19:00',
        //                 participants: [
        //                     'Nikoline', 'Nickolei', 'Aske',
        //                 ],
        //                 render_card: [render_aftensmad_opr, "aftensmad-opryd"]
        //             }]
        //         },
        //         {
        //             activity: '',
        //             tasks: [{
        //                 task_name: 'Bålhygge',
        //                 task_time: '19:00',
        //                 participants: [
        //                     'Jesper', 'Michael',
        //                 ],
        //                 render_card: [render_baalhygge, "bhaalhygge"]
        //             }]
        //         },
        //         {
        //             activity: '',
        //             tasks: [{
        //                 task_name: 'Børnefilm',
        //                 task_time: '19:00',
        //                 participants: [
        //                     'Pernille', 'Morten LN'
        //                 ],
        //                 render_card: [render_biograf, "bio"]
        //             }]
        //         },
        //         {
        //             activity: '',
        //             tasks: [{
        //                 task_name: 'Musikquiz',
        //                 task_time: '21:00',
        //                 participants: [
        //                     'Morten B',
        //                 ],
        //                 render_card: [render_musikquiz, "musikquiz"]
        //             }]
        //         },
        //         {
        //             activity: '',
        //             tasks: [{
        //                 task_name: 'Jam Session',
        //                 task_time: '22:00',
        //                 participants: [
        //                     'Nikoline', 'Frederik'
        //                 ]
        //             }]
        //         }
        //     ]
        // },

        // {
        //     day: 'Fredag',
        //     schedule: [
        //         {
        //             activity: '',
        //             tasks: [{
        //                 task_name: 'Reklamemand',
        //                 task_time: 'Hele dagen',
        //                 participants: [
        //                     'Sigurd'
        //                 ]
        //             }]
        //         },
        //         {
        //             activity: '',
        //             tasks: [
        //                 {
        //                     task_name: 'Lejroprydning',
        //                     task_time: 'Før 10:00',
        //                     participants: ['Rasmus', 'Jannie'],
        //                     render_card: [render_lejroprydning, "lejropryd"]
        //                 }
        //             ]
        //         },

        //         {
        //             activity: '',
        //             tasks: [
        //                 {
        //                     task_name: 'Toiletter',
        //                     task_time: 'Før 10:00',
        //                     participants: ['Morten B', 'Pernille'],
        //                     render_card: [render_toilet, "toilet"]
        //                 }
        //             ]
        //         },

        //         {
        //             activity: '',
        //             tasks: [{
        //                 task_name: 'Lave morgenmad',
        //                 task_time: '07:00',
        //                 participants: [
        //                     'Anne S', 'Trine'
        //                 ],
        //                 render_card: [render_morgenmad, "morgenmad"]
        //             }, {
        //                 task_name: 'Oprydning efter morgenmad',
        //                 task_time: '9:30',
        //                 participants: [
        //                     'Benjamin', 'Vincent'
        //                 ],
        //                 render_card: [render_morgenmad_opr, "morgenmad-opryd"]
        //             }
        //             ]
        //         },
        //         {
        //             activity: 'Musisk Formiddag',
        //             tasks: [{
        //                 task_name: 'Børnekor',
        //                 task_time: '9:30',
        //                 participants: [
        //                     'Nikoline'
        //                 ],
        //                 render_card: [render_boernekor, "bornekor"]
        //             }, {
        //                 task_name: 'Begynderguitar',
        //                 task_time: '9:30',
        //                 participants: [
        //                     'Sif'
        //                 ],
        //                 render_card: [render_begynderguitar, "begynderguitar"]
        //             }, {
        //                 task_name: 'Begynderband',
        //                 task_time: '9:30',
        //                 participants: [
        //                     'Frederik'
        //                 ],
        //                 render_card: [render_begynderband, "begynderband"]
        //             }
        //             ]
        //         },
        //         {
        //             activity: '',
        //             tasks: [{
        //                 task_name: 'Lave frokost',
        //                 task_time: '11:00',
        //                 participants: [
        //                     'Nickolei', 'Morten LN'
        //                 ],
        //                 render_card: [render_frokost, "frokost"]
        //             }, {
        //                 task_name: 'Oprydning efter frokost',
        //                 task_time: '13:00',
        //                 participants: [
        //                     'Joan', 'Theresa', 'Lara'
        //                 ],
        //                 render_card: [render_frokost_opr, "frokost-opryd"]
        //             }]
        //         },
        //         {
        //             activity: 'Våd Eftermiddag',
        //             tasks: [{
        //                 task_name: 'Vandpistoler og balloner',
        //                 task_time: '13:30',
        //                 participants: [
        //                     'Vincent', 'Theresa'
        //                 ],
        //                 render_card: [render_vand, "vand"]
        //             }, {
        //                 task_name: 'Glidebane',
        //                 task_time: '13:30',
        //                 participants: [
        //                     'James', 'Benjamin'
        //                 ],
        //                 render_card: [render_glidebane, "glidebane"]
        //             }, {
        //                 task_name: 'Sæbebobler',
        //                 task_time: '13:30',
        //                 participants: [
        //                     'Jannie', 'Rasmus'
        //                 ],
        //                 render_card: [render_saebebobler, "bobler"]
        //             }
        //             ]
        //         },

        //         {
        //             activity: '',
        //             tasks: [{
        //                 task_name: 'Lave aftensmad',
        //                 task_time: '16:00',
        //                 participants: [
        //                     'Michael', 'Maja', 'Frederik', 'Jesper'
        //                 ],
        //                 render_card: [render_aftensmad, "aftensmad"]
        //             }, {
        //                 task_name: 'Oprydning efter aftensmad',
        //                 task_time: '19:00',
        //                 participants: [
        //                     'Janne', 'James', 'Sigurd',
        //                 ],
        //                 render_card: [render_aftensmad_opr, "aftensmad-opryd"]
        //             }]
        //         },
        //         {
        //             activity: '',
        //             tasks: [{
        //                 task_name: 'Bålhygge',
        //                 task_time: '19:00',
        //                 participants: [
        //                     'Joan', 'Nickolei',
        //                 ],
        //                 render_card: [render_baalhygge, "bhaalhygge"]
        //             }]
        //         },
        //         {
        //             activity: '',
        //             tasks: [{
        //                 task_name: 'Børnefilm',
        //                 task_time: '19:00',
        //                 participants: [
        //                     'Maja', 'Morten LN'
        //                 ],
        //                 render_card: [render_biograf, "bio"]
        //             }]
        //         },
        //         {
        //             activity: '',
        //             tasks: [{
        //                 task_name: 'Koncert: Arm the Homeless',
        //                 task_time: '21:00',
        //                 participants: [
        //                     'Michael'
        //                 ]
        //             }]
        //         }
        //     ]
        // },

        // {
        //     day: 'Lørdag',
        //     schedule: [
        //         {
        //             activity: '',
        //             tasks: [{
        //                 task_name: 'Reklamemand',
        //                 task_time: 'Hele dagen',
        //                 participants: [
        //                     'Sigurd'
        //                 ]
        //             }]
        //         },
        //         {
        //             activity: '',
        //             tasks: [
        //                 {
        //                     task_name: 'Lejroprydning',
        //                     task_time: 'Før 10:00',
        //                     participants: ['James', 'Vincent'],
        //                     render_card: [render_lejroprydning, "lejropryd"]
        //                 }
        //             ]
        //         },

        //         {
        //             activity: '',
        //             tasks: [
        //                 {
        //                     task_name: 'Toiletter',
        //                     task_time: 'Før 10:00',
        //                     participants: ['Nikoline', 'Trine'],
        //                     render_card: [render_toilet, "toilet"]
        //                 }
        //             ]
        //         },

        //         {
        //             activity: '',
        //             tasks: [{
        //                 task_name: 'Lave morgenmad',
        //                 task_time: '07:00',
        //                 participants: [
        //                     'Jannie', 'Janne'
        //                 ],
        //                 render_card: [render_morgenmad, "morgenmad"]
        //             }, {
        //                 task_name: 'Oprydning efter morgenmad',
        //                 task_time: '9:30',
        //                 participants: [
        //                     'Rasmus', 'Maja',
        //                 ],
        //                 render_card: [render_morgenmad_opr, "morgenmad-opryd"]
        //             }
        //             ]
        //         },
        //         {
        //             activity: 'OL formiddag',
        //             tasks: [{
        //                 task_name: 'Tovtrækning',
        //                 task_time: '9:30',
        //                 participants: [
        //                     'Theresa', 'Sif'
        //                 ],
        //                 render_card: [render_tovtraek, "tov"]
        //             }, {
        //                 task_name: 'Human-bowling glidebane',
        //                 task_time: '9:30',
        //                 participants: [
        //                     'Jannie', 'Benjamin'
        //                 ],
        //                 render_card: [render_human_bowling, "human-bowling"]
        //             }, {
        //                 task_name: 'Kongespil',
        //                 task_time: '9:30',
        //                 participants: [
        //                     'James', 'Tina'
        //                 ],
        //                 render_card: [render_kongespil, "kongespil"]
        //             }
        //             ]
        //         },
        //         {
        //             activity: '',
        //             tasks: [{
        //                 task_name: 'Lave frokost',
        //                 task_time: '11:00',
        //                 participants: [
        //                     'Morten B', 'Jesper'
        //                 ],
        //                 render_card: [render_frokost, "frokost"]
        //             }, {
        //                 task_name: 'Oprydning efter frokost',
        //                 task_time: '13:00',
        //                 participants: [
        //                     'Sif', 'Nickolei', 'Frigg'
        //                 ],
        //                 render_card: [render_frokost_opr, "frokost-opryd"]
        //             }]
        //         },
        //         {
        //             activity: 'OL eftermiddag',
        //             tasks: [{
        //                 task_name: 'Synkronsvømning',
        //                 task_time: '13:30',
        //                 participants: [
        //                     'Janne', 'Pernille'
        //                 ],
        //                 render_card: [render_synkron, "synkron"]
        //             }, {
        //                 task_name: 'Petang',
        //                 task_time: '13:30',
        //                 participants: [
        //                     'Tina', 'Maja'
        //                 ],
        //                 render_card: [render_petang, "petang"]
        //             }, {
        //                 task_name: 'Band for øvede',
        //                 task_time: '13:30',
        //                 participants: [
        //                     'Frederik'
        //                 ]
        //             }
        //             ]
        //         },

        //         {
        //             activity: '',
        //             tasks: [{
        //                 task_name: 'Lave aftensmad',
        //                 task_time: '16:00',
        //                 participants: [
        //                     'Michael', 'Mathias', 'Benjamin', 'Kasper M', 'Pernille'
        //                 ],
        //                 render_card: [render_aftensmad, "aftensmad"]
        //             }, {
        //                 task_name: 'Oprydning efter aftensmad',
        //                 task_time: '19:00',
        //                 participants: [
        //                     'Tina', 'Sif', 'Gro',
        //                 ],
        //                 render_card: [render_aftensmad_opr, "aftensmad-opryd"]
        //             }]
        //         },
        //         {
        //             activity: '',
        //             tasks: [{
        //                 task_name: 'Bålhygge',
        //                 task_time: '19:00',
        //                 participants: [
        //                     'Rasmus', 'Mathias',
        //                 ],
        //                 render_card: [render_baalhygge, "bhaalhygge"]
        //             }]
        //         },
        //         {
        //             activity: '',
        //             tasks: [{
        //                 task_name: 'Børnefilm',
        //                 task_time: '19:00',
        //                 participants: [
        //                     'Jesper', 'Kasper M'
        //                 ],
        //                 render_card: [render_biograf, "bio"]
        //             }]
        //         },
        //         {
        //             activity: '',
        //             tasks: [{
        //                 task_name: 'Koncert: Begynderband',
        //                 task_time: '21:00',
        //                 participants: [
        //                     'Frederik'
        //                 ]
        //             }, {
        //                 task_name: 'Koncert: Festivalsband',
        //                 task_time: '22:00',
        //                 participants: [
        //                     'Frederik'
        //                 ]
        //             }]
        //         }
        //     ]
        // },

        // {
        //     day: 'Søndag',
        //     schedule: [
        //         {
        //             activity: '',
        //             tasks: [{
        //                 task_name: 'Reklamemand',
        //                 task_time: 'Hele dagen',
        //                 participants: [
        //                     'Sigurd'
        //                 ]
        //             }]
        //         },
        //         {
        //             activity: '',
        //             tasks: [{
        //                 task_name: 'Lave morgenmad',
        //                 task_time: '07:00',
        //                 participants: [
        //                     'Vincent', 'Frederik'
        //                 ],
        //                 render_card: [render_morgenmad, "morgenmad"]
        //             }, {
        //                 task_name: 'Oprydning efter morgenmad',
        //                 task_time: '9:30',
        //                 participants: [
        //                     'Trine', 'Jannie',
        //                 ],
        //                 render_card: [render_morgenmad_opr, "morgenmad-opryd"]
        //             }
        //             ]
        //         },
        //         {
        //             activity: '',
        //             tasks: [{
        //                 task_name: 'Lave frokost',
        //                 task_time: '11:00',
        //                 participants: [
        //                     'Joan', 'Nikoline'
        //                 ],
        //                 render_card: [render_frokost, "frokost"]
        //             }]
        //         }
        //     ]
        // }
    ]

    private _participants() {
        return [
            ...new Set(this.program.flatMap(x => x.schedule.flatMap(y => y.tasks.flatMap(z => z.participants)))),
            ...new Set(this.program.flatMap(x => x.schedule.flatMap(y => y.tasks.map(z => z.task_name)))),
            ...new Set(this.program.map(x => x.day))
        ];
    }

    render_row(day: string, activity: string, schedule_index: number, task_name: string, task_time: string, task_index: number, participant: string, participant_index: number, schedule: Schedule, tasks: Tasks, participants: string[], render_card?: [() => unknown, string]) {
        const day_td = schedule_index === 0 && task_index === 0 && participant_index === 0
            ? html`<td class="sf-program-day .sf-shrink-td" rowspan="${schedule.flatMap(s => s.tasks.flatMap(t => t.participants.flatMap(_ => 1))).reduce((a, b) => a + b)}">
                <span class="sf-program-day">${day}</span>
            </td>`
            : '';
        // const activity_td = task_index == 0 && participant_index === 0
        //     ? html`<td class="sf-activity-td" rowspan="${tasks.flatMap(t => t.participants.flatMap(_ => 1)).reduce((a, b) => a + b)}">${activity}</td>`
        //     : '';

        const rendered_task_name = render_card == null ? task_name :
            window.location.hash == `#tjanser:${render_card[1]}` ?
            html`
            <a href="#tjanser" @click=${() => setTimeout(() => this.requestUpdate())}>${task_name}</a>
            <div class="sf_popup">
            <button class="close-btn" @click=${() => { window.location.hash = "#tjanser"; setTimeout(() => this.requestUpdate()); }} title="Luk">&times;</button>
            <a href="#tjanser" @click=${() => setTimeout(() => this.requestUpdate())}>${task_name}</a>
            ${render_card[0]()}
            </div>
            `
                :
                html`
            <a href="#tjanser:${render_card[1]}" @click=${() => setTimeout(() => this.requestUpdate())}>${task_name}</a>
        `;

        const task_name_td = participant_index === 0
            ? html`
                <td class="sf-task-td sf-shrink-td" rowspan="${participants.length}">${task_time.split(' ').map((l, i) => i > 0 ? html`<br>${l}` : html`${l}`)}</td>
                <td class="sf-task-td" rowspan="${participants.length}">${rendered_task_name}</td>
            `
            : '';
        const participant_span = this._query && participant.toLocaleLowerCase().includes(this._query.toLocaleLowerCase())
            ? html`<span class="sf-search-hit">${participant}<span>`
            : participant
        const participant_td = html`<td class="sf-shrink-td">${participant_span}</td>`;

        return html`<tr class="sf-program-row">
            ${day_td}
            ${task_name_td}
            ${participant_td}
        </tr>`;
    }

    render() {
        const program = this.program.map(day => ({
            ...day,
            schedule: day.schedule.map(sched => ({
                ...sched,
                tasks: sched.tasks.filter(task => {
                    if (day.day.toLowerCase().includes(this._query.toLowerCase())) {
                        return true;
                    }
                    if (task.task_name.toLowerCase().includes(this._query.toLowerCase())) {
                        return true;
                    }
                    if (sched.activity.toLowerCase().includes(this._query.toLowerCase())) {
                        return true;
                    }
                    return task.participants.some(participant => participant.toLowerCase().includes(this._query.toLowerCase()));
                })
            })).filter(sched => sched.tasks.length > 0)
        })).filter(day => day.schedule.length > 0);
        const rendered_rows = program.flatMap(
            day => day.schedule.flatMap(
                (sched, schedule_index) => sched.tasks.flatMap(
                    (task, task_index) =>
                        task.participants.flatMap(
                            (participant, participant_index) =>
                                this.render_row(
                                    day.day,
                                    sched.activity,
                                    schedule_index,
                                    task.task_name,
                                    task.task_time ?? '',
                                    task_index,
                                    participant,
                                    participant_index,
                                    day.schedule,
                                    sched.tasks,
                                    task.participants,
                                    task.render_card
                                )
                        )
                )
            )
        );

        return html`
            <div class="sf-content">
                <p> Her er oversigten over alle deltagertjanser - en vagtplan om man vil. Skriv dit navn i søgefeltet for at se hvad dine tjanser er.</p>
                <p> Tjanserne er under udarbejdelse, og der kan forekomme ændringer. </p>
                <p> Kontakt Nikoline hvis der er ønsker om ændringer. </p>
            </div>
            <div class="sf-content-special">

                <p><label for="search-input-id">Vælg dit navn eller skriv navnet på en opgave:</label></p>
                <input type="search" list="browsers" name="search-input-id" id="search-input-id" class="search-input sf-search-input" @input=${(e: Event) => this._query = (e.target as HTMLInputElement).value} placeholder="Søg i tjanser" />


<datalist id="browsers">
${this._participants().map(p => html`<option value="${p}"></option>`)}
</datalist>
                <table class="sf-program-table">
                    <thead>
                        <tr>
                            <th colspan="4" class="sf-title">Ved Verdens Ende 2026</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${rendered_rows}
                    </tbody>
                </table>
            </div>
        `;
    }
}