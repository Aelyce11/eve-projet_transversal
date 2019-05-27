import React, { Component } from 'react'
import icon_box from '../../../Pictures/header/icons/box.svg'

import Item from './Item/Item.js'

export default class Box extends Component {
	constructor(props) {
		super(props)
		this.state = { addClass: false }
	}
	toggle() {
		this.setState({ addClass: !this.state.addClass })
	}
	render() {
		let boxClass = [ 'boxButton' ]
		let dispClass = [ 'bubble' ]
		if (this.state.addClass) {
			boxClass.push('disp')
			dispClass.push('unfold')
		}

		let boxDetail = {
			nextShip: '28/05/209',
			interval: '30'
		}

		return (
			<div className={boxClass.join(' ')}>
				<button for="box" onClick={this.toggle.bind(this)}>
					<img src={icon_box} alt="Mon panier" />
				</button>
				<div className={dispClass.join(' ')}>
					<h3>Ma boîte</h3>
					<div className="content">
						<Item />
					</div>
					<div className="detail">
						<span className="next">Prochaine livraison</span>
						<span>{boxDetail.nextShip}</span>
						<span>et tous les mois ({boxDetail.interval}j)</span>
						<button>Voir ma boîte</button>
					</div>
				</div>
				<div className="darkness" />
			</div>
		)
	}
}
