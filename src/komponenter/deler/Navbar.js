import React from 'react'
import { NavLink } from 'react-router-dom';
import '../../css/navbar.css'
import logoBilde from '../../bilder/profil.jfif'
import listBilde from '../../bilder/list.svg'


const Navbar = () => {

    let linkToggle = React.createRef()
    let navbarTekst = React.createRef()
    let breakPoint = 500;
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
                breakPoint = 500;
                topp = true;
            }

            else if (skjermhoyde > breakPoint && topp){

                topp = false;
                breakPoint = 50;

                switch(window.location.pathname){
                    case "/om-meg":
                        byttTekst("Om meg")
                        break
                    case "/prosjekter":
                        byttTekst("Prosjekter")
                        break
                    case "/artikler":
                        byttTekst("Artikler")
                        break
                    default:
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
                }, 350)
            }, 350);
    }


    function linkTittel(event){
        var skjermhoyde = document.documentElement.scrollTop;
        if (skjermhoyde > breakPoint){
            event.preventDefault()
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
                <NavLink to={"/"} onClick={linkTittel} style={{textDecoration:"none", backgroundColor:"inherit"}}>
                    <div id="tekst_artikler_div" className="navbar_navn_div">
    				   <h5 id="tekst_artikler" ref={navbarTekst}  className="navbar_navn_tekst">Henrik Heiberg</h5>
                    </div>
                </NavLink>
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
