import React from 'react'
import '../../css/startside.css'


const Startside = ({ forsideBakgrunn }) => {


    return (
        <div style={{overflow:"hidden"}}>
            <div className="forside" style={{backgroundImage: `url(${forsideBakgrunn})`}}></div>

            <div className="forside_tekst">
                <h1 className="forside_tittel">Henrik Heiberg</h1>
                <h1 className="forside_tittel">Informatiker og jurist</h1>
                <p>Velkommen til min karrierefremmende webside.</p>
            </div>
        </div>
    )
}

export default Startside
