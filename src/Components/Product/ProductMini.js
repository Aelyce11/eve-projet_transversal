import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import placeholder from '../../Pictures/placeholders/product.png'
import next from '../../Pictures/icons/darkgreen/arrow_right.svg'

export default class ProductMini extends Component {
	render() {
		const product = {
			name: 'Nom du produit',
			type: 'Marque',
			price: 17.9
		}
		return (
			<div className="productMini">
				<img src={placeholder} alt={product.name} />
				<div>
					<p>{product.name}</p>
					<span className="productType">{product.type}</span>
					<span className="productPrice">{product.price}&euro;</span>
				</div>
				<Link to="/research/1">
					Voir la fiche du produit
					<img src={next} alt="" />
				</Link>
			</div>
		)
	}
}
