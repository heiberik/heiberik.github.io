import React from 'react'
import Footer from '../deler/Footer'
import '../../css/tekstbokser.css'
import '../../css/prosjekter.css'
import '../../css/carousel.css'
import bilde1 from '../../bilder/prosjekter-portfolio.png'
import bilde2 from '../../bilder/prosjekter2.png'


const Prosjekter = () => {

    return (
            <>
                <h1 className="prosjekter_overskrift"> Mine prosjekter </h1>

                <Prosjekt
                    navn = "Portfolio / React"
                    bildeURL={bilde2}
                    stack = {["ReactJS", "HTML", "CSS", "Github Pages", "CloudFlare"]}
                    kodeURL = "https://github.com/heiberik/heiberik.github.io"
                    kildeURL = "https://heiberik.com/"
                    beskrivelse = {
                        "Min offisielle portfolio kodet i React. Dette er et pågående prosjekt " +
                        "for å videreutvikle ferdigheter innen både webutvikling og skriving. " +
                        "Så langt har jeg blant annet blitt komfortabel med å lage gjenbrukbare Components " +
                        "- noe som har vært en åpenbaring sammenlignet med livet uten."
                    }/>

                <Prosjekt
                    navn = "Portfolio"
                    bildeURL = {bilde1}
                    stack = {["HTML", "CSS", "JavaScript", "Netlify"]}
                    kodeURL = "https://github.com/heiberik/heiberik.github.io-css-html-js"
                    kildeURL = "https://heiberik.netlify.com/"
                    beskrivelse = {
                        "Min første selvsnekrede webside. " +
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
                <img src={bildeURL} alt="bilde"/>
            </div>
            <div className="prosjekter-grid-kol-60">
                <h2> {navn} </h2>
                <p> {beskrivelse} </p>
                <div className="stack">
                    {stack.map(item => <p key={item}> {item} </p>)}
                </div>

                <div className="stack">
                    <a className="visKode" href={kodeURL}  aria-label="github" alt="github" target="_blank" rel="noopener noreferrer">
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
