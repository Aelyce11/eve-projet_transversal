import React, { Component } from 'react'

export default class ProductCard extends Component {
	render() {
		const product = {
			img: '/media/products/natracare/serviette_ultra_super_plus.png',
			note: '/media/notes/heart35.svg',
			name: 'Serviettes ultra super plus',
			brand: 'Natracare',
			price: 17.99
		}

		return (
			<div className="productCard">
				<img src={product.img} />
				<div>
					<img src={product.note} />
					<div>
						<p>{product.name}</p>
						<span className="productBrand">{product.brand}</span>
					</div>
					<span className="productPrice">{product.price}&euro;</span>
				</div>
			</div>
		)
	}
}
