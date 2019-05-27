import React, { Component } from 'react'

import product_placeholder from '../../../../Pictures/placeholders/product.png'
import cross from '../../../../Pictures/icons/darkgreen/close.svg'

export default class Item extends Component {
	render() {
		let infos = {
			name: 'Miss Cup 200',
			desc: 'Ma super cup',
			quantity: '2',
			price: '32.80'
		}
		return (
			<div className="cart_item">
				<img src={product_placeholder} alt={infos.name} />
				<div>
					<span>{infos.name}</span>
					<span className="description">{infos.desc}</span>
				</div>
				<span>x{infos.quantity}</span>
				<span>{infos.price}&euro;</span>
				<button>
					<img src={cross} alt="Retirer du panier" />
				</button>
			</div>
		)
	}
}
