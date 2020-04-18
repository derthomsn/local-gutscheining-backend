<template>
    <div class="home">
        <section>

            <div class="container">

                <div class="row">
                    <div class="col">
                        <h1>Hilf deinen Jenaer Locals durch die Corona-Zeit.<br />
                            Liebevoll. Langfristig. Einfach. Online.
                        </h1>
                        <p>Beschenk dich oder deine Freunde mit einem Gutschein und hilf so deiner Lieblingskneipe, deinem Lieblingsladen, deinem Lieblingsverein oder deinem Lieblings-Event!</p>

                        <md-button class="md-raised md-accent" to="/stores">Gutschein kaufen und helfen</md-button>
                        <br />
                        <a href="mailto:localgutscheining@wunschloesung.com?subject=Mitmachen">
                            <md-button class="md-raised">Gutschein für deinen Laden<br />einrichten</md-button>
                        </a>

                    </div>

                    <div class="col">
                        <img src="positiv_oben_2.jpg" alt="Image"/>
                        <!--<img src="faust.jpg" alt="Image"/>-->

                        <div class="centered">
                            <p>
                                Bald wieder zusammen shoppen, Essen gehen, Schönes erleben. Freu dich drauf!<br />
                                <strong>#localgutschein</strong>ing
                            </p>
                        </div>

                    </div>

                </div>
            </div>
        </section>

        <section>
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-5">
                        <img src="woman_order_gutschein.jpg" alt="Image"/>
                    </div>
                    <div class="col-12 col-md-7">
                        <p>
                            <strong>Gemeinsam statt einsam!</strong><br />
                            Der Laden um die Ecke, die Lieblingsveranstaltung, unsere Gastro-Szene - sie alle brauchen uns gerade mehr denn je!<br />
                            Wir wollen ihnen helfen!
                        </p>

                        <p><strong>Gutscheine bringen ihnen jetzt das, was sie am Nötigsten brauchen - Geld zum Decken der laufenden Kosten.</strong><br />
                            Damit es noch Unternehmen gibt, wenn wir wieder was unternehmen können. Am besten mit Freunden.</p>

                        <md-button class="md-raised md-accent" to="/stores">Hilf mit!</md-button>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-6 colored-bg">
                        <h3>In 3 einfachen Schritte zum Gutschein</h3>
                        <ol>
                            <li>Local wählen und Gutschein aussuchen</li>
                            <li>Einfach mit PayPal bezahlen</li>
                            <li>Vorfreude mit Freunden teilen</li>
                        </ol>
                        <div class="centered">
                            <md-button class="md-raised md-accent" to="/stores">Gutschein kaufen und helfen</md-button>
                        </div>
                    </div>
                    <div class="col-12 col-md-6">
                        <h3>Mit wenig Aufwand Online-Gutscheine für deine Kunden gebührenfrei anbieten</h3>
                        <ol>
                            <li>Melde dich bei uns über den Link unten</li>
                            <li>Wir richten gemeinsam mit dir die Gutscheine und die Bezahlung ein</li>
                            <li>Mach Jena weiter glücklich</li>
                        </ol>
                        <div class="centered">
                            <a href="mailto:localgutscheining@wunschloesung.com?subject=Mitmachen">
                                <md-button class="md-raised">Ich bin dabei!</md-button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <SharingIsCaring></SharingIsCaring>

        <section>
            <div class="container">
                <h2>Noch Fragen? Gern!</h2>

                <ExpansionPanel color="primary">
                    <div slot="title">
                        Wie bekomme ich meinen Gutschein?
                    </div>
                    <div slot="content">
                        Den bekommst du umgehend nach der Bezahlung von uns per E-Mail zugestellt. Du kannst ihn ausdrucken und verschenken oder umweltfreundlich in der digitalen Version beim Einlösen vorzeigen.
                    </div>
                </ExpansionPanel>
                <ExpansionPanel color="primary">
                    <div slot="title">
                        Wie kommt das Geld zum Local?
                    </div>
                    <div slot="content">
                        Du bezahlst per PayPal direkt beim Local. Dein Geld kommt unmittelbar auf dem PayPal-Konto deines Lieblings-Locals an.
                    </div>
                </ExpansionPanel>
                <ExpansionPanel color="primary">
                    <div slot="title">
                        Was ist mit den Kosten?
                    </div>
                    <div slot="content">
                        Solange die Locals aufgrund der Corona-Epidemie gar nicht oder nur eingeschränkt öffnen können, wollen wir sie unterstützen. Daher erheben wir aktuell keine Kosten für die Nutzung unserer Plattform.<br />
                        Durch die Übernahme der geringen Paypal-Gebühren stellst du sicher, dass der Gutscheinwert zu 100 % beim Local ankommt.
                    </div>
                </ExpansionPanel>
                <ExpansionPanel color="primary">
                    <div slot="title">
                        Ich habe meinen Lieblings-Local nicht gefunden. Was kann ich tun?
                    </div>
                    <div slot="content">
                        Spread the word! Wir freuen uns über alle, die mitmachen. Wir helfen den Locals gerne bei der Einrichtung einer Verkaufsbox für ihre Gutscheine. Grundsätzlich kann mitmachen, wer in Jena für Jena seinen Laden hat und bereit ist, Gutscheine herauszugeben.
                    </div>
                </ExpansionPanel>
                <ExpansionPanel color="primary">
                    <div slot="title">
                        Wer bestimmt den Wert der Gutscheine?
                    </div>
                    <div slot="content">
                        Beim Einrichten der Boxen lassen wir die Locals entscheiden, welche Gutscheinhöhen und Goodies sie anbieten möchten. Die Werte sind so vielfältig wie die Kneipen in der Wagnergasse.
                    </div>
                </ExpansionPanel>
                <ExpansionPanel color="primary">
                    <div slot="title">
                        Kann ich einen Gutschein für jemand anderes kaufen?
                    </div>
                    <div slot="content">
                        Du kannst auf dem Gutschein eine persönliche Widmung hinterlegen zum  Beispiel “Liebe Oma Hertha, alles Liebe zu deinem 80sten Geburtstag! Geh mit deinen Mädels schön einen heben, wenn die Kneipen wieder offen haben!” Wir senden den dir den Gutschein dann per E-Mail zu und du kannst ihn weiterleiten oder ausdrucken.
                    </div>
                </ExpansionPanel>
                <ExpansionPanel color="primary">
                    <div slot="title">
                        Bringt das wirklich was?
                    </div>
                    <div slot="content">
                        Ja, das größte Problem von Ladenbesitzern im Moment ist, dass sie jetzt ihre Kosten decken müssen, aber keinen Umsatz machen können. Indem du einen Gutschein kaufst, hilfst du ihnen dabei und kannst dich hinterher dafür belohnen.
                    </div>
                </ExpansionPanel>
                <ExpansionPanel color="primary">
                    <div slot="title">
                        Wie geht es nach Corona weiter?
                    </div>
                    <div slot="content">
                        Als erstes wünschen wir uns, dass unsere Locals euch nach Corona weiter glücklich machen können, wie gewohnt. Wenn ihr darüber hinaus noch online Gutscheine kaufen wollt, freut uns das doppelt und wir denken über eine Weiterentwicklung der Plattform nach.
                    </div>
                </ExpansionPanel>
            </div>
        </section>

        <section>
            <div class="container">
                <div class="row">
                    <div class="col-8 colored-bg">
                        <h2>Über uns</h2>
                        <p>Hi! Wir sind das Team <strong>#localgutschein</strong>ing und haben uns im Rahmen des Hackathons “Jena vs. Virus” kennen und mögen gelernt.<br />
                            Wir betreiben diese Plattform ehrenamtlich, weil wir in Jena auch nach Corona noch unsere Locals vorfinden und mit Ihnen tolle Erlebnisse haben wollen.
                        </p>
                    </div>
                    <div class="col-4">
                        <img src="jenavsvirus_blau.png" alt="JenaVsVirus"/>
                    </div>
                </div>
            </div>
        </section>

        <!--
        <section>
            <div class="container">
                <h2>Unterstützer</h2>

                <img src="missing.jpg" alt="missing"/>
            </div>
        </section>
        -->

  </div>
</template>

<style scoped lang="scss">

section {
    padding-top: 30px;
    padding-bottom: 30px;

    text-align: left;

    &:first-child {
        background-color: $color-primary;
        color: white;
    }

}

.colored {
    color: $color-primary;
}

.colored-bg {
    background-color: $color-primary;
    color: white;
}

dl {
    dd, dt {
        background-color: $color-primary;
        color: white;

        margin-left: -15px;
        margin-right: -15px;

        padding-left: 15px;
        padding-right: 15px;
    }

    dt {
        padding-top: 5px;
        padding-bottom: 5px;
    }

    dd {
        padding-top: 5px;
        padding-bottom: 5px;
        margin-bottom: 10px;
    }
}

ol, li {
    padding-left: 0;
    margin-left: 0;
    list-style-position: inside;
}

.centered {
    text-align: center;
}

</style>
<script lang="ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    import SharingIsCaring from '@/components/Sharing-Is-Caring.vue';
    import ExpansionPanel from '@/components/Expansion-Panel.vue';
    @Component({
        components: {ExpansionPanel, SharingIsCaring}
    })
    export default class Home extends Vue {
    }
</script>
