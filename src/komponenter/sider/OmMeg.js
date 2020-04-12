import React from 'react'
import Footer from '../deler/Footer'
import Img from 'react-image'

import '../../css/tekstbokser.css'
import '../../css/timeline.css'

const OmMeg = ({ profilBilde }) => {
    return (
        <>
            <div className="mal_innhold">
    			<section className="innhold">
    				<div className="tekstBoks">

    					<Img className="cv_profilbilde" src={profilBilde} alt="profil"></Img>

    					<h2>Hvem er jeg?</h2>
    					<p>
    	                    Mitt navn er Henrik. I skrivende stund er jeg en 27 år gammel informatikkstudent
    	                    ved Universitetet i Oslo. Der går jeg på linjen programmering og systemarkitektur.
                            Jeg er utdannet jurist ved samme universitetet. Sommeren 2020 avslutter jeg
                            åtte gode år med studier. Denne selvpromoterende hjemmesiden er i den anledning et
                            verktøy for å ta steget over i neste fase av livet.
                            <br /><br />

                            Jeg liker å tro at det er mer ved meg enn en master i juss og en bachelor i informatikk.
                            På fritiden liker jeg blant annet å trene, høre på musikk, bedrive gameing og
    						lære nye ting om stort og smått. Denne websiden er derfor like mye et resultat av en
                            nysgjerrighets- og skapertrang, som den er et rop om hjelp.
    						<br /><br />

                            Jeg anser meg selv for å være en kontrollert, rolig og fornuftig type med voldsomme sinneproblemer.
    						Jeg er ikke redd for å ta kontroll for å få ting i gang og trives stort sett
                            med å snakke foran mennesker. Jeg har en enorm arbeidskapasitet, stor læringsvilje
    						og motiveres av utfordringer. Jeg er en positivt innstilt person som sprer mye
                            latter og glede når jeg blir riktig komfortabel.
                            <br /><br />

                            Dersom du allerede er lei av å lese om meg og mitt liv kan du eventuelt scrolle
                            rett ned til tidslinjen som gir en god oppsummering av Henrik Heibergs høydepunkter livet.
                            <br /><br />
    					</p>


    					<div className="space_br"></div>
    					<h2> Master i rettsvitenskap. </h2>
    					<p>

    	                    Til tross for de overnevnte interesser valgte jeg jusstudiet etter videregående.
                            Jeg hadde ingen anelse om hva jeg ønsket å gjøre og mulighetene var kanskje for mange.
    	                    Jeg sover heller ikke nevneverdig dårlig av å innrømme at status og prestisje var et
                            vektig argument i valg av studie for 19-år gamle Henrik.
    	                    <br /><br />

    	                    Det var nok alltid noe som trakk meg i retning av innovasjon og noe mindre abstrakt enn
                            jussen under mine rettsvitenskapelige studier. Når jeg fikk sjansen falt valget på
                            immaterialrettslige fag som opphavsrett, patentrett og varemerkerett.
    						<br /><br />

    	                    Et oppsving i den juridiske interessen kom imidlertid med et praksisopphold hos advokatfirmaet
                            Tveter og Kløvfjell i Oslo. Der jobbet jeg i halvannet år. For første gang
                            fikk jeg bryne meg på ekte juridiske problemstillinger. Advokatfirmaet var relativt lite.
                            Jeg fikk derfor mye ansvar og interessante arbeidsoppgaver. Jeg var blant annet med på å skrive stevninger,
                            tilsvar, omgjøringsbegjæringer, prosesskriv og søknader av ulike slag. Jeg hadde kontakt med klienter
                            og etater. Firmaet engasjerte seg hovedakelig i saker innen strafferett, utlendingsrett og velferdsrett.
    						<br /><br />

    						Julen 2017 leverte jeg masteroppgaven min i rettsvitenskap ved Universitetet i Oslo.
    	                    <br /><br />
    					</p>


    					<div className="space_br"></div>
    					<h2> Bachelor i informatikk. </h2>

    					<p>
    	                    I januar 2018 startet jeg rett på en bachelor i programmering og systemarkitektur ved UiO.
    	                    Det er nok et av de bedre valgene jeg har tatt. Jeg tror selv 19 år gamle status-Henrik kan
                            nikke anerkjennende til retningen som nå stakes ut.
    						<br /><br />

    						I løpet av de to årene jeg har tilbragt på Institutt for Informatikk har jeg programmert
    	                    i Python, Java, Kotlin, C og Scheme. Jeg har jobbet med postgreSQL og databaser.
                            Jeg har lært objektorientert programmering, funksjonell programmering, algoritmer og datastrukturer.
                            <br /><br />

                            Jeg har dyppet hodet ned i en verden av informasjonssikkerhet, operativsystemer og datakommunikasjon.
                            Jeg har jobbet i team og utviklet en Androidapp for luftkvalitet i Norge. I den forbindelse
    	                    har jeg lært om programvareutvikling og praktisert smidige utviklingsmetoder. I tillegg har jeg hatt
                            den store gleden av å være gruppelærer i tre semestre og i to ulike fag på
                            universitetet. Det har vært veldig stas, lærerikt og utfordrende.
    						<br /><br />
    					</p>
    				</div>
    			</section>



    		<section className="innhold">
    			<div className="timelineOmMeg">

    	            <div className="containerB left">
    			    	<div className="contentB">
    			      		<h3>2019 - </h3>
    	                    <h4>Universitetet i Oslo</h4>
    			      		<p className="p_timeline">
    	                        Gruppelærer i følgende semester/fag: <br />
    							v20 - IN1010 | Objektorientert programmering<br />
    	                        h19 - IN2010 | Algoritmer og datastrukturer<br />
    	                        v19 - IN1010 | Objektorientert programmering<br />
    	                    </p>
    			    	</div>
    			  	</div>

    	            <div className="containerB rightB">
    			    	<div className="contentB">
    			      	<h3>2018 - </h3>
    	                <h4>Universitetet i Oslo</h4>
    			      	<p className="p_timeline">
    	                    Bachelor i Informatikk.<br />
    						Programmering og systemarkitektur.
    	                </p>
    			    	</div>
    			  	</div>

    	            <div className="containerB left">
    			    	<div className="contentB">
    			      		<h3>2017 - 2018</h3>
    	                    <h4>Advokatfirmaet Tveter og Kløvfjell</h4>
    			      		<p className="p_timeline">
    	                        Praksisopphold. Jobbet med alt fra utforming av
    	                        prosesskriv, omgjøringsbegjæringer, rettskildesøking og kontakt med klienter innen en
    	                        rekke rettsområder som strafferett, utlendingsrett og velferdsrett.
    	                    </p>
    			    	</div>
    			  	</div>

    	            <div className="containerB rightB">
    			    	<div className="contentB">
    			      	<h3>2012 - 2017</h3>
    	                <h4>Universitetet i Oslo</h4>
    			      	<p className="p_timeline">
    	                    Master i rettsvitenskap.<br />
    						Spesialisering innen immaterialrett, herunder
    	                    opphavsrett, patentrett, varemerkerett, markedsrett og internet governance.
    	                </p>
    			    	</div>
    			  	</div>

    	            <div className="containerB left">
    	                <div className="contentB">
    	                    <h3>2011 - 2017</h3>
    	                    <h4>Kiwi</h4>
    	                    <p className="p_timeline">Butikkmedarbeider.</p>
    	                </div>
    	            </div>

    	            <div className="containerB rightB">
    			    	<div className="contentB">
    			      	<h3>2009 - 2011</h3>
    	                <h4>Kristelig Gymnasium</h4>
    			      	<p className="p_timeline">Studiespesialisering.</p>
    			    	</div>
    			  	</div>

    	            <div className="containerB left">
    			    	<div className="contentB">
    			      	<h3>1992  </h3>
    	                <h4>Aker Sykehus</h4>
    			      	<p className="p_timeline">Fødsel.</p>
    			    	</div>
    			  	</div>
    			</div>

    		</section>


    			<section className="innhold">
    				<div className="tekstBoks">

    					<div className="space_br"></div>
    	                <h2> Veien videre? </h2>
    					<p>
    						Til sommeren 2020 er jeg ferdig med bacheloren i informatikk. Etter det er veien åpen og uviss.
                            Er det en ting som er sikkert så er det at
    						jeg ønsker å jobbe med programmering og utvikling i en eller annen form.
    						Jeg trives såpass godt i informatikkens verden at jeg neppe kommer til å klare
    						å legge det bort til fordel for rettsvitenskapen.
    						Er jeg riktig heldig får jeg kanskje jobbet med både informatikk og juss!
    					</p>
    					<div className="space_br"></div>
    				</div>
    			</section>

    		</div>

            <Footer/>
        </>
    )
}

export default OmMeg
