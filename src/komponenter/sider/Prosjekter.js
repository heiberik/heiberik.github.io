import React from 'react'
import Footer from '../deler/Footer'

import '../../css/tekstbokser.css'
import '../../css/prosjekter.css'
import '../../css/carousel.css'


class Prosjekter extends React.Component{

    current = 0;
    prev = 2;
    next = 1;

    constructor(props) {
        super(props);
        this.slide1 = React.createRef()
        this.slide2 = React.createRef()
        this.slide3 = React.createRef()
        this.slides = [this.slide1, this.slide2, this.slide3]
    }

    componentDidMount() {
        console.log(this.slides)
        this.slides[this.next].current.addEventListener("click", this.neste, true);
        this.slides[this.prev].current.addEventListener("click", this.forrige, true);
    }

    gotoNum = number => {

        this.current = number;
        this.prev = this.current - 1;
        this.next = this.current + 1;

        for (let i = 0; i < this.slides.length; i++) {
            this.slides[i].current.classList.remove("active");
            this.slides[i].current.classList.remove("prev");
            this.slides[i].current.classList.remove("next");
            this.slides[i].current.removeEventListener("click", this.neste, true);
            this.slides[i].current.removeEventListener("click", this.forrige, true);
        }

        if (this.next === 3) {
            this.next = 0;
        }

        if (this.prev === -1) {
            this.prev = 2;
        }

        this.slides[this.current].current.classList.add("active");
        this.slides[this.prev].current.classList.add("prev");
        this.slides[this.next].current.classList.add("next");

        this.slides[this.next].current.addEventListener("click", this.neste, true);
        this.slides[this.prev].current.addEventListener("click", this.forrige, true);
    }

    gotoPrev = () => this.current > 0 ? this.gotoNum(this.current - 1) : this.gotoNum(this.slides.length - 1);
    gotoNext = () => this.current < 2 ? this.gotoNum(this.current + 1) : this.gotoNum(0);

    neste = () => this.gotoNext();
    forrige = () => this.gotoPrev();


    render (){

        return (
            <>
                <div className="mal_innhold">
        			<div className="innhold">
        				<div className="tekstBoks">
        					<h2>Mine prosjekter</h2>
        					<p>
        						Tanken med denne siden er å legge ut mer eller mindre vellykkede
        						prosjekter jeg har fullført og/eller jobber med.
        						Hvert prosjekt inneholder en link til kode på
        						GitHub og en link til den eventuelle applikasjonen.
        						De fleste prosjektene er frittstående sideprosjekter uten direkte
        						tilknytning til informatikkstudiene.
        					 </p>
        				</div>
        			</div>
        		</div>

        		<div className="mal_innhold">
        			<div className="innhold">
        				<div className="items" ref={this.slider}>

        					<div className="item active" ref={this.slide1}>
        						<div className="prosjekter-scale">
        							<div className="prosjekter-grid-top">
        								<h2>Hjemmeside</h2>
        								<div className="prosjekter-row">
        									<a href="https://github.com/heiberik/heiberik.github.io" aria-label="github" alt="github" className="fa fa-github" target="_blank" rel="noopener noreferrer"> </a>
        									<a href="https://heiberik.com" className="fa fa-link" aria-label="link" alt="link" target="_blank" rel="noopener noreferrer"> </a>
        								</div>
        							</div>
        							<div className="prosjekter-grid">
        								<div className="prosjekter-item">
        									<p>Stack:</p>
        									<p>Host:</p>
        									<p>Om:</p>
        								</div>
        								<div className="prosjekter-item">
        									<p>html/css/js</p>
        									<p>GitHub pages</p>
        									<p>
        										Statisk webapplikasjon. Et pågående prosjekt for å
        										lære grunnleggende webutvikling og forbedre
        										skriveferdigheter.
        									</p>
        								</div>
        							</div>
        						</div>
        					</div>

        					<div className="item next" ref={this.slide2}>
        						<div className="prosjekter-scale">
        							<div className="prosjekter-grid-top">
        								<h2>LibApp</h2>
        								<div className="prosjekter-row">
        									<a href="https://github.com/heiberik/LibApp" className="fa fa-github" aria-label="github" alt="github" target="_blank" rel="noopener noreferrer"> </a>
        									<a href="https://libapp-heiberik.herokuapp.com/" className="fa fa-link" aria-label="link" alt="link" target="_blank" rel="noopener noreferrer"> </a>
        								</div>
        							</div>
        							<div className="prosjekter-grid">
        								<div className="prosjekter-item">
        									<p>Stack:</p>
        									<p>Host:</p>
        									<p>Om:</p>
        								</div>
        								<div className="prosjekter-item">
        									<p>Node.js/Express/MongoDB</p>
        									<p>Heroku</p>
        									<p>
        										Dynamisk webapplikasjon.
        										Oversikt over forfattere og bøker. Frontend + backend. Database.
        										Tutorial fra Web Dev Simplified.
        									</p>
        								</div>
        							</div>
        						</div>
        					</div>

        					<div className="item prev" ref={this.slide3}>
        						<div className="prosjekter-scale">
        							<div className="prosjekter-grid-top">
        								<h2>MVP Pattern</h2>
        								<div className="prosjekter-row">
        									<a href="https://github.com/heiberik/TemplateMVP" className="fa fa-github" aria-label="github" alt="github" target="_blank" rel="noopener noreferrer"> </a>
        								</div>
        							</div>
        							<div className="prosjekter-grid">
        								<div className="prosjekter-item">
        									<p>Stack:</p>
        									<p>Host:</p>
        									<p>Om:</p>
        								</div>
        								<div className="prosjekter-item">
        									<p>Kotlin</p>
        									<p>Ingen</p>
        									<p>
        										Enkel template for Android applikasjoner
        										som ønsker å benytte seg av MVP pattern (Model View Presenter).
        									</p>
        								</div>
        							</div>
        						</div>
        					</div>



        					<div className="button-container">
        						<div className="button"><i className="fa fa-angle-left"></i></div>
        						<div className="button"><i className="fa fa-angle-right"></i></div>
        					</div>
        				</div>
        			</div>
        		</div>



        		<div className="mal_innhold">
        			<div className="innhold">
        				<div className="tekstBoks">
        					<p>

        					 </p>
        				</div>
        			</div>
        		</div>

                <Footer/>
            </>
        )
    }
}

export default Prosjekter;
