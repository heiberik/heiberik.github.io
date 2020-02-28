import React from 'react'
import { NavLink } from 'react-router-dom';

import '../../css/navbar.css'
import logoBilde from '../../bilder/profil.jfif'
import listBilde from '../../bilder/list.svg'


const Navbar = () => {

    let linkToggle = React.createRef()
    let navbarTekst = React.createRef()
    let breakPoint = 200;
    let topp = true;
    var mobil = false;
    if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      mobil = true;
    }

    const listeKlikk = () => {
        linkToggle.current.classList.toggle('active')
    }


    const endreTekst = () => {

        if (!mobil){
            var skjermhoyde = document.documentElement.scrollTop;

            if (skjermhoyde < breakPoint && !topp){
                byttTekst("Henrik Heiberg")
                breakPoint = 150;
                topp = true;
            }

            else if (skjermhoyde > breakPoint && topp){

                topp = false;
                breakPoint = 250;

                const path = window.location.pathname
                if (path === "/om-meg"){
                    byttTekst("Om meg")
                }
                else if (path === "/prosjekter"){
                    byttTekst("Prosjekter")
                }
                else if (path === "/artikler"){
                    byttTekst("Artikler")
                }
                else {
                    byttTekst("Artikkel")
                }
            }
        }
    }

    const byttTekst = (t) => {
        navbarTekst.current.style.opacity = "0";
        setTimeout(() => {
                navbarTekst.current.innerHTML = t
                setTimeout(() => {
                    navbarTekst.current.style.opacity = "1";
                }, 200)
            }, 300);
    }


    function linkTittel(event){
        var skjermhoyde = document.documentElement.scrollTop;
        if (skjermhoyde < breakPoint){
            window.location.href = "/";
        }
        else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    window.addEventListener('scroll', endreTekst, true);

    return (
        <nav className="navbar">
			<span className="navbar-toggle" id="js-navbar-toggle" onClick={listeKlikk}>
            	<img src={listBilde} alt="list"></img>
        	</span>

			<div className="navbar_navn_boks">
				<img className="nav_bilde" src={logoBilde} alt="profil"></img>
                <div id="tekst_artikler_div" className="navbar_navn_div">
				   <h5 id="tekst_artikler" ref={navbarTekst} onClick={linkTittel} className="navbar_navn_tekst">Henrik Heiberg</h5>
                </div>
			</div>

	        <ul className="main-nav" id="js-menu" ref={linkToggle}>
				<li> <NavLink className="navLink" onClick={listeKlikk} activeClassName="navLink" to='/om-meg'>Om meg</NavLink> </li>
	            <li> <NavLink className="navLink" onClick={listeKlikk} activeClassName="navLink" to='/artikler'>Artikler</NavLink> </li>
	            <li> <NavLink className="navLink" onClick={listeKlikk} activeClassName="navLink" to='/prosjekter'>Prosjekter</NavLink> </li>
	        </ul>
		</nav>
    )
}

export default Navbar;
