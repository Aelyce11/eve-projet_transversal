import React, { Component } from 'react'

import bag_full from '../../Pictures/icons/darkgreen/basket-full.svg'
import bag_stroke from '../../Pictures/icons/darkgreen/basket-stroke.svg'
import box from '../../Pictures/icons/darkgreen/box-stroke.svg'

export default class AddToCart extends Component {
	render() {
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
					<button className="button-bordered">
						<img src={bag_stroke} alt="Je suis un panier" />
						Ajouter au panier
					</button>
				</div>
			</div>
		)
	}
}
