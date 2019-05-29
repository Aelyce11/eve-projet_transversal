import React, { Component } from 'react'

import Popup from './PopupProductAdd'

import bag_full from '../../Pictures/icons/darkgreen/basket-full.svg'
import bag_stroke from '../../Pictures/icons/darkgreen/basket-stroke.svg'
import box from '../../Pictures/icons/darkgreen/box-stroke.svg'

export default class AddToCart extends Component {
	constructor(props) {
		super(props)
		this.state = { displayPopup: false }
	}
	toggle() {
		this.setState({ displayPopup: !this.state.displayPopup })
	}
	render() {
		let popupClass = []
		if (this.state.addClass) {
			popupClass.push('disp')
		}

		return (
			<div className="addToCart">
				<header>
					<img src={bag_full} alt="Ajouter au panier" />
					<img src={box} className="unselected" alt="Ajouter à ma box" />
				</header>

				<div>
					<span>Votre produit :</span>
					<main>
						<p>Quantité : </p>
						<div className="input_number">
							<input type="number" />
							<button disabled>-</button>
							<span>1</span>
							<button>+</button>
						</div>
					</main>
					<button className="button-bordered" onClick={this.toggle.bind(this)}>
						<img src={bag_stroke} alt="Je suis un panier" />
						Ajouter au panier
					</button>
				</div>
				<Popup className={popupClass.join('')} />
			</div>
		)
	}
}
