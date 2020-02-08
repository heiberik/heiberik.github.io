import React from 'react'
import Footer from '../deler/Footer'
import { NavLink } from 'react-router-dom';

import spaceBilde from '../../bilder/space.jpg'
import '../../css/tekstbokser.css'
import '../../css/artikler.css'
import '../../css/input_range.css'


class Artikler extends React.Component {

    counter = 1;
    active = "active";
    listView = "list-view";
    gridView = "grid-view";
    dNone = "d-none";

    constructor(props) {
        super(props);
        this.rangeInput = React.createRef()
        this.imageList = React.createRef()
        this.searchInput = React.createRef()
        this.btnList = React.createRef()
        this.btnListParent = React.createRef()
        this.btnGrid = React.createRef()
        this.btnGridParent = React.createRef()
        this.counterTeller = React.createRef()
        this.zoom = React.createRef()
        this.imageListChildren = []
        this.myArray = []
    }


    componentDidMount() {
        this.imageListChildren = this.imageList.current.children

        this.btnList.current.addEventListener("click", this.btnKlikkList, true)
        this.btnGrid.current.addEventListener("click", this.btnKlikkGrid, true)
        this.rangeInput.current.addEventListener("input", this.inputDrag, true)

        for (const child of this.imageListChildren) {
            this.myArray.push({
                id: this.counter++,
                elem: child,
                text: child.innerText.toLowerCase()
            });
        }

        this.counterTeller.current.textContent = this.imageListChildren.length;
        this.searchInput.current.addEventListener("keyup", this.tastTrykk, true)
    }


    tastTrykk = () => {

        for (const item of this.imageListChildren) {
            item.classList.add(this.dNone);
        }

        const text = this.searchInput.current.value.toLowerCase();
        const filteredArray = this.myArray.filter(el => el.text.includes(text));

        if (filteredArray.length > 0) {
            for (const el of filteredArray) {
                 el.elem.classList.remove(this.dNone);
            }
        }
        this.counterTeller.current.textContent = filteredArray.length;
    }


    inputDrag = () => {
        document.documentElement.style.setProperty("--minRangeValue",`${this.rangeInput.current.value}px`);
    }

    btnKlikkGrid = () => {
        this.btnListParent.current.classList.remove(this.active);
        this.btnGridParent.current.classList.add(this.active);
        this.disabled = true;
        this.btnList.current.disabled = false;
        this.zoom.current.classList.remove(this.dNone);
        this.imageList.current.classList.remove(this.listView);
        this.imageList.current.classList.add(this.gridView);
    }

    btnKlikkList = () => {
        this.btnGridParent.current.classList.remove(this.active);
        this.btnListParent.current.classList.add(this.active);
        this.disabled = true;
        this.btnGrid.current.disabled = false;
        this.zoom.current.classList.add(this.dNone);
        this.imageList.current.classList.remove(this.gridView);
        this.imageList.current.classList.add(this.listView);
    }

    render(){
        return (
            <>
                <div className="mal_innhold">
        			<div className="innhold">
        				<div className="tekstBoks">
        					<h2>Mine artikler</h2>
        					<p>
        						Under vil du forhåpentligvis etter hvert finne et hav av skriverier av
        						varierende kvalitet. Jeg kommer til å skrive om og publisere
        						akkurat det som faller meg inn fra tid til annen. Så da er det opp til deg
        						å nyte innholdet som er servert på en måte du finner passende.
        					 </p>
        				</div>
        			</div>
        		</div>

        		<section className="gallery">
        			<div className="artikler-container">

        			    <div className="toolbar">

        			      	<div className="search-wrapper">
        						<label htmlFor="sok_artikler" id="label_sok"></label>
        						<input ref={this.searchInput} type="search" id="sok_artikler" aria-label="Søk etter artikler" placeholder="Søk etter artikkel"></input>
        			        	<div className="counter">Antall artikler: <span ref={this.counterTeller}>0</span></div>
        			      	</div>

        			      	<ul className="view-options">
        				        <li className="zoom" ref={this.zoom}>
        				          <input type="range" ref={this.rangeInput} min="100" max="320" defaultValue="200"></input>
        				        </li>
        				        <li className="show-grid active" ref={this.btnGridParent}>
        				          <button disabled ref={this.btnGrid} aria-label="grid">
        				            <i className="fa fa-th"></i>
        				          </button>
        				        </li>
        				        <li className="show-list" ref={this.btnListParent}>
        				          <button aria-label="list" ref={this.btnList}>
        				            <i className="fa fa-list"></i>
        				          </button>
        				      </li>
        			      </ul>
        			   </div>



        			  	<ol className="image-list grid-view" ref={this.imageList}>

        					<li>
                                <NavLink to="/artikler/mine-yndlingsfakta-om-universet">
            			        	<figure>
            			          		<img src={spaceBilde} alt="space"></img>
            			          		<figcaption>
            							  	<h2>Mine yndlingsfakta om universet</h2>
            					            <p>Hva skjer når Melkeveien kolliderer med galaksen Andromeda?
            								Hvorfor har vi istid på jorden? Sjekk ut mine yndlingsfakta
            								om universet!</p>
            			          		</figcaption>
            			        	</figure>
                                </NavLink>
        			      	</li>

                            <li>
                                <NavLink to="/artikler/mine-yndlingsfakta-om-universet">
            			        	<figure>
            			          		<img src={spaceBilde} alt="space"></img>
            			          		<figcaption>
            							  	<h2>Mine yndlingsfakta om universet</h2>
            					            <p>Hva skjer når Melkeveien kolliderer med galaksen Andromeda?
            								Hvorfor har vi istid på jorden? Sjekk ut mine yndlingsfakta
            								om universet!</p>
            			          		</figcaption>
            			        	</figure>
                                </NavLink>
        			      	</li>

                            <li>
                                <NavLink to="/artikler/mine-yndlingsfakta-om-universet">
            			        	<figure>
            			          		<img src={spaceBilde} alt="space"></img>
            			          		<figcaption>
            							  	<h2>Mine yndlingsfakta om universet</h2>
            					            <p>Hva skjer når Melkeveien kolliderer med galaksen Andromeda?
            								Hvorfor har vi istid på jorden? Sjekk ut mine yndlingsfakta
            								om universet!</p>
            			          		</figcaption>
            			        	</figure>
                                </NavLink>
        			      	</li>
                            
        			    </ol>
        			  </div>
        			</section>

                <Footer/>
            </>
        )
    }
}

export default Artikler
