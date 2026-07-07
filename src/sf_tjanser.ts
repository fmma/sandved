import { html, LitElement } from "lit";
import { customElement, state } from "lit/decorators.js";
import { render_frokost, render_frokost_opr } from "./tjanser/frokost";
import { render_baalhygge } from "./tjanser/baalhygge";
import { render_lejr_toilet } from "./tjanser/lejr";
import { render_aftensmad, render_aftensmad_opr } from "./tjanser/aftensmad";
import { render_biograf } from "./tjanser/biograf";
import { render_morgenmad, render_morgenmad_opr } from "./tjanser/morgenmad";
import { render_lav_banner } from "./tjanser/lav_banner";
import { render_lav_skilt } from "./tjanser/lav_skilt";
import { render_boernekor } from "./tjanser/boernekor";
import { render_begynderguitar } from "./tjanser/begynderguitar";
import { render_dans } from "./tjanser/dans";
import { render_vand } from "./tjanser/vand";
import { render_glidebane } from "./tjanser/glidebane";
import { render_saebebobler } from "./tjanser/saebebobler";
import { render_begynderband } from "./tjanser/begynderband";
import { render_skriv_sang } from "./tjanser/skriv_sang";
import { render_hovdingebold } from "./tjanser/hovdingebold";
import { render_petang } from "./tjanser/petang";
import { render_daasekast } from "./tjanser/daasekast";
import { render_stafet } from "./tjanser/stafet";
import { render_tovtraek } from "./tjanser/tovtraek";
import { render_synkron } from "./tjanser/synkron";
import { render_boerneaktivitet } from "./tjanser/boerneaktivitet";

// Placeholder participants until the schema is filled in: persons(2) -> ['Person 1', 'Person 2'].
const persons = (n: number) => Array.from({ length: n }, (_, i) => `Person ${i + 1}`);

// Køkken/oprydnings-tjanser der ligger til venstre; de fylder 1/3 af bredden.
const LEFT_PINNED = new Set([
    'Lave morgenmad', 'Oprydning efter morgenmad',
    'Lave frokost', 'Oprydning efter frokost',
    'Lave aftensmad', 'Oprydning efter aftensmad',
]);

// Tjanser (pligter) i oversigtslisten: køkken/oprydning + lejr og toiletter.
// Alt andet (uden fælles events) regnes som en aktivitet.
const TJANS_NAMES = new Set([
    ...LEFT_PINNED,
    'Lejroprydning og Toiletter',
]);

// Andel af banebredden som de fastgjorte (venstre) tjanser deler; resten deler (1 - denne).
const PINNED_FRACTION = 1 / 3;

type Tasks = {
    task_name: string;
    task_time: string;
    participants: string[];
    render_card?: [() => unknown, string];
    // Varighed i timer (hvor mange timer blokken fylder i kalenderen). Standard: 1.
    duration?: number;
    // true = fælles dagsprogram (måltider, flaghejsning) der vises i sin egen kolonne.
    event?: boolean;
    // kendt bemanding i skabelonen; vises som "(N personer)" efter tidspunktet.
    people?: number;
}[]

type Schedule = {
    activity: string;
    tasks: Tasks;
}[]

type Program = {
    day: string;
    schedule: Schedule;
}[]

// Et udlagt kort i kalenderen: tid, bane og indhold. leftPct/widthPct er den vandrette placering.
type CalItem = {
    task: Tasks[number];
    activity: string;
    parts: string[];
    start: number;
    end: number;
    lane: number;
    lanes: number;
    leftPct: number;
    widthPct: number;
};

@customElement('sf-tjanser')
export class sf_tjanser extends LitElement {
    renderRoot = this;

    @state()
    private _view: 'kalender' | 'tabel' = 'kalender';

    // false = tid lodret (hver dag som lodret kalender, stablet); true = tid vandret (dage som rækker).
    @state()
    private _flip: boolean = false;

    // Valgt dag i kalenderen. 'Alle' = vis alle dage.
    @state()
    private _calDay: string = 'Alle';

    program: Program = [
        {
            day: 'Onsdag',
            schedule: [
                {
                    activity: '',
                    tasks: [{
                        task_name: 'Frokost',
                        task_time: '12:00',
                        participants: persons(0),
                        duration: 1,
                        event: true
                    }]
                },
                {
                    activity: '',
                    tasks: [{
                        task_name: 'Lave frokost',
                        task_time: '11:00',
                        participants: persons(2),
                        render_card: [render_frokost, "frokost"],
                        duration: 2
                    }, {
                        task_name: 'Oprydning efter frokost',
                        task_time: '13:00',
                        participants: persons(3),
                        render_card: [render_frokost_opr, "frokost-opryd"]
                    }]
                },
                {
                    activity: '',
                    tasks: [{
                        task_name: 'Lave flag og vimpler',
                        task_time: '14:00',
                        participants: persons(2),
                        render_card: [render_lav_banner, "banner"],
                        duration: 2
                    }, {
                        task_name: 'Skiltelavning',
                        task_time: '14:00',
                        participants: persons(2),
                        render_card: [render_lav_skilt, "skilt"],
                        duration: 2
                    }, {
                        task_name: 'Festivalsang',
                        task_time: '14:00',
                        participants: persons(2),
                        render_card: [render_skriv_sang, "festivalsang"],
                        duration: 2
                    }, {
                        task_name: 'Slangeworkshop',
                        task_time: '14:00',
                        participants: persons(2),
                        duration: 2
                    }]
                },
                {
                    activity: '',
                    tasks: [{
                        task_name: 'Aftensmad',
                        task_time: '18:00',
                        participants: persons(0),
                        duration: 1,
                        event: true
                    }]
                },
                {
                    activity: '',
                    tasks: [{
                        task_name: 'Lave aftensmad',
                        task_time: '16:00',
                        participants: persons(4),
                        render_card: [render_aftensmad, "aftensmad"],
                        duration: 2
                    }, {
                        task_name: 'Oprydning efter aftensmad',
                        task_time: '19:00',
                        participants: persons(3),
                        render_card: [render_aftensmad_opr, "aftensmad-opryd"]
                    }]
                },
                {
                    activity: '',
                    tasks: [{
                        task_name: 'Bålhygge',
                        task_time: '19:00',
                        participants: persons(2),
                        render_card: [render_baalhygge, "bhaalhygge"],
                        duration: 3
                    }]
                },
                {
                    activity: '',
                    tasks: [{
                        task_name: 'Børnefilm',
                        task_time: '19:00',
                        participants: persons(2),
                        render_card: [render_biograf, "bio"],
                        duration: 2
                    }]
                }
            ]
        },

        {
            day: 'Torsdag',
            schedule: [
                {
                    activity: '',
                    tasks: [
                        {
                            task_name: 'Lejroprydning og Toiletter',
                            task_time: '07:00',
                            participants: persons(2),
                            render_card: [render_lejr_toilet, "lejr-toilet"],
                            duration: 3
                        }
                    ]
                },

                {
                    activity: '',
                    tasks: [{
                        task_name: 'Morgenmad',
                        task_time: '08:00',
                        participants: persons(0),
                        duration: 1.25,
                        event: true
                    }]
                },
                {
                    activity: '',
                    tasks: [{
                        task_name: 'Lave morgenmad',
                        task_time: '07:00',
                        participants: persons(2),
                        render_card: [render_morgenmad, "morgenmad"],
                        duration: 2
                    }, {
                        task_name: 'Oprydning efter morgenmad',
                        task_time: '9:45',
                        participants: persons(2),
                        render_card: [render_morgenmad_opr, "morgenmad-opryd"],
                        duration: 1.25
                    }
                    ]
                },
                {
                    activity: '',
                    tasks: [{
                        task_name: 'Flaghejsning',
                        task_time: '9:00',
                        participants: persons(1),
                        duration: 0.5,
                        event: true
                    }]
                },
                {
                    activity: '',
                    tasks: [{
                        task_name: 'Kor',
                        task_time: '10:00',
                        participants: persons(2),
                        render_card: [render_boernekor, "kor"],
                        duration: 1
                    }, {
                        task_name: 'Begynder- og let øvet guitar',
                        task_time: '10:00',
                        participants: persons(2),
                        render_card: [render_begynderguitar, "guitar"],
                        duration: 2
                    }, {
                        task_name: 'Begynderband',
                        task_time: '10:00',
                        participants: persons(2),
                        render_card: [render_begynderband, "begynderband"],
                        duration: 2
                    }, {
                        task_name: 'Dans',
                        task_time: '11:00',
                        participants: persons(2),
                        render_card: [render_dans, "dans"],
                        duration: 1
                    }]
                },
                {
                    activity: '',
                    tasks: [{
                        task_name: 'Frokost',
                        task_time: '12:00',
                        participants: persons(0),
                        duration: 1,
                        event: true
                    }]
                },
                {
                    activity: '',
                    tasks: [{
                        task_name: 'Lave frokost',
                        task_time: '11:00',
                        participants: persons(2),
                        render_card: [render_frokost, "frokost"],
                        duration: 2
                    }, {
                        task_name: 'Oprydning efter frokost',
                        task_time: '13:00',
                        participants: persons(3),
                        render_card: [render_frokost_opr, "frokost-opryd"]
                    }]
                },
                {
                    activity: '',
                    tasks: [{
                        task_name: 'Vandpistoler og balloner',
                        task_time: '13:30',
                        participants: persons(2),
                        render_card: [render_vand, "vand"],
                        duration: 2
                    }, {
                        task_name: 'Glidebane',
                        task_time: '13:30',
                        participants: persons(2),
                        render_card: [render_glidebane, "glidebane"],
                        duration: 2
                    }, {
                        task_name: 'Sæbebobler',
                        task_time: '13:30',
                        participants: persons(2),
                        render_card: [render_saebebobler, "saebebobler"],
                        duration: 2
                    }]
                },
                {
                    activity: '',
                    tasks: [{
                        task_name: 'Aftensmad',
                        task_time: '18:00',
                        participants: persons(0),
                        duration: 1,
                        event: true
                    }]
                },
                {
                    activity: '',
                    tasks: [{
                        task_name: 'Koncerter: Kor og Begynderband',
                        task_time: '17:30',
                        participants: persons(2),
                        duration: 0.5
                    }]
                },
                {
                    activity: '',
                    tasks: [{
                        task_name: 'Lave aftensmad',
                        task_time: '16:00',
                        participants: persons(4),
                        render_card: [render_aftensmad, "aftensmad"],
                        duration: 2
                    }, {
                        task_name: 'Oprydning efter aftensmad',
                        task_time: '19:00',
                        participants: persons(3),
                        render_card: [render_aftensmad_opr, "aftensmad-opryd"]
                    }]
                },
                {
                    activity: '',
                    tasks: [{
                        task_name: 'Bålhygge',
                        task_time: '19:00',
                        participants: persons(2),
                        render_card: [render_baalhygge, "bhaalhygge"],
                        duration: 3
                    }]
                },
                {
                    activity: '',
                    tasks: [{
                        task_name: 'Børnefilm',
                        task_time: '19:00',
                        participants: persons(2),
                        render_card: [render_biograf, "bio"],
                        duration: 2
                    }]
                }
            ]
        },

        {
            day: 'Fredag',
            schedule: [
                {
                    activity: '',
                    tasks: [
                        {
                            task_name: 'Lejroprydning og Toiletter',
                            task_time: '07:00',
                            participants: persons(2),
                            render_card: [render_lejr_toilet, "lejr-toilet"],
                            duration: 3
                        }
                    ]
                },

                {
                    activity: '',
                    tasks: [{
                        task_name: 'Morgenmad',
                        task_time: '08:00',
                        participants: persons(0),
                        duration: 1.25,
                        event: true
                    }]
                },
                {
                    activity: '',
                    tasks: [{
                        task_name: 'Lave morgenmad',
                        task_time: '07:00',
                        participants: persons(2),
                        render_card: [render_morgenmad, "morgenmad"],
                        duration: 2
                    }, {
                        task_name: 'Oprydning efter morgenmad',
                        task_time: '9:45',
                        participants: persons(2),
                        render_card: [render_morgenmad_opr, "morgenmad-opryd"],
                        duration: 1.25
                    }
                    ]
                },
                {
                    activity: '',
                    tasks: [{
                        task_name: 'Flaghejsning',
                        task_time: '9:00',
                        participants: persons(1),
                        duration: 0.5,
                        event: true
                    }]
                },
                {
                    activity: '',
                    tasks: [{
                        task_name: 'OL: Høvdingebold',
                        task_time: '10:00',
                        participants: persons(2),
                        render_card: [render_hovdingebold, "hovdingebold"],
                        duration: 2
                    }, {
                        task_name: 'OL: Petanque',
                        task_time: '10:00',
                        participants: persons(2),
                        render_card: [render_petang, "petanque"],
                        duration: 2
                    }]
                },
                {
                    activity: '',
                    tasks: [{
                        task_name: 'Frokost',
                        task_time: '12:00',
                        participants: persons(0),
                        duration: 1,
                        event: true
                    }]
                },
                {
                    activity: '',
                    tasks: [{
                        task_name: 'Lave frokost',
                        task_time: '11:00',
                        participants: persons(2),
                        render_card: [render_frokost, "frokost"],
                        duration: 2
                    }, {
                        task_name: 'Oprydning efter frokost',
                        task_time: '13:00',
                        participants: persons(3),
                        render_card: [render_frokost_opr, "frokost-opryd"]
                    }]
                },
                {
                    activity: '',
                    tasks: [{
                        task_name: 'OL: Tovtrækning',
                        task_time: '13:30',
                        participants: persons(2),
                        render_card: [render_tovtraek, "tovtraek"],
                        duration: 2
                    }, {
                        task_name: 'OL: Dåsekast',
                        task_time: '13:30',
                        participants: persons(2),
                        render_card: [render_daasekast, "daasekast"],
                        duration: 2
                    }, {
                        task_name: 'OL: Stafet',
                        task_time: '13:30',
                        participants: persons(2),
                        render_card: [render_stafet, "stafet"],
                        duration: 2
                    }, {
                        task_name: 'OL: Synkronsvømning',
                        task_time: '13:30',
                        participants: persons(2),
                        render_card: [render_synkron, "synkron"],
                        duration: 2
                    }]
                },
                {
                    activity: '',
                    tasks: [{
                        task_name: 'Aftensmad',
                        task_time: '18:00',
                        participants: persons(0),
                        duration: 1,
                        event: true
                    }]
                },
                {
                    activity: '',
                    tasks: [{
                        task_name: 'Lave aftensmad',
                        task_time: '16:00',
                        participants: persons(4),
                        render_card: [render_aftensmad, "aftensmad"],
                        duration: 2
                    }, {
                        task_name: 'Oprydning efter aftensmad',
                        task_time: '19:00',
                        participants: persons(3),
                        render_card: [render_aftensmad_opr, "aftensmad-opryd"]
                    }]
                },
                {
                    activity: '',
                    tasks: [{
                        task_name: 'Bålhygge',
                        task_time: '19:00',
                        participants: persons(2),
                        render_card: [render_baalhygge, "bhaalhygge"],
                        duration: 3
                    }]
                },
                {
                    activity: '',
                    tasks: [{
                        task_name: 'Børnefilm',
                        task_time: '19:00',
                        participants: persons(2),
                        render_card: [render_biograf, "bio"],
                        duration: 2
                    }]
                }
            ]
        },

        {
            day: 'Lørdag',
            schedule: [
                {
                    activity: '',
                    tasks: [{
                        task_name: 'Morgenmad',
                        task_time: '08:00',
                        participants: persons(0),
                        duration: 1.25,
                        event: true
                    }]
                },
                {
                    activity: '',
                    tasks: [{
                        task_name: 'Lave morgenmad',
                        task_time: '07:00',
                        participants: persons(2),
                        render_card: [render_morgenmad, "morgenmad"],
                        duration: 2
                    }, {
                        task_name: 'Oprydning efter morgenmad',
                        task_time: '9:45',
                        participants: persons(2),
                        render_card: [render_morgenmad_opr, "morgenmad-opryd"],
                        duration: 1.25
                    }
                    ]
                },
                {
                    activity: '',
                    tasks: [{
                        task_name: 'Flaghejsning',
                        task_time: '9:00',
                        participants: persons(1),
                        duration: 0.5,
                        event: true
                    }]
                },
                {
                    activity: '',
                    tasks: [{
                        task_name: 'Børneaktiviteter under oprydning',
                        task_time: '10:00',
                        participants: persons(2),
                        render_card: [render_boerneaktivitet, "boerneaktivitet"],
                        duration: 2
                    }]
                },
                {
                    activity: '',
                    tasks: [{
                        task_name: 'Frokost',
                        task_time: '12:00',
                        participants: persons(0),
                        duration: 1,
                        event: true
                    }]
                },
                {
                    activity: '',
                    tasks: [{
                        task_name: 'Lave frokost',
                        task_time: '11:00',
                        participants: persons(2),
                        render_card: [render_frokost, "frokost"],
                        duration: 2
                    }]
                }
            ]
        }
    ]


    // Genrender efter en hash-ændring (vi ruter på window.location.hash uden hashchange-lytter).
    private _rerender = () => setTimeout(() => this.requestUpdate());

    // Opgavenavn som link: åbner info-kortet via hash (#tjanser:<key>) eller lukker det igen.
    // Selve popup'en tegnes ét sted øverst i render() (uden for indholds-kolonnerne), så den
    // ligger oven på kalender/tabel og ikke fanges i deres stacking-context.
    private _render_task_name(task_name: string, render_card?: [() => unknown, string]) {
        if (render_card == null) return task_name;
        const key = render_card[1];
        const href = window.location.hash === `#tjanser:${key}` ? '#tjanser' : `#tjanser:${key}`;
        return html`<a href="${href}" @click=${this._rerender}>${task_name}</a>`;
    }

    // Én række pr. tjans: dag (rowspan), tidspunkt, tjans og antal personer.
    render_row(day: string, day_rowspan: number, first_of_day: boolean, task_name: string, task_time: string, count: number, render_card?: [() => unknown, string]) {
        const day_td = first_of_day
            ? html`<td class="sf-program-day sf-shrink-td" rowspan="${day_rowspan}">
                <span class="sf-program-day">${day}</span>
            </td>`
            : '';

        const rendered_task_name = this._render_task_name(task_name, render_card);

        return html`<tr class="sf-program-row">
            ${day_td}
            <td class="sf-task-td sf-shrink-td">${task_time.split(' ').map((l, i) => i > 0 ? html`<br>${l}` : html`${l}`)}</td>
            <td class="sf-task-td">${rendered_task_name}</td>
            <td class="sf-shrink-td">${count} ${count === 1 ? 'person' : 'personer'}</td>
        </tr>`;
    }

    // Sorteringsnøgle for et tidspunkt i timer, fx '9:30' -> 9.5.
    private _time_key(t: string): number {
        const m = t.match(/(\d+)(?::(\d+))?/);
        return m ? parseInt(m[1], 10) + (m[2] ? parseInt(m[2], 10) / 60 : 0) : 0;
    }

    // Vis tid som HH:MM (fx '9:45' -> '09:45').
    private _fmt_time(t: string): string {
        const m = t.match(/^(\d{1,2}):(\d{2})/);
        return m ? `${m[1].padStart(2, '0')}:${m[2]}` : t;
    }

    // Sluttidspunkt (start + varighed) som HH:MM.
    private _end_time(task: Tasks[number]): string {
        const end = this._time_key(task.task_time) + (task.duration ?? 1);
        const h = Math.floor(end + 1e-9);
        const min = Math.round((end - h) * 60);
        return `${String(h).padStart(2, '0')}:${String(min).padStart(2, '0')}`;
    }

    private _cal_card(task: Tasks[number], parts: string[]) {
        // Websitet viser antal personer i stedet for navne; fordelingen laves på dagen.
        // Måltider/flaghejsning (event) er fælles og viser hverken tid eller antal.
        const count = task.people ?? parts.length;
        const countTxt = task.event ? '' : ` (${count} ${count === 1 ? 'person' : 'personer'})`;
        return html`
            <div class="sf-cal-card">
                <div class="sf-cal-card-title">${this._render_task_name(task.task_name, task.render_card)}${task.event ? '' : html` <span class="sf-cal-time">${this._fmt_time(task.task_time)}-${this._end_time(task)}${countTxt}</span>`}</div>
            </div>`;
    }

    private _cell(task: Tasks[number], activity: string, parts: string[]): CalItem {
        const start = this._time_key(task.task_time);
        return { task, activity, parts, start, end: start + (task.duration ?? 1), lane: 0, lanes: 1, leftPct: 0, widthPct: 100 };
    }

    // Tildel baner (lanes) til overlappende kort. Fastgjorte tjanser (LEFT_PINNED) får de
    // venstre/øverste baner, resten pakkes til højre/nedenunder. Grupperes pr. overlap-kæde.
    private _packLanes(items: CalItem[]): CalItem[] {
        const sorted = items.slice().sort((a, b) => a.start - b.start || b.end - a.end);
        let group: CalItem[] = [];
        let groupEnd = -Infinity;
        const flush = () => {
            if (group.length) this._assignLanes(group);
            group = [];
            groupEnd = -Infinity;
        };
        for (const it of sorted) {
            if (group.length && it.start >= groupEnd) flush();
            group.push(it);
            groupEnd = Math.max(groupEnd, it.end);
        }
        flush();
        return items;
    }

    // Pak en overlap-gruppe: fastgjorte tjanser i de venstre baner, resten forskudt til højre.
    private _assignLanes(group: CalItem[]) {
        const pack = (bucket: CalItem[], offset: number) => {
            const colEnds: number[] = [];
            for (const it of bucket) {
                let lane = colEnds.findIndex(e => e <= it.start);
                if (lane === -1) { lane = colEnds.length; colEnds.push(it.end); } else { colEnds[lane] = it.end; }
                it.lane = offset + lane;
            }
            return colEnds.length;
        };
        const pinned = group.filter(it => LEFT_PINNED.has(it.task.task_name));
        const rest = group.filter(it => !LEFT_PINNED.has(it.task.task_name));
        const p = pack(pinned, 0);
        const r = pack(rest, p);
        const total = p + r;
        // Køkken/oprydning (pinned) fylder PINNED_FRACTION til venstre; de øvrige parallelle
        // tjanser deler resten. Samme regel i skabelonen og på de rigtige dage.
        const widths: number[] = new Array(total).fill(1 / total);
        if (p > 0) {
            for (let l = 0; l < p; l++) widths[l] = PINNED_FRACTION / p;
            if (r > 0) for (let l = p; l < total; l++) widths[l] = (1 - PINNED_FRACTION) / r;
        }
        let acc = 0;
        const lefts: number[] = [];
        for (let l = 0; l < total; l++) { lefts[l] = acc; acc += widths[l]; }
        for (const it of group) {
            it.lanes = total;
            it.leftPct = lefts[it.lane] * 100;
            it.widthPct = widths[it.lane] * 100;
        }
    }

    // En dags tjanser (uden de fælles dagsprogram-events).
    private _dayItems(day: Program[number]): CalItem[] {
        const items = day.schedule.flatMap(s => s.tasks
            .filter(t => t.event !== true)
            .map(t => this._cell(t, s.activity, t.participants)));
        return this._packLanes(items);
    }

    // En dags fælles dagsprogram (måltider, flaghejsning) til dagens egen Fælles-kolonne.
    private _dayEvents(day: Program[number]): CalItem[] {
        const items = day.schedule.flatMap(s => s.tasks
            .filter(t => t.event === true)
            .map(t => this._cell(t, s.activity, [])));
        return this._packLanes(items);
    }

    // Fælles dagsprogram (morgenmad, flaghejsning, frokost, aftensmad) samlet i én kolonne.
    // De går igen hver dag, så vi viser hvert unikke event én gang (nøgle: navn + tid).
    private _sharedItems(days: Program): CalItem[] {
        const seen = new Set<string>();
        const items: CalItem[] = [];
        for (const day of days) {
            for (const s of day.schedule) {
                for (const t of s.tasks) {
                    if (t.event !== true) continue;
                    const key = `${t.task_name}|${t.task_time}`;
                    if (seen.has(key)) continue;
                    seen.add(key);
                    items.push(this._cell(t, s.activity, []));
                }
            }
        }
        return this._packLanes(items);
    }

    // Skabelon til whiteboard: én planlægningscyklus (en dag fra formiddag + næste morgen
    // til og med "Oprydning efter morgenmad"). Tomme felter, aktiviteter som ét stort felt.
    private _templateProgram(): Program {
        const box = (task_name: string, task_time: string, duration: number,
            opts: { event?: boolean; people?: number } = {}): Tasks[number] =>
            ({ task_name, task_time, participants: [], duration, event: opts.event ?? false, people: opts.people });
        const blk = (day: string, tasks: Tasks): Program[number] =>
            ({ day, schedule: tasks.map(t => ({ activity: '', tasks: [t] })) });
        return [
            blk('Dagen', [
                box('Flaghejsning', '09:00', 0.5, { event: true }),
                box('Oprydning efter morgenmad', '09:45', 1.25, { people: 2 }),
                box('Formiddagsaktiviteter', '10:00', 2),
                box('Lave frokost', '11:00', 2, { people: 2 }),
                box('Frokost', '12:00', 1, { event: true }),
                box('Oprydning efter frokost', '13:00', 1, { people: 3 }),
                box('Eftermiddagsaktiviteter', '13:30', 2),
                box('Lave aftensmad', '16:00', 2, { people: 4 }),
                box('Aftensmad', '18:00', 1, { event: true }),
                box('Oprydning efter aftensmad', '19:00', 1, { people: 3 }),
                box('Bålhygge', '19:00', 3, { people: 2 }),
                box('Børnefilm', '19:00', 2, { people: 2 }),
            ]),
            blk('Næste morgen', [
                box('Lave morgenmad', '07:00', 2, { people: 2 }),
                box('Lejroprydning og Toiletter', '07:00', 3, { people: 2 }),
                box('Morgenmad', '08:00', 1.25, { event: true }),
                box('Flaghejsning', '09:00', 0.5, { event: true }),
                box('Oprydning efter morgenmad', '09:45', 1.25, { people: 2 }),
                box('Formiddagsaktiviteter', '10:00', 2),
            ]),
        ];
    }

    private _calendar() {
        // Skabelon-tilstand: én cyklus med tomme felter; ellers alle dage eller en enkelt dag.
        const isTemplate = this._calDay === 'Skabelon';
        const days = isTemplate ? this._templateProgram()
            : this._calDay === 'Alle' ? this.program
                : this.program.filter(d => d.day === this._calDay);
        // Fælles dagsprogram (events) samles i egen kolonne; dagene viser kun tjanser.
        const shared = this._sharedItems(days);
        const layouts = days.map(d => ({ day: d, items: this._dayItems(d) }));

        // Fælles tidsakse ud fra alt der vises, så rækker/kolonner flugter.
        const cells = [...shared, ...layouts.flatMap(l => l.items)];
        const axisStart = cells.length ? Math.floor(Math.min(...cells.map(c => c.start))) : 7;
        const axisEnd = cells.length ? Math.ceil(Math.max(...cells.map(c => c.end))) : 21;
        const span = Math.max(1, axisEnd - axisStart);
        const hours: number[] = [];
        for (let h = axisStart; h < axisEnd; h++) hours.push(h);
        const laneCount = (items: CalItem[]) => items.reduce((m, it) => Math.max(m, it.lanes), 1);

        if (this._flip) {
            // Tid vandret: timer som kolonner, dage (+ fælles) som rækker.
            const COLW = 6;    // em pr. time
            const LANEH = 3.6; // em pr. bane
            const lineBg = `repeating-linear-gradient(to right, transparent, transparent calc(${COLW}em - 1px), #f3dde6 ${COLW}em)`;
            const track = (label: string, items: CalItem[], cls: string) => html`
                <div class="sf-cal2-dayhead ${cls}">${label}</div>
                <div class="sf-cal2-dayrow ${cls}" style="width:${span * COLW}em; height:${laneCount(items) * LANEH}em; background-image:${lineBg};">
                    ${items.map(it => html`
                        <div class="sf-cal2-event" style="left:${(it.start - axisStart) * COLW}em; width:calc(${(it.end - it.start) * COLW}em - 2px); top:${it.lane * LANEH}em; height:calc(${LANEH}em - 2px);">
                            ${this._cal_card(it.task, it.parts)}
                        </div>`)}
                </div>`;
            return html`
                <div class="sf-calendar-wrap">
                    <div class="sf-cal2 sf-cal2-h" style="grid-template-columns: auto ${span * COLW}em;">
                        <div class="sf-cal2-corner"></div>
                        <div class="sf-cal2-hhead" style="width:${span * COLW}em;">
                            ${hours.map(h => html`<div class="sf-cal2-hcell" style="width:${COLW}em;"><span class="sf-cal2-hlabel">${String(h).padStart(2, '0')}:00</span></div>`)}
                        </div>
                        ${shared.length ? track('Fælles', shared, 'sf-cal2-eventtrack') : ''}
                        ${layouts.map(({ day, items }) => track(day.day, items, ''))}
                    </div>
                </div>
            `;
        }
        // Tid lodret: hver dag som sin egen kalender, stablet under hinanden.
        // Hver dag beregner sin egen tidsakse, så en dag fylder det samme som når den vises alene.
        const ROWH = 3.4; // em pr. time
        const lineBg = `repeating-linear-gradient(to bottom, transparent, transparent calc(${ROWH}em - 1px), #f3dde6 ${ROWH}em)`;
        // Fælles-kolonnen krymper til at passe det længste event-navn.
        const evNames = this.program.flatMap(d => d.schedule.flatMap(s => s.tasks.filter(t => t.event === true).map(t => t.task_name)));
        const evMaxLen = evNames.length ? Math.max(...evNames.map(n => n.length)) : 0;
        const faellesW = `calc(${evMaxLen}ch + 1.1em)`;
        const blocks = layouts
            .map(({ day, items }) => ({ day, items, ev: this._dayEvents(day) }))
            .filter(b => b.items.length || b.ev.length);
        const dayBlock = (day: Program[number], items: CalItem[], ev: CalItem[]) => {
            const dcells = [...ev, ...items];
            const aS = dcells.length ? Math.floor(Math.min(...dcells.map(c => c.start))) : 7;
            const aE = dcells.length ? Math.ceil(Math.max(...dcells.map(c => c.end))) : 21;
            const dSpan = Math.max(1, aE - aS);
            const dHours: number[] = [];
            for (let h = aS; h < aE; h++) dHours.push(h);
            const col = (its: CalItem[], cls: string) => html`
                <div class="sf-cal2-daycol ${cls}" style="height:${dSpan * ROWH}em; background-image:${lineBg};">
                    ${its.map(it => html`
                        <div class="sf-cal2-event" style="top:${(it.start - aS) * ROWH}em; height:calc(${(it.end - it.start) * ROWH}em - 2px); left:calc(${it.leftPct}% + 1px); width:calc(${it.widthPct}% - 2px);">
                            ${this._cal_card(it.task, it.parts)}
                        </div>`)}
                </div>`;
            const cols = `auto ${ev.length ? faellesW + ' ' : ''}minmax(8em, 1fr)`;
            return html`
                <div class="sf-cal2 sf-cal2-v" style="grid-template-columns: ${cols};">
                    <div class="sf-cal2-corner"></div>
                    ${ev.length ? html`<div class="sf-cal2-dayhead sf-cal2-eventtrack">Fælles</div>` : ''}
                    <div class="sf-cal2-dayhead">${day.day}</div>
                    <div class="sf-cal2-timecol" style="height:${dSpan * ROWH}em;">
                        ${dHours.map(h => html`<div class="sf-cal2-hcell" style="height:${ROWH}em;"><span class="sf-cal2-hlabel">${String(h).padStart(2, '0')}:00</span></div>`)}
                    </div>
                    ${ev.length ? col(ev, 'sf-cal2-eventtrack') : ''}
                    ${col(items, '')}
                </div>`;
        };
        return html`
            ${isTemplate ? html`<p class="sf-template-note">Skabelon til whiteboard — udfyld de tomme felter med tusch. De to store felter (formiddag/eftermiddag) er til dagens aktiviteter og hvem der gør hvad. "Oprydning efter morgenmad" planlægges dagen før. Onsdag og lørdag: streg de felter ud, der ikke passer.</p>` : ''}
            <div class="sf-calendar-wrap sf-cal-stack">
                ${blocks.map(b => dayBlock(b.day, b.items, b.ev))}
            </div>
        `;
    }

    render() {
        // Unikke tjanser/aktiviteter (uden de fælles events), delt i to grupper og sorteret.
        // Første forekomst af hvert navn bevares, så info-kortet (render_card) følger med til linket.
        const uniqueByName = new Map<string, Tasks[number]>();
        for (const d of this.program)
            for (const s of d.schedule)
                for (const t of s.tasks)
                    if (t.event !== true && !uniqueByName.has(t.task_name)) uniqueByName.set(t.task_name, t);
        const byName = (a: Tasks[number], b: Tasks[number]) => a.task_name.localeCompare(b.task_name, 'da');
        const tjanser = [...uniqueByName.values()].filter(t => TJANS_NAMES.has(t.task_name)).sort(byName);
        const aktiviteter = [...uniqueByName.values()].filter(t => !TJANS_NAMES.has(t.task_name)).sort(byName);
        // Tabellen: én række pr. tjans med antal personer (dag-cellen spænder over dagens tjanser).
        const rendered_rows = this.program.flatMap(day => {
            const tasks = day.schedule.flatMap(s => s.tasks).filter(t => t.event !== true);
            return tasks.map((task, i) => this.render_row(
                day.day,
                tasks.length,
                i === 0,
                task.task_name,
                task.task_time ?? '',
                task.people ?? task.participants.length,
                task.render_card
            ));
        });
        // Aktivt info-kort (popup) ud fra hash'en, tegnet ét sted uden for indholds-kolonnerne,
        // så det ligger oven på kalender/tabel (der ellers danner deres egen stacking-context).
        const cardMatch = window.location.hash.match(/^#tjanser:(.+)$/);
        const activeTask = cardMatch
            ? this.program.flatMap(d => d.schedule.flatMap(s => s.tasks)).find(t => t.render_card?.[1] === cardMatch[1])
            : undefined;
        const activePopup = activeTask && activeTask.render_card ? html`
            <div class="sf_popup">
                <button class="close-btn" title="Luk" @click=${() => { window.location.hash = "#tjanser"; this._rerender(); }}>&times;</button>
                <a href="#tjanser" @click=${this._rerender}>${activeTask.task_name}</a>
                ${activeTask.render_card[0]()}
            </div>` : '';

        return html`
            ${activePopup}
            <div class="sf-content">
                <p>Her er oversigten over festivalens tjanser og aktiviteter. Du kan se, hvornår de forskellige tjanser og aktiviteter ligger i løbet af dagene, og hvor mange personer der skal bruges til hver.</p>
                <p>Tjanserne bliver fordelt dagligt ved flaghejsning kl. 9:00 (onsdag kl. 14:00). Deltager man ikke i flaghejsning, får man tildelt en tjans.</p>
                <p>Man får også tildelt en tjans på den dag, man ankommer, men vi vil tilstræbe en tjans sidst på dagen eller morgenen efter.</p>
                <p>Tjanser:</p>
                <ul class="sf-task-list">
                    ${tjanser.map(t => html`<li>${this._render_task_name(t.task_name, t.render_card)}</li>`)}
                </ul>
                <p>Aktiviteter:</p>
                <ul class="sf-task-list">
                    ${aktiviteter.map(t => html`<li>${this._render_task_name(t.task_name, t.render_card)}</li>`)}
                </ul>
            </div>
            <div class="sf-content-special">
                <p class="sf-view-toggle">
                    <button class="sf-suggest-btn ${this._view === 'kalender' ? 'sf-view-active' : ''}" @click=${() => this._view = 'kalender'}>Kalender</button>
                    <button class="sf-suggest-btn ${this._view === 'tabel' ? 'sf-view-active' : ''}" @click=${() => this._view = 'tabel'}>Tabel</button>
                    ${this._view === 'kalender' ? html`<button class="sf-suggest-btn" @click=${() => this._flip = !this._flip}>↻ Byt akse</button>` : ''}
                </p>
                ${this._view === 'kalender' ? html`
                <p class="sf-view-toggle">
                    <button class="sf-suggest-btn ${this._calDay === 'Alle' ? 'sf-view-active' : ''}" @click=${() => this._calDay = 'Alle'}>Alle dage</button>
                    ${this.program.map(d => html`<button class="sf-suggest-btn ${this._calDay === d.day ? 'sf-view-active' : ''}" @click=${() => this._calDay = d.day}>${d.day}</button>`)}
                    <button class="sf-suggest-btn ${this._calDay === 'Skabelon' ? 'sf-view-active' : ''}" @click=${() => this._calDay = 'Skabelon'}>Skabelon</button>
                </p>` : ''}
                <h3 class="sf-title">Ved Verdens Ende 2026</h3>
                ${this._view === 'kalender' ? this._calendar() : html`
                <table class="sf-program-table">
                    <tbody>
                        ${rendered_rows}
                    </tbody>
                </table>`}
            </div>
        `;
    }
}
