import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement('sf-program')
export class sf_program extends LitElement {
  renderRoot = this;

  store_scene = "Scene";

  program = [
    {
      day: 'Torsdag', schedule: [
        { time: '08:00 - 09:30', activity: 'Morgenmad' },
        { time: '09:30 - 09:45', activity: 'Flaghejsning 🇩🇰' },
        { time: '10:00 - 11:30', activity: 'Mal Din Kop', type: 'activity' },
        { time: '12:00 - 13:00', activity: 'Frokost' },
        { time: '13:30 - 15:30', activity: 'Festival Kickstart', type: 'activity' },
        { time: '18:00 - 19:00', activity: 'Aftensmad' },
        { time: '19:00 - 20:30', activity: 'Min Nabo Totoro', loc: 'TV-stuen' },
        { time: '19:00 - 20:30', activity: 'Bålhygge 🔥' },
        { time: '21:00 - 22:00', activity: 'Musikquiz', loc: this.store_scene },
        { time: '22:00 - 23:00', activity: 'Jam Session', loc: this.store_scene },
      ]
    },

    {
      day: 'Fredag', schedule: [
        { time: '08:00 - 09:30', activity: 'Morgenmad' },
        { time: '09:30 - 09:45', activity: 'Flaghejsning 🇩🇰' },
        { time: '10:00 - 11:30', activity: 'Musisk Formiddag', type: 'activity' },
        { time: '12:00 - 13:00', activity: 'Frokost' },
        { time: '13:30 - 15:30', activity: 'Våd Eftermiddag', type: 'activity' },
        { time: '18:00 - 19:00', activity: 'Aftensmad' },
        { time: '19:00 - 20:30', activity: 'Coco', loc: 'TV-stuen' },
        { time: '19:00 - 20:30', activity: 'Bålhygge 🔥'},
        { time: '21:00 - 23:00', activity: 'Michaels Band', loc: this.store_scene },
      ]
    },
    {
      day: 'Lørdag', schedule: [
        { time: '08:00 - 09:30', activity: 'Morgenmad' },
        { time: '09:30 - 09:45', activity: 'Flaghejsning 🇩🇰' },
        { time: '10:00 - 11:30', activity: 'OL Formiddag', type: 'activity' },
        { time: '12:00 - 13:00', activity: 'Frokost' },
        { time: '13:30 - 15:30', activity: 'OL Eftermiddag', type: 'activity' },
        { time: '18:00 - 19:00', activity: 'Aftensmad' },
        { time: '19:00 - 20:30', activity: 'Super Mario Bros. Filmen', loc: 'TV-stuen' },
        { time: '19:00 - 20:30', activity: 'Bålhygge 🔥' },
        { time: '21:00 - 22:00', activity: 'Begynderband', loc: this.store_scene },
        { time: '22:00 - 23:00', activity: 'Festivalsband', loc: this.store_scene },
        { time: '03:00 - 04:00', activity: 'Digtoplæsning', loc: '?' },
      ]
    },
    {
      day: 'Søndag', schedule: [
        { time: 'Hele dagen', activity: 'Oprydning', type: 'activity' },
        { time: '08:00 - 09:30', activity: 'Morgenmad' },
        { time: '09:30 - 09:45', activity: 'Flaghejsning 🇩🇰' },
        { time: '12:00 - 13:00', activity: 'Rejsefrokost' },
        { time: 'Eftermiddag', activity: 'Flag ned og farvel 🇩🇰👋' },
      ]
    },
  ]
  render() {
    const render_prog_day = (day: typeof this.program[number]) => {
      const render_sched_tds = (sched: typeof day.schedule[number]) => {
        let activity_html: unknown = sched.activity;
        if (sched.loc) {
          activity_html = html`
              <span class="sf-scene">[${sched.loc}]</span> ${sched.activity}
          `;
        }
        if( sched.type === 'activity') {
          activity_html = html`
              <span class="sf-activity">${sched.activity}</span>
          `;
        }
        return html`
            <td class="sf-program-time">${sched.time}</td>
            <td>${activity_html}</td>
        `;
      }
      return html`
        <tr>
            <td class="sf-program-day" rowspan="${day.schedule.length}"><span class="sf-program-day">${day.day}</span></td>
              ${render_sched_tds(day.schedule[0])}
        </tr>
        ${day.schedule.slice(1).map(a => html`
            <tr>
                ${render_sched_tds(a)}
            </tr>
        `)}
    `;
    };
    return html`

            <div class="sf-content">
                <p>Her kan du se festivalens program.</p>
                <p>Programmet er under udvikling, så der kan komme ændringer.</p>
            </div>
            <div class="sf-content-special">
                <table class="sf-program-table">
                    <thead>
                        <tr>
                            <th colspan="3" class="sf-title">Ved Verdens Ende 2025</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${this.program.map((p) => render_prog_day(p))}
                    </tbody>
                </table>
            </div>
        `;
  }
}