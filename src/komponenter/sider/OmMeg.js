import React from 'react'
import Footer from '../deler/Footer'

import profilBilde from '../../bilder/profil.jfif'
import '../../css/tekstbokser.css'
import '../../css/timeline.css'

const OmMeg = () => {
    return (
        <>
            <div className="mal_innhold">
    			<section className="innhold">
    				<div className="tekstBoks">

    					<img className="cv_profilbilde" src={profilBilde} alt="profil"></img>

    					<h2>Hvem er jeg?</h2>
    					<p>
    	                    Mitt navn er Henrik. I skrivende stund er jeg en 27 år gammel informatikkstudent
    	                    ved Universitetet i Oslo. Der går jeg på linjen programmering og systemarkitektur.
                            Jeg er utdannet jurist ved samme universitetet. Til sommeren 2020 avslutter jeg
                            åtte år med studier
                            <br /><br />

                            På fritiden liker jeg å trene, høre på musikk, bedrive GAMEING og
    						lære nye ting om stort og smått.
    						Jeg har alltid vært glad i å bygge og sette sammen ulike duppeditter.
    						<br /><br />


    					</p>



    					<div className="space_br"></div>
    					<h2> Master i rettsvitenskap! </h2>
    					<p>

    	                    Til tross for de overnevnte interesser endte jeg opp på jusstudiet etter videregående. Jeg hadde ingen
    	                    anelse om hva jeg ønsket å bli og mulighetene var kanskje for mange.
    	                    Jeg sover heller ikke nevneverdig dårlig av å innrømme at status og prestisje var et vektig argument i valg av studie
    	                    for 19-år gamle Henrik.
    	                    <br /><br />

    	                    Likevel var det nok alltid noe som trakk meg i retning av innovasjon
    	                    og noe mindre abstrakt enn jussen under mine rettsvitenskapelige studier.
    	                    Valg av opphavsrett, patentrett, varemerkerett og
    	                    markedsrett som valgfag var vel heller ikke med på å skjule denne lengselen.
    						<br /><br />

    	                    Et oppsving i den juridiske interessen kom imidlertid med et praksisopphold hos advokatfirmaet Tveter og Kløvfjell i Oslo.
    	                    Her jobbet jeg i halvannet år med ekte juridiske problemstillinger for første gang. Firmaet var relativt lite.
    	                    Jeg fikk derfor mye ansvar og interessante arbeidsoppgaver. Et høydepunkt må ha vært da jeg fikk utforme og sende inn
    	                    min egen stevning til Oslo tingrett. Riktignok på noen andres vegne.
    						<br /><br />

    						Julen 2017 leverte jeg masteroppgaven min i rettsvitenskap ved UiO. Det er jeg stolt av.
    	                    <br /><br />
    					</p>

    					<div className="space_br"></div>
    					<h2> Bachelor i informatikk! </h2>

    					<p>
    	                    I januar 2018 startet jeg på en bachelor i programmering og systemarkitektur ved UiO. Jeg ville rett og slett prøve noe helt nytt og følte
    	                    meg dratt mot noe mer skapende og praktisk.
    	                    Det er nok et av de bedre valgene jeg har tatt. Jeg tror selv 19 år gamle status-Henrik kan nikke anerkjennende til retningen
    	                    som nå stakes ut.
    						<br /><br />

    						I løpet av de to årene jeg har tilbragt på Institutt for Informatikk har jeg programmert
    	                    i Python, Java, Kotlin, C og Scheme. Jeg har jobbet med postgreSQL og databaser. Jeg har lært objektorientert programmering,
    	                    funksjonell programmering, algoritmer og datastrukturer. Jeg har dyppet hodet ned i en verden av informasjonssikkerhet,
    	                    operativsystemer og datakommunikasjon. Jeg har jobbet i team og utviklet en Androidapp for luftkvalitet i Norge. I den forbindelse
    	                    har jeg lært om programvareutvikling og praktisert smidige utviklingsmetoder.
    						<br /><br />

    						I tillegg har jeg hatt den store gleden av å være
    	                    gruppelærer i tre semestre og i to ulike fag på universitetet. Det er stas. Det har vært veldig lærerikt og utfordrende.
    						<br /><br />

    						Under følger en liten godbit av en tidslinje for de som måtte ønske en mer grafisk fremstilling av min vei så langt.
    					</p>
    				</div>
    			</section>



    		<section className="innhold">
    			<div className="timeline">

    	            <div className="container left">
    			    	<div className="content">
    			      		<h3>2019 - </h3>
    	                    <h4>Universitetet i Oslo</h4>
    			      		<p className="p_timeline">
    	                        Gruppelærer i følgende semester/fag: <br />
    							v20 - IN1010 | Objektorientert programmering<br />
    	                        h19 - IN2019 | Algoritmer og datastrukturer<br />
    	                        v19 - IN1010 | Objektorientert programmering<br />
    	                    </p>
    			    	</div>
    			  	</div>

    	            <div className="container right">
    			    	<div className="content">
    			      	<h3>2018 - </h3>
    	                <h4>Universitetet i Oslo</h4>
    			      	<p className="p_timeline">
    	                    Bachelor i Informatikk.<br />
    						Programmering og systemarkitektur.
    	                </p>
    			    	</div>
    			  	</div>

    	            <div className="container left">
    			    	<div className="content">
    			      		<h3>2017 - 2018</h3>
    	                    <h4>Advokatfirmaet Tveter og Kløvfjell</h4>
    			      		<p className="p_timeline">
    	                        Praksisopphold. Jobbet med alt fra utforming av
    	                        prosesskriv, omgjøringsbegjæringer, rettskildesøking og kontakt med klienter innen en
    	                        rekke rettsområder som strafferett, utlendingsrett og velferdsrett.
    	                    </p>
    			    	</div>
    			  	</div>

    	            <div className="container right">
    			    	<div className="content">
    			      	<h3>2012 - 2017</h3>
    	                <h4>Universitetet i Oslo</h4>
    			      	<p className="p_timeline">
    	                    Master i rettsvitenskap.<br />
    						Spesialisering innen immaterialrett, herunder
    	                    opphavsrett, patentrett, varemerkerett, markedsrett og internet governance.
    	                </p>
    			    	</div>
    			  	</div>

    	            <div className="container left">
    	                <div className="content">
    	                    <h3>2011 - 2017</h3>
    	                    <h4>Kiwi</h4>
    	                    <p className="p_timeline">Butikkmedarbeider.</p>
    	                </div>
    	            </div>

    	            <div className="container right">
    			    	<div className="content">
    			      	<h3>2009 - 2011</h3>
    	                <h4>Kristelig Gymnasium</h4>
    			      	<p className="p_timeline">Studiespesialisering.</p>
    			    	</div>
    			  	</div>

    	            <div className="container left">
    			    	<div className="content">
    			      	<h3>1992  </h3>
    	                <h4>Aker Sykehus</h4>
    			      	<p className="p_timeline">Fødsel.</p>
    			    	</div>
    			  	</div>
    			</div>

    		</section>


    			<section className="innhold">
    				<div className="tekstBoks">

    					<h2> Mine nøkkelegenskaper? </h2>
    	                <p>
    	                    Jeg anser meg selv for å være en kontrollert, rolig og fornuftig type med
    						voldsomme sinneproblemer.
    						Jeg er ikke redd for å ta litt kontroll for å få ting i gang
    						og trives stort sett med å snakke foran mennesker.
    						Jeg har en enorm arbeidskapasitet, stor læringsvilje
    						og motiveres av utfordringer.
    						Jeg er en positivt innstilt person som kan spre mye glede og latter når
    						jeg blir riktig komfortabel.
    						<br /><br />
    					</p>

    					<div className="space_br"></div>
    	                <h2> Veien videre? </h2>
    					<p>
    						Nå har jeg et halvt år igjen av bacheloren.
    						Etter det er veien åpen og uviss. Er det en ting som er sikkert så er det at
    						jeg ønsker å jobbe med programmering og utvikling i en eller annen form.
    						Jeg trives såpass godt i informatikkens verden at jeg neppe kommer til å klare
    						å legge det bort til fordel for rettsvitenskapen.
    						Forhåpentligvis får jeg jobbet med både utvikling og juss!
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
