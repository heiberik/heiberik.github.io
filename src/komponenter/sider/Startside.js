import React from 'react'
import '../../css/startside.css'
import profilBilde from '../../bilder/profil.jfif'


export default function Startside(){
    return (
        <div className="innhold_startside">
			<div className="forside_beholder">
				<h1 className="forside_tittel">Velkommen til min</h1>
				<h1 className="forside_tittel"><mark className="mark-tittel">karrierefremmende</mark></h1>
				<h1 className="forside_tittel">webside.</h1>

				<div className="forside_bildeOgStrek">
					<img className="forside_bilde" src={profilBilde} alt="profil"></img>
				</div>

				<div className="forside_tekst_div">
					<p className="forside_tekst">
						Utdannet <mark>jurist</mark> ved Universitetet i Oslo.
						Studerer for tiden <mark>informatikk</mark> og
						har begynt å trives litt for godt med det.
						Ansatt som gruppelærer ved Universitetet.
						Les gjerne mer
						<a href="/om-meg"> om meg</a> eller sjekk ut mine
						<a href="/artikler"> artikler</a> og
						<a href="/prosjekter"> prosjekter </a>
						dersom det er av interesse for en gærning som deg.
					</p>
				</div>
			</div>
        </div>
    )
}
