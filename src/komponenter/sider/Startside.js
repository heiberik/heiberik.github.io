import React from 'react'
import { NavLink } from 'react-router-dom';
import '../../css/startside.css'

const Startside = () => {


    return (
        <div className="innhold_startside">
			<div className="forside_beholder">

                <div className="startside_logo">
                    <p> HH </p>
                </div>

				<h1 className="forside_tittel">JURIST</h1>
                <h1 className="forside_tittel">INFORMATIKER</h1>

                <div className="knappBeholder">
                    <NavLink className="forside_knapp" to='/om-meg'>Om meg</NavLink>
                    <NavLink className="forside_knapp" to='/artikler'>Artikler</NavLink>
                    <NavLink className="forside_knapp" to='/prosjekter'>Prosjekter</NavLink>
                </div>
			</div>
        </div>
    )
}

export default Startside
