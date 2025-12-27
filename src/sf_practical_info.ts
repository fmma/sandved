import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement('sf-practical-info')
export class sf_practical_info extends LitElement {
    renderRoot = this;

    render() {
        return html`
            <div class="sf-content">
                <h3>Praktisk Information</h3>
                
                <p><em>Festivalen afholdes 22. - 25. juli 2026 på Møllevej 44 i Sandved.</em></p>
                <h4 id="praktisk:faq"> Ofte stillede spørgsmål </h4>                
                <nav class="sf-subnav">
                    <ul>
                        <li><a href="#praktisk:q1">Hvornår skal jeg komme?</a></li>
                        <li><a href="#praktisk:q2">Hvor kan jeg parkere?</a></li>
                        <li><a href="#praktisk:offentlig"> Kan man komme dertil med offentlig transport? </a></li>
                        <li><a href="#praktisk:q3">Hvordan ser festivalpladsen ud?</a></li>
                        <li><a href="#praktisk:q4">Hvordan bidrager jeg til festivalen?</a></li>
                        <li><a href="#praktisk:q5">Hvad skal jeg lave?</a></li>
                        <li><a href="#praktisk:q6">Hvad har planlægningsgruppen sørget for?</a></li>
                        <li><a href="#praktisk:q7">Hvad skal jeg selv have med?</a></li>
                        <li><a href="#praktisk:q8">Hvilke faciliteter er der på festivalpladsen?</a></li>
                        <li><a href="#praktisk:q9">Hvad skal jeg spise?</a></li>
                        <li><a href="#praktisk:q10">Hvad skal jeg drikke?</a></li>
                        <li><a href="#praktisk:q11">Kan jeg lade min telefon op?</a></li>
                    </ul>
                </nav>

                <h4 id="praktisk:q1"> Hvornår skal jeg komme? </h4>
                <p>
                Festivalsstart annonceres snart. Ankomsttidspunkt vil blive oplyst i god tid inden festivalen.
                </p>
                <a href="#praktisk:faq">Tilbage til toppen</a>
                <h4 id="praktisk:q2"> Hvor kan jeg parkere? </h4>
                <p>
                Da der er begrænsede parkeringsmuligheder på grunden, er det nødvendigt, at man læsser sine ting af, og efterfølgende parkerer sin bil på en plads i nærheden.
                </p>
                <p>
                Bilerne skal parkeres på
                </p>
                <p>
                <em>
                Møllevej 52
                </em>
                <p>
Der vil være mulighed for at blive kørt tilbage til festivalen, når man skal hen med sin bil.
                </p>
                <img src="https://snesl.dk/media/0f09298878a6bad564503e3ddbc87e22.jpg" alt="Festival Logo" class="sf-logo-inline" />

                <a href="#praktisk:faq">Tilbage til toppen</a>
                <h4 id="praktisk:offentlig"> Kan man komme dertil med offentlig transport? </h4>
                <p>
    Offentlig transport er lidt svært til Verdens Ende.
    </p>
    <p>
    Alle dage vil det være muligt at blive kørt til/fra busstationen i Spjellerup frem til klokken 11. I skal bare give os besked dagen i forvejen, så vi kan koordinere, hvis der er flere der skal hentes eller afsted.
    </p><p>
    Efter kl 11 kan vi desværre ikke hente eller bringe længere. Men det er muligt at gå eller tage en taxa.
</p>

                <a href="#praktisk:faq">Tilbage til toppen</a>
                <h4 id="praktisk:q3"> Hvordan ser festivalpladsen ud? </h4>
                <p>
                Man kan se kortet over festivalpladsen her: <a href="#kort">kort</a>.
                </p>
                <a href="#praktisk:faq">Tilbage til toppen</a>
                <h4 id="praktisk:q4"> Hvordan bidrager jeg til festivalen? </h4>
                <p>
                På festivalen løfter vi i flok og alle deltagere er med til at sørge for, at det bliver helt suverænt. Vi deltager alle i de fælles tjanser, som madlavning, oprydning, rengøring, aktiviteter og underholdning.
Der vil blive lagt en <a href="#tjanser">plan</a> op, hvor man kan se sine tjanser. Og bare rolig, der bliver god tid til socialt samvær og afslapning!
                </p>
                <a href="#praktisk:faq">Tilbage til toppen</a>
                <h4 id="praktisk:q5"> Hvad skal jeg lave? </h4>
                <p>
Hver dag vil der være flere planlagte aktiviteter. Man kan blive bedt om at være tovholder for en aktivitet. Der kommer en <a href="#program">plan</a> over aktiviteter og optrædener. Der vil være rig mulighed for at optræde, hvis man har noget man har lyst til at vise frem, så hold jer endelig ikke tilbage! 
                </p>
                <a href="#praktisk:faq">Tilbage til toppen</a>
                <h4 id="praktisk:q6"> Hvad har planlægningsgruppen sørget for? </h4>
                <p>
                Planlægningsgruppen sørger for indkøb af mad, drikkevarer til baren (stregsystem til indkøbspris), borde, stole, service, toiletfaciliteter, pusleplads og alt hvad der skal bruges til de forskellige aktiviteter.
                </p>
                <a href="#praktisk:faq">Tilbage til toppen</a>
                <h4 id="praktisk:q7"> Hvad skal jeg selv have med? </h4>
                <p>
                I skal medbringe:
                <ul>
<li>Egne telte. Såfremt man ønsker at komme i campingvogn, skal man allerede nu kontakte planlægningsgruppen, da der er begrænset mulighed for parkering af campingvogne.</li>
<li>Alt hvad I skal bruge til at sove.</li>
<li>Alt hvad I normalt ville have med på campingferie.</li>
<li>Evt. egne instrumenter, hvis I ønsker at spille.</li>
<li>Særlige snacks, hvis I har nogle I ikke kan undvære.</li>
</ul>
</p>
<p> Derudover kan vi anbefale, at man, hvis man har, medbringer:
<ul>
<li>Sportsmandsudklædning / træningstøj.</li>
<li>Vandpistol.</li>
<li>Lommelygte.</li>
<li>Badetøj.</li>
<li>Dolk.</li>
</ul>
</p>
<a href="#praktisk:faq">Tilbage til toppen</a>
<h4 id="praktisk:q8">Hvilke faciliteter er der på festivalpladsen?</h4>
<p>
På festivalpladsen vil der være teltplads, toiletfaciliteter, køkken hvor vi laver maden, mulighed for indendørs hygge i dårligt vejr og mulighed for udendørs hygge. Der bliver scene med tilhørende instrumenter.
</p>
<p>
Der vil være fine toiletfaciliteter.
</p>
<p>
Der er begrænsede muligheder for badning, men der vil være mulighed for et kort brusebad eller alternativt et dyp i poolen.
</p>
<a href="#praktisk:faq">Tilbage til toppen</a>
<h4 id="praktisk:q9">Hvad skal jeg spise?</h4>
<p>
Der vil alle festivalens dage være morgenmad, frokost og aftensmad til alle. Der vil være vegetariske alternativer.
</p>
<p>
Derudover vil der til enhver tid være mulighed for mellemmåltider.
</p>
<p>
Der vil også være te, kaffe, mælk og saftevand.
</p>
<a href="#praktisk:faq">Tilbage til toppen</a>
<h4 id="praktisk:q10">Hvad skal jeg drikke?</h4>
<p>
I baren kan man købe øl, sodavand, cider og vin med stregsystem til indkøbspris. 
Barmenuen kommer op <a href="#drikkevaremenu">her</a>, så snart den er på plads.
</p>
<a href="#praktisk:faq">Tilbage til toppen</a>
<h4 id="praktisk:q11">Kan jeg lade min telefon op?</h4>
<p>
Ja, der vil være mulighed for at lade telefoner op i TV-stuen.
</p>
<a href="#praktisk:faq">Tilbage til toppen</a>
            </div>
        `;
    }
}