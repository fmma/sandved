import { html, LitElement } from "lit";
import { customElement, state } from "lit/decorators.js";

type Tasks = {
    task_name: string;
    task_time: string;
    participants: string[];
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
export class sf_about extends LitElement {
    renderRoot = this;

    @state()
    private _query: string = '';

    program: Program = [
        {
            day: 'Torsdag',
            schedule: [
                {
                    activity: '',
                    tasks: [{
                        task_name: 'Lave frokost',
                        task_time: '11:00',
                        participants: [
                            'Benjamin', 'Pernille'
                        ]
                    }, {
                        task_name: 'Oprydning efter frokost',
                        task_time: '13:00',
                        participants: [
                            'Morten LN', 'Jesper', 'Christian'
                        ]
                    }]
                },
                {
                    activity: 'Festival Kickstart',
                    tasks: [{
                        task_name: 'Snitte pinde til snobrød',
                        task_time: '13:00',
                        participants: [
                            'Vincent', 'Nickolei',
                        ]
                    },
                    {
                        task_name: 'Skrive festivalssangen',
                        task_time: '13:00',
                        participants: [
                            'Anne S', 'Trine', 'Frederik'
                        ]
                    }, {
                        task_name: 'Lave bannere',
                        task_time: '13:00',
                        participants: [
                            'Joan', 'Jannie',
                        ]
                    }, {
                        task_name: 'Snobrødsdej',
                        task_time: '13:00',
                        participants: [
                            'Morten B',
                        ]
                    }, {
                        task_name: 'Skiltelavning',
                        task_time: '13:00',
                        participants: [
                            'Sif', 'Rasmus', 'Benjamin'
                        ]
                    }]
                },

                {
                    activity: '',
                    tasks: [{
                        task_name: 'Lave aftensmad',
                        task_time: '16:00',
                        participants: [
                            'Michael', 'Rasmus', 'Anne S', 'Morten B'
                        ]
                    }, {
                        task_name: 'Oprydning efter aftensmad',
                        task_time: '19:00',
                        participants: [
                            'Nikoline', 'Nickolei', 'Aske',
                        ]
                    }]
                },
                {
                    activity: '',
                    tasks: [{
                        task_name: 'Bålhygge',
                        task_time: '19:00',
                        participants: [
                            'Jesper', 'Michael',
                        ]
                    }]
                },
                {
                    activity: '',
                    tasks: [{
                        task_name: 'Børnefilm',
                        task_time: '19:00',
                        participants: [
                            'Pernille', 'Morten LN'
                        ]
                    }]
                },
                {
                    activity: '',
                    tasks: [{
                        task_name: 'Musikquiz',
                        task_time: '21:00',
                        participants: [
                            'Morten B',
                        ]
                    }]
                },
                {
                    activity: '',
                    tasks: [{
                        task_name: 'Koncert',
                        task_time: '22:00',
                        participants: [
                            'Nikoline'
                        ]
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
                            task_name: 'Lejroprydning',
                            task_time: 'Før 10:00',
                            participants: ['Rasmus', 'Jannie']
                        }
                    ]
                },

                {
                    activity: '',
                    tasks: [
                        {
                            task_name: 'Toiletter',
                            task_time: 'Før 10:00',
                            participants: ['Morten B', 'Pernille']
                        }
                    ]
                },

                {
                    activity: '',
                    tasks: [{
                        task_name: 'Lave morgenmad',
                        task_time: '07:00',
                        participants: [
                            'Anne S', 'Trine'
                        ]
                    }, {
                        task_name: 'Oprydning efter morgenmad',
                        task_time: '9:30',
                        participants: [
                            'Benjamin', 'Vincent'
                        ]
                    }
                    ]
                },
                {
                    activity: 'Musisk Formiddag',
                    tasks: [{
                        task_name: 'Børnekor',
                        task_time: '9:30',
                        participants: [
                            'Nikoline'
                        ]
                    },{
                        task_name: 'Begynderguitar',
                        task_time: '9:30',
                        participants: [
                            'Sif'
                        ]
                    },{
                        task_name: 'Begynderband',
                        task_time: '9:30',
                        participants: [
                            'Frederik'
                        ]
                    }, {
                        task_name: 'Stomp',
                        task_time: '9:30',
                        participants: [
                            '??'
                        ]
                    }
                    ]
                },
                {
                    activity: '',
                    tasks: [{
                        task_name: 'Lave frokost',
                        task_time: '11:00',
                        participants: [
                            'Nickolei', 'Morten LN'
                        ]
                    }, {
                        task_name: 'Oprydning efter frokost',
                        task_time: '13:00',
                        participants: [
                            'Joan', 'Sif', 'Lara'
                        ]
                    }]
                },
                {
                    activity: 'Våd Eftermiddag',
                    tasks: [{
                        task_name: 'Vandpistoler og balloner',
                        task_time: '13:00',
                        participants: [
                            'Vincent', 'Janne'
                        ]
                    },{
                        task_name: 'Glidebande',
                        task_time: '13:00',
                        participants: [
                            'James', 'Benjamin'
                        ]
                    },{
                        task_name: 'Sæbebobler',
                        task_time: '13:00',
                        participants: [
                            'Jannie', 'Rasmus'
                        ]
                    }
                ]
                },

                {
                    activity: '',
                    tasks: [{
                        task_name: 'Lave aftensmad',
                        task_time: '16:00',
                        participants: [
                            'Michael', 'Maja', 'Frederik', 'Jesper'
                        ]
                    }, {
                        task_name: 'Oprydning efter aftensmad',
                        task_time: '19:00',
                        participants: [
                            'Janne', 'James', 'Sigurd',
                        ]
                    }]
                },
                {
                    activity: '',
                    tasks: [{
                        task_name: 'Bålhygge',
                        task_time: '19:00',
                        participants: [
                            'Joan', 'Nickolei',
                        ]
                    }]
                },
                {
                    activity: '',
                    tasks: [{
                        task_name: 'Børnefilm',
                        task_time: '19:00',
                        participants: [
                            'Maja', 'Morten LN'
                        ]
                    }]
                },
                {
                    activity: '',
                    tasks: [{
                        task_name: 'Koncert',
                        task_time: '21:00',
                        participants: [
                            'Michael'
                        ]
                    }]
                }
            ]
        },

        {
            day: 'Lørdag',
            schedule: [
                {
                    activity: '',
                    tasks: [
                        {
                            task_name: 'Lejroprydning',
                            task_time: 'Før 10:00',
                            participants: ['James', 'Vincent']
                        }
                    ]
                },

                {
                    activity: '',
                    tasks: [
                        {
                            task_name: 'Toiletter',
                            task_time: 'Før 10:00',
                            participants: ['Nikoline', 'Trine']
                        }
                    ]
                },

                {
                    activity: '',
                    tasks: [{
                        task_name: 'Lave morgenmad',
                        task_time: '07:00',
                        participants: [
                            'Jannie', 'Janne'
                        ]
                    }, {
                        task_name: 'Oprydning efter morgenmad',
                        task_time: '9:30',
                        participants: [
                            'Rasmus', 'Maja',
                        ]
                    }
                    ]
                },
                {
                    activity: 'OL formiddag',
                    tasks: [{
                        task_name: 'Tovtrækning',
                        task_time: '9:30',
                        participants: [
                            'Nikoline', 'Sif'
                        ]
                    },{
                        task_name: 'Human-bowling glidebane',
                        task_time: '9:30',
                        participants: [
                            'Jannie', 'Benjamin'
                        ]
                    },{
                        task_name: 'Kongespil',
                        task_time: '9:30',
                        participants: [
                            'James', 'Tina'
                        ]
                    }
                    ]
                },
                {
                    activity: '',
                    tasks: [{
                        task_name: 'Lave frokost',
                        task_time: '11:00',
                        participants: [
                            'Morten B', 'Jesper'
                        ]
                    }, {
                        task_name: 'Oprydning efter frokost',
                        task_time: '13:00',
                        participants: [
                            'Sif', 'Nickolei', 'Frigg'
                        ]
                    }]
                },
                {
                    activity: 'OL eftermiddag',
                    tasks: [{
                        task_name: 'Synkronsvømning',
                        task_time: '13:00',
                        participants: [
                            'Janne', 'Pernille'
                        ]
                    },{
                        task_name: 'Petang',
                        task_time: '13:00',
                        participants: [
                            'Tina', 'Maja'
                        ]
                    },{
                        task_name: 'Band for øvede',
                        task_time: '13:00',
                        participants: [
                            'Frederik'
                        ]
                    }
                ]
                },

                {
                    activity: '',
                    tasks: [{
                        task_name: 'Lave aftensmad',
                        task_time: '16:00',
                        participants: [
                            'Michael', 'Mathias', 'Benjamin', 'Kasper M', 'Pernille'
                        ]
                    }, {
                        task_name: 'Oprydning efter aftensmad',
                        task_time: '19:00',
                        participants: [
                            'Tina', 'Sif', 'Gro',
                        ]
                    }]
                },
                {
                    activity: '',
                    tasks: [{
                        task_name: 'Bålhygge',
                        task_time: '19:00',
                        participants: [
                            'Rasmus', 'Mathias',
                        ]
                    }]
                },
                {
                    activity: '',
                    tasks: [{
                        task_name: 'Børnefilm',
                        task_time: '19:00',
                        participants: [
                            'Jesper', 'Kasper M'
                        ]
                    }]
                },
                {
                    activity: '',
                    tasks: [{
                        task_name: 'Begynderband',
                        task_time: '21:00',
                        participants: [
                            'Frederik'
                        ]
                    }, {
                        task_name: 'Festivalsband',
                        task_time: '22:00',
                        participants: [
                            'Frederik'
                        ]
                    }]
                }
            ]
        },

        {
            day: 'Søndag',
            schedule: [
                {
                    activity: '',
                    tasks: [{
                        task_name: 'Lave morgenmad',
                        task_time: '07:00',
                        participants: [
                            'Vincent', 'Frederik'
                        ]
                    }, {
                        task_name: 'Oprydning efter morgenmad',
                        task_time: '9:30',
                        participants: [
                            'Trine', 'Jannie',
                        ]
                    }
                    ]
                },
                {
                    activity: '',
                    tasks: [{
                        task_name: 'Lave frokost',
                        task_time: '11:00',
                        participants: [
                            'Joan', 'Nikoline'
                        ]
                    }]
                }
            ]
        }
    ]

    private _participants() {
        return [...new Set(this.program.flatMap(x => x.schedule.flatMap(y => y.tasks.flatMap(z => z.participants))))];
    }

    render_row(day: string, activity: string, schedule_index: number, task_name: string, task_time: string, task_index: number, participant: string, participant_index: number, schedule: Schedule, tasks: Tasks, participants: string[]) {
        const day_td = schedule_index === 0 && task_index === 0 && participant_index === 0
            ? html`<td class="sf-program-day .sf-shrink-td" rowspan="${schedule.flatMap(s => s.tasks.flatMap(t => t.participants.flatMap(_ => 1))).reduce((a, b) => a + b)}">
                <span class="sf-program-day">${day}</span>
            </td>`
            : '';
        // const activity_td = task_index == 0 && participant_index === 0
        //     ? html`<td class="sf-activity-td" rowspan="${tasks.flatMap(t => t.participants.flatMap(_ => 1)).reduce((a, b) => a + b)}">${activity}</td>`
        //     : '';
        const task_name_td = participant_index === 0
            ? html`
                <td class="sf-task-td sf-shrink-td" rowspan="${participants.length}">${task_time.split(' ').map((l, i) => i > 0 ? html`<br>${l}` : html`${l}` )}</td>
                <td class="sf-task-td" rowspan="${participants.length}">${task_name}</td>
            `
            : '';
        const participant_td = html`<td class="sf-shrink-td">${participant}</td>`;

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
                                    task.participants
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
                <input type="search" list="browsers" name="search-input-id" id="search-input-id" class="search-input" @input=${(e: Event) => this._query = (e.target as HTMLInputElement).value} type="text" placeholder="Søg i tjanser" class="sf-search-input" />


<datalist id="browsers">
${this._participants().map(p => html`<option value="${p}"></option>`)}
</datalist>
                <table class="sf-program-table">
                    <thead>
                        <tr>
                            <th colspan="4" class="sf-title">Ved Verdens Ende 2025</th>
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