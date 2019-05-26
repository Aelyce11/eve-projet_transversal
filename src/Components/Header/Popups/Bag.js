import './popup.css'
import React, { Component } from 'react'
import Item from './Item/Item.js'

import icon_bag from '../../../Pictures/header/icons/bag.svg'

export default class Bag extends Component {
	constructor(props) {
		super(props)
		this.state = { addClass: false }
	}
	toggle() {
		this.setState({ addClass: !this.state.addClass })
	}
	render() {
		let bagClass = [ 'bagButton' ]
		let dispClass = [ 'bubble' ]
		if (this.state.addClass) {
			bagClass.push('disp')
			dispClass.push('unfold')
		}

		let price_total = 56.6

		return (
			<div className={bagClass.join(' ')}>
				<button for="bag" onClick={this.toggle.bind(this)}>
					<img src={icon_bag} alt="Mon panier" />
				</button>
				<div className={dispClass.join(' ')}>
					<h3>Mon panier</h3>
					<div className="content">
						<Item />
					</div>
					<div className="total">
						<div>
							<span>Total</span>
							<span>{price_total}&euro;</span>
						</div>
						<hr />
						<button>Valider mon panier</button>
					</div>
				</div>
				<div className="darkness" />
			</div>
		)
	}
}
