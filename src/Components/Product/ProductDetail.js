import React, { Component } from 'react'

export default class ProductDetail extends Component {
	render() {
		const product = {
			img: '/media/products/box/premierefois-product.png',
			name: 'Box 1ère fois',
			note: '/media/notes/heart35.svg',
			type: 'Box ève',
			desc:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dictum metus id ex ornare, a fermentum turpis congue. Sed interdum, leo sed dapibus vulputate, tortor ipsum blandit diam, non congue ante quam non ipsum.',
			price: 17.99
		}
		return (
			<div className="productDetail">
				<img src={product.img} />
				<div>
					<span>
						<h1>{product.name}</h1>
						<img src={product.note} />
					</span>
					<h3>{product.type}</h3>
					<p>{product.desc}</p>
					<span className="productPrice">{product.price}&euro;</span>
				</div>
			</div>
		)
	}
}
