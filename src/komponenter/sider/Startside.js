import React from 'react'
import '../../css/startside.css'
import bakgrunn from '../../bilder/comp-bak12.webp'

const Startside = () => {


    return (
        <div style={{overflow:"hidden"}}>
            <div className="forside" style={{backgroundImage: `url(${bakgrunn})`}}></div>

            <div className="forside_tekst">
                <h1 className="forside_tittel">Henrik Heiberg</h1>
                <h1 className="forside_tittel">Informatiker og jurist</h1>
                <p>Velkommen til min karrierefremmende webside.</p>
            </div>
        </div>
    )
}

export default Startside
