import React from 'react'

import '../../../node_modules/font-awesome/css/font-awesome.min.css';
import '../../css/footer.css'

export default function Footer(){
    return (
        <footer className="footer">
			<div className="kontaktinfo">
				<div className="boks">
					<i className="fa fa-user"></i>
					<p>Henrik Heiberg</p>
				</div>

				<div className="boks">
					<i className="fa fa-inbox"></i>
					<p>heiberik@hotmail.com</p>
				</div>

				<div className="boks">
					<i className="fa fa-compass"></i>
					<p>Oslo, Norway</p>
				</div>
			</div>

			<div className="logoer_footer">
				<a href="https://github.com/heiberik" className="fa fa-github" aria-label="github" alt="github" target="_blank" rel="noopener noreferrer"> </a>
				<a href="https://www.linkedin.com/in/heiberik/" className="fa fa-linkedin" aria-label="linkedin" alt="linkedid" target="_blank" rel="noopener noreferrer"> </a>
			</div>
		</footer>
    )
}
