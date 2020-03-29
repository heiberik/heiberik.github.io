import React from 'react'
import Footer from '../deler/Footer'
import Img from 'react-image'
import '../../css/tekstbokser.css'
import '../../css/prosjekter.css'
import '../../css/carousel.css'
import bilde1 from '../../bilder/prosjekt1-mindre.jpg'
import bilde2 from '../../bilder/prosjekt2.JPG'
import bilde3 from '../../bilder/prosjekt3.JPG'
import bilde4 from '../../bilder/prosjekt4.JPG'


const Prosjekter = () => {

    return (
            <>
                <Prosjekt
                    navn = "Open Them Tabses"
                    bildeURL={bilde4}
                    stack = {["Chrome extensions", "HTML", "CSS", "JavaScript"]}
                    kodeURL = "https://chrome.google.com/webstore/detail/open-them-tabses/jgdlnmkbjhebmaohkhphbdgcghoimnbh"
                    kildeURL = "https://chrome.google.com/webstore/detail/open-them-tabses/jgdlnmkbjhebmaohkhphbdgcghoimnbh"
                    beskrivelse = {
                        "Min andre Google chrome extension. Open Them Tabses lar deg enkelt lagre " +
                        "dine favorittsider i en eller flere grupper. Mange åpne tabs som må lagres? Fortvil ikke, " +
                        "du kan lagre alle åpne tabs i en gruppe! Legge til eller fjerne en side fra en gruppe? " +
                        "null problem! Åpne alle sidene samtidig? Åjada, du er kun ett klikk unna!"
                    }/>

                <Prosjekt
                    navn = "Ha Deg Vekk!"
                    bildeURL={bilde3}
                    stack = {["Chrome extensions", "HTML", "CSS", "JavaScript"]}
                    kodeURL = "https://github.com/heiberik/Ha-Deg-Vekk"
                    kildeURL = "https://chrome.google.com/webstore/detail/ha-deg-vekk/hmbfkgpomhdccagjoodoceidifmoanjn"
                    beskrivelse = {
                        "Et første forsøk på sette sammen en Google Chrome Extension. " +
                        "Applikasjonen filtrerer vekk nyhetsartikler basert på brukervalgte nøkkelord. " +
                        "Største utfordring var å få til god flyt (message passing) mellom de ulike scriptene som kjører " +
                        "i bakgrunnen."
                    }/>


                <Prosjekt
                    navn = "Portfolio / React"
                    bildeURL={bilde2}
                    stack = {["ReactJS", "HTML", "CSS", "Github Pages", "CloudFlare"]}
                    kodeURL = "https://github.com/heiberik/hjemmeside-react"
                    kildeURL = "https://heiberik.com/"
                    beskrivelse = {
                        "Min offisielle portfolio kodet i React. Altså her du befinner deg nå. " +
                        "Dette er et pågående prosjekt " +
                        "for å videreutvikle ferdigheter innen både webutvikling og skriving. " +
                        "Oppdagelsen av Reacts components har vært spesielt gledelig for en som  " +
                        "først kodet hjemmesiden i ren html."
                    }/>



                <Prosjekt
                    navn = "Portfolio"
                    bildeURL = {bilde1}
                    stack = {["HTML", "CSS", "JavaScript", "Netlify"]}
                    kodeURL = "https://github.com/heiberik/hjemmeside"
                    kildeURL = "https://heiberik.netlify.com/"
                    beskrivelse = {
                        "Min aller første selvsnekrede webside! " +
                        "Bygget uten rammeverk eller andre verktøy. " +
                        "Under utviklingen har jeg lært grunnleggende HTML, CSS og JS. " +
                        "Prosjektet inspirerte meg til å lære ReactJS - som hele kodebasen " +
                        "nå er oversatt til."
                    }/>

                <Footer/>
            </>
        )
}


const Prosjekt = ({ bildeURL, navn, beskrivelse, stack, kodeURL, kildeURL }) => {

    return (
        <div className="prosjekter-grid">
            <div className="prosjekter-grid-kol-40">
                <Img src={bildeURL} alt="bilde"/>
            </div>
            <div className="prosjekter-grid-kol-60">
                <h2> {navn} </h2>
                <div className="stack">
                    {stack.map(item => <p key={item}> {item} </p>)}
                </div>
                <p> {beskrivelse} </p>


                <div className="stack">
                    <a className="visKilde" href={kodeURL}  aria-label="github" alt="github" target="_blank" rel="noopener noreferrer">
                        <div> Se Kode </div>
                        <div className="fa fa-github"> </div>
                    </a>
                    <a className="visKilde" href={kildeURL} aria-label="link" alt="link" target="_blank" rel="noopener noreferrer">
                        <div> Se Side </div>
                        <div className="fa fa-external-link "> </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Prosjekter;
