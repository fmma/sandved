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
                    activity: 'Frokost',
                    tasks: [{
                        task_name: 'Lave frokost',
                        task_time: '11:00',
                        participants: [
                            'Benjamin', 'Pernille'
                        ]
                    }, {
                        task_name: 'Oprydning',
                        task_time: '13:00',
                        participants: [
                            'Morten', 'Jesper', 'Christian'
                        ]
                    }]
                },
                {
                    activity: 'Festival Kickstart',
                    tasks: [{
                        task_name: 'Snitte Snobrød',
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
                            'Joan', 'Duus',
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
                    activity: 'Aftensmad',
                    tasks: [{
                        task_name: 'Lave aftensmad',
                        task_time: '16:00',
                        participants: [
                            'Michael', 'Rasmus', 'Anne S', 'Sif'
                        ]
                    }, {
                        task_name: 'Oprydning',
                        task_time: '19:00',
                        participants: [
                            'Nikoline', 'Nickolei', 'Aske',
                        ]
                    }]
                },
                {
                    activity: 'Bålhygge',
                    tasks: [{
                        task_name: 'Bålhygge',
                        task_time: '19:00',
                        participants: [
                            'Jesper', 'Nickolei',
                        ]
                    }]
                },
                {
                    activity: 'Børnefilm',
                    tasks: [{
                        task_name: 'Børnefilm',
                        task_time: '19:00',
                        participants: [
                            'Pernille', 'Nikoline'
                        ]
                    }]
                },
                {
                    activity: 'Musikquiz',
                    tasks: [{
                        task_name: 'Musikquiz',
                        task_time: '21:00',
                        participants: [
                            'Morten',
                        ]
                    }]
                },
                {
                    activity: 'Koncert',
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
                    activity: 'Lejroprydning',
                    tasks: [
                        {
                            task_name: 'Lejroprydning',
                            task_time: 'Før 10:00',
                            participants: ['Rasmus', 'Jannie']
                        }
                    ]
                },

                {
                    activity: 'Toiletter',
                    tasks: [
                        {
                            task_name: 'Toiletter',
                            task_time: 'Før 10:00',
                            participants: ['Morten B', 'Pernille']
                        }
                    ]
                },

                {
                    activity: 'Morgenmad',
                    tasks: [{
                        task_name: 'Lave morgenmad',
                        task_time: '07:00',
                        participants: [
                            'Benjamin', 'Pernille'
                        ]
                    }, {
                        task_name: 'Oprydning',
                        task_time: '09:30',
                        participants: [
                            'Morten', 'Jesper', 'Christian'
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
                    activity: 'Frokost',
                    tasks: [{
                        task_name: 'Lave frokost',
                        task_time: '11:00',
                        participants: [
                            'Nickolei', 'Morten'
                        ]
                    }, {
                        task_name: 'Oprydning',
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
                            'Vincent', 'Michael'
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
                            'Janne', 'Rasmus'
                        ]
                    }
                ]
                },

                {
                    activity: 'Aftensmad',
                    tasks: [{
                        task_name: 'Lave aftensmad',
                        task_time: '16:00',
                        participants: [
                            'Michael', 'Maja', 'Frederik', 'Jesper'
                        ]
                    }, {
                        task_name: 'Oprydning',
                        task_time: '19:00',
                        participants: [
                            'Janne', 'James', 'Sigurd',
                        ]
                    }]
                },
                {
                    activity: 'Bålhygge',
                    tasks: [{
                        task_name: 'Bålhygge',
                        task_time: '19:00',
                        participants: [
                            'Janne', 'Nickolei',
                        ]
                    }]
                },
                {
                    activity: 'Børnefilm',
                    tasks: [{
                        task_name: 'Børnefilm',
                        task_time: '19:00',
                        participants: [
                            'Maja', 'Morten'
                        ]
                    }]
                },
                {
                    activity: 'Koncert',
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
                    activity: 'Lejroprydning',
                    tasks: [
                        {
                            task_name: 'Lejroprydning',
                            task_time: 'Før 10:00',
                            participants: ['James', 'Vincent']
                        }
                    ]
                },

                {
                    activity: 'Toiletter',
                    tasks: [
                        {
                            task_name: 'Toiletter',
                            task_time: 'Før 10:00',
                            participants: ['Nikoline', 'Trine']
                        }
                    ]
                },

                {
                    activity: 'Morgenmad',
                    tasks: [{
                        task_name: 'Lave morgenmad',
                        task_time: '07:00',
                        participants: [
                            'Jannie', 'Janne'
                        ]
                    }, {
                        task_name: 'Oprydning',
                        task_time: '09:30',
                        participants: [
                            'Rasmus', 'Maja',
                        ]
                    }
                    ]
                },
                {
                    activity: 'OL (I)',
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
                            'Morten B', 'Benjamin'
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
                    activity: 'Frokost',
                    tasks: [{
                        task_name: 'Lave frokost',
                        task_time: '11:00',
                        participants: [
                            'Morten B', 'Jesper'
                        ]
                    }, {
                        task_name: 'Oprydning',
                        task_time: '13:00',
                        participants: [
                            'Sif', 'Nickolei', 'Frigg'
                        ]
                    }]
                },
                {
                    activity: 'OL (II)',
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
                        task_name: 'Pap-mache-dyr',
                        task_time: '13:00',
                        participants: [
                            '??'
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
                    activity: 'Aftensmad',
                    tasks: [{
                        task_name: 'Lave aftensmad',
                        task_time: '16:00',
                        participants: [
                            'Michael', 'Mathias', 'Frederik', 'Benjamin', 'Kasper M', 'Pernille'
                        ]
                    }, {
                        task_name: 'Oprydning',
                        task_time: '19:00',
                        participants: [
                            'Tina', 'Sif', 'Gro',
                        ]
                    }]
                },
                {
                    activity: 'Bålhygge',
                    tasks: [{
                        task_name: 'Bålhygge',
                        task_time: '19:00',
                        participants: [
                            'Rasmus', 'Mathias',
                        ]
                    }]
                },
                {
                    activity: 'Børnefilm',
                    tasks: [{
                        task_name: 'Børnefilm',
                        task_time: '19:00',
                        participants: [
                            'Jesper', 'Kasper M'
                        ]
                    }]
                },
                {
                    activity: 'Koncert',
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
                    activity: 'Morgenmad',
                    tasks: [{
                        task_name: 'Lave morgenmad',
                        task_time: '07:00',
                        participants: [
                            'Vincent', 'Frederik'
                        ]
                    }, {
                        task_name: 'Oprydning',
                        task_time: '09:30',
                        participants: [
                            'Trine', 'Jannie',
                        ]
                    }
                    ]
                },
                {
                    activity: 'Rejsefrokost',
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

    render_row(day: string, activity: string, schedule_index: number, task_name: string, task_time: string, task_index: number, participant: string, participant_index: number, schedule: Schedule, tasks: Tasks, participants: string[]) {
        const day_td = schedule_index === 0 && task_index === 0 && participant_index === 0
            ? html`<td class="sf-program-day" rowspan="${schedule.flatMap(s => s.tasks.flatMap(t => t.participants.flatMap(_ => 1))).reduce((a, b) => a + b)}">
                <span class="sf-program-day">${day}</span>
            </td>`
            : '';
        const activity_td = task_index == 0 && participant_index === 0
            ? html`<td rowspan="${tasks.flatMap(t => t.participants.flatMap(_ => 1)).reduce((a, b) => a + b)}">${activity}</td>`
            : '';
        const task_name_td = participant_index === 0
            ? html`
                <td rowspan="${participants.length}">${task_time}</td>
                <td rowspan="${participants.length}">${task_name}</td>
            `
            : '';
        const participant_td = html`<td>${participant}</td>`;

        return html`<tr class="sf-program-row">
            ${day_td}
            ${activity_td}
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
            <div class="sf-content-special">
                <input @input=${(e: Event) => this._query = (e.target as HTMLInputElement).value} type="text" placeholder="Søg i tjanser" class="sf-search-input" />
                <table class="sf-program-table">
                    <thead>
                        <tr>
                            <th colspan="5" class="sf-title">Ved Verdens Ende 2025</th>
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