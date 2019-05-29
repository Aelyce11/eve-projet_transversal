import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import close from '../../Pictures/icons/darkgreen/close.svg'
import bag from '../../Pictures/icons/darkgreen/basket-stroke.svg'
import trash from '../../Pictures/icons/red/trash-stroke.svg'
import next from '../../Pictures/icons/darkgreen/arrow_right.svg'

export default class PopupProductAdd extends Component {
	render() {
		const product = {
			img: '/media/products/box/premierefois-product.png',
			name: 'Box 1ère fois',
			note: '/media/notes/heart35.svg',
			type: 'Box ève',
			price: 17.99,
			quantity: 1
		}

		return (
			<section className="popupProductAdd">
				<header>
					<img src={close} alt="Fermer le panier" />
					<p>Mon panier</p>
					<img src={bag} alt="Je suis un panier" />
				</header>
				<p>L'article a bien été ajouté à votre panier !</p>
				<div className="productInCart">
					<img src={product.img} alt={product.name} />
					<div>
						<p>{product.name}</p>
						<span className="productBrand">{product.type}</span>
					</div>
					<div>
						<img src={trash} alt="Retirer le produit du panier" />
						<span>x{product.quantity}</span>
						<span className="productPrice">{product.price}&euro;</span>
					</div>
				</div>
				<footer>
					<Link to="/payment/cart" className="button-bordered">
						Voir mon panier
						<img src={bag} alt="" />
					</Link>
					<button className="button-link">
						<img src={next} alt="" />
						Continuer mes achats
					</button>
				</footer>
			</section>
		)
	}
}
