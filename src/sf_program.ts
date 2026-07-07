import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

type ProgItem = { time: string; activity: string; type?: 'activity'; loc?: string };
type ProgDay = { day: string; date: string; schedule: ProgItem[] };

@customElement('sf-program')
export class sf_program extends LitElement {
  renderRoot = this;

  program: ProgDay[] = [
    {
      day: 'Onsdag', date: '22. juli', schedule: [
        { time: 'Formiddag', activity: 'Ankomst og teltopsætning' },
        { time: '12:00 - 13:00', activity: 'Frokost' },
        { time: '14:00 - 16:00', activity: 'Festival kickstart: flag, skilte, festivalsang og slangeworkshop', type: 'activity' },
        { time: '18:00 - 19:00', activity: 'Aftensmad' },
        { time: '19:00 - 21:00', activity: 'Chichiro og heksene', loc: 'Biografen' },
        { time: '19:00 - 22:00', activity: 'Bålhygge 🔥' },
        { time: '20:00', activity: 'Musikquiz', loc: 'Scene' },
        { time: '21:00', activity: 'Sang i Frihed – debut', loc: 'Scene' },
        { time: '21:30', activity: 'Jam session (fællessang)', loc: 'Scene' },
      ]
    },
    {
      day: 'Torsdag', date: '23. juli', schedule: [
        { time: '08:00 - 09:15', activity: 'Morgenmad' },
        { time: '09:00 - 09:30', activity: 'Flaghejsning 🇩🇰' },
        { time: '10:00 - 12:00', activity: 'Musisk formiddag: kor, begynderband, guitar og dans', type: 'activity' },
        { time: '12:00 - 13:00', activity: 'Frokost' },
        { time: '13:30 - 15:30', activity: 'Våd eftermiddag: vandpistoler, glidebane og sæbebobler', type: 'activity' },
        { time: '17:30', activity: 'Festivalskoret', loc: 'Scene' },
        { time: '17:45', activity: 'Begynderband', loc: 'Scene' },
        { time: '18:00 - 19:00', activity: 'Aftensmad' },
        { time: '19:00 - 21:00', activity: 'Super Mario Galaxy Filmen', loc: 'Biografen' },
        { time: '19:00 - 22:00', activity: 'Bålhygge 🔥' },
        { time: '19:30', activity: 'Nikoline og Frederik', loc: 'Scene' },
        { time: '20:00', activity: 'Pede Spillemand', loc: 'Scene' },
        { time: '21:30', activity: 'Talentshow', loc: 'Scene' },
        { time: '23:00', activity: 'Digtoplæsning', loc: 'Scene' },
      ]
    },
    {
      day: 'Fredag', date: '24. juli', schedule: [
        { time: '08:00 - 09:15', activity: 'Morgenmad' },
        { time: '09:00 - 09:30', activity: 'Flaghejsning 🇩🇰' },
        { time: '10:00 - 12:00', activity: 'OL formiddag: høvdingebold og petanque', type: 'activity' },
        { time: '12:00 - 13:00', activity: 'Frokost' },
        { time: '13:30 - 15:30', activity: 'OL eftermiddag: tovtrækning, dåsekast, stafet og synkronsvømning', type: 'activity' },
        { time: '18:00 - 19:00', activity: 'Aftensmad' },
        { time: '19:00 - 21:00', activity: 'Pingvinerne fra Madagaskar', loc: 'Biografen' },
        { time: '19:00 - 22:00', activity: 'Bålhygge 🔥' },
        { time: '20:00', activity: 'Guitarensemblet', loc: 'Scene' },
        { time: '20:15', activity: 'Husorkestret', loc: 'Scene' },
        { time: '21:00', activity: 'Arm the Homeless', loc: 'Scene' },
        { time: '22:30', activity: 'Jam session (fællessang)', loc: 'Scene' },
        { time: '23:30', activity: 'Tess og Monopolet', loc: 'Scene' },
      ]
    },
    {
      day: 'Lørdag', date: '25. juli', schedule: [
        { time: '08:00 - 09:15', activity: 'Morgenmad' },
        { time: '09:00 - 09:30', activity: 'Flaghejsning 🇩🇰' },
        { time: '10:00 - 12:00', activity: 'Oprydning og børneaktiviteter', type: 'activity' },
        { time: '12:00 - 13:00', activity: 'Rejsefrokost' },
        { time: 'Eftermiddag', activity: 'Flag ned og farvel 🇩🇰👋' },
      ]
    },
  ]

  render() {
    const render_prog_day = (day: ProgDay) => {
      const render_sched_tds = (sched: ProgItem) => {
        let activity_html: unknown = sched.activity;
        if (sched.loc) {
          activity_html = html`<span class="sf-scene">[${sched.loc}]</span> ${sched.activity}`;
        }
        if (sched.type === 'activity') {
          activity_html = html`<span class="sf-activity">${sched.activity}</span>`;
        }
        return html`
          <td class="sf-program-time">${sched.time}</td>
          <td>${activity_html}</td>
        `;
      };
      return html`
        <tr>
          <td class="sf-program-day" rowspan="${day.schedule.length}">
            <span class="sf-program-day">${day.day}</span><br><small>${day.date}</small>
          </td>
          ${render_sched_tds(day.schedule[0])}
        </tr>
        ${day.schedule.slice(1).map(a => html`<tr>${render_sched_tds(a)}</tr>`)}
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
              <th colspan="3" class="sf-title">Ved Verdens Ende 2026</th>
            </tr>
          </thead>
          <tbody>
            ${this.program.map(render_prog_day)}
          </tbody>
        </table>
      </div>
    `;
  }
}
