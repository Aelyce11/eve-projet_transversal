import './accessibility.css'
import React, { Component } from 'react'

import icon_access from '../../../Pictures/header/icons/accessibility_white.svg'
import arrow_reset from '../../../Pictures/icons/access/reset.svg'

import text_bigger from '../../../Pictures/icons/access/text_bigger.png'
import text_bolder from '../../../Pictures/icons/access/text_bolder.png'
import line_height from '../../../Pictures/icons/access/line_height.png'
import reading_assist from '../../../Pictures/icons/access/reading_assist.png'
import keyboard from '../../../Pictures/icons/access/keyboard.png'
import cursor from '../../../Pictures/icons/access/cursor.png'
import contrast from '../../../Pictures/icons/access/contrast.png'
import desaturate from '../../../Pictures/icons/access/desaturate.png'
import links from '../../../Pictures/icons/access/links.png'

export default class Accessibility extends Component {
	constructor(props) {
		super(props)
		this.state = { addClass: false }
	}
	toggle() {
		this.setState({ addClass: !this.state.addClass })
	}
	render() {
		let accessClass = [ 'accessButton' ]
		let dispClass = [ 'bubble' ]
		if (this.state.addClass) {
			accessClass.push('disp')
			dispClass.push('unfold')
		}
		return (
			<div className={accessClass.join(' ')}>
				<button for="access" className="mainButton" onClick={this.toggle.bind(this)}>
					<img src={icon_access} alt="Menu d'accessibilité" />
				</button>
				<div className={dispClass.join(' ')}>
					<h3>Options d'accessibilité</h3>
					<div>
						<div className="allOptions">
							<div className="accessOption">
								<div>
									<img src={text_bigger} />
									<p>Agrandir le texte</p>
								</div>
								<div className="radio" />
							</div>
							<div className="accessOption">
								<div>
									<img src={text_bolder} />
									<p>Épaissir le texte</p>
								</div>
								<div className="radio" />
							</div>
							<div className="accessOption">
								<div>
									<img src={line_height} />
									<p>Aérer le texte</p>
								</div>
								<div className="radio" />
							</div>
							<div className="accessOption">
								<div>
									<img src={reading_assist} />
									<p>Aide à la lecture</p>
								</div>
								<div className="radio" />
							</div>
							<div className="accessOption">
								<div>
									<img src={keyboard} />
									<p>Navigation clavier</p>
								</div>
								<div className="radio" />
							</div>
							<div className="accessOption">
								<div>
									<img src={cursor} />
									<p>Agrandir le curseur</p>
								</div>
								<div className="radio" />
							</div>
							<div className="accessOption">
								<div>
									<img src={contrast} />
									<p>Constraste élevé</p>
								</div>
								<div className="radio" />
							</div>
							<div className="accessOption">
								<div>
									<img src={desaturate} />
									<p>Désaturer</p>
								</div>
								<div className="radio" />
							</div>
							<div className="accessOption">
								<div>
									<img src={links} />
									<p>Souligner les liens</p>
								</div>
								<div className="radio" />
							</div>
						</div>
						<button>
							<img src={arrow_reset} />
							Tout réinitialiser
						</button>
					</div>
				</div>
				<div className="darkness" />
			</div>
		)
	}
}
