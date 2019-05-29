import React, { Component } from 'react'

import ProductDetail from './ProductDetail'
import AddToCart from './AddToCartPopup'
import ProductComment from './ProductComment'
import ProductMini from './ProductMini'
import ProductCard from './ProductCard'
import GuideRedirect from '../Blog/GuideRedirect'
import Banner from '../utilities/Banner'

import separation from '../../Pictures/others/separation.svg'

export default class Product extends Component {
	render() {
		return (
			<div className="productPage">
				<div>
					<ProductDetail />
					<AddToCart />
				</div>
				<div>
					<section className="productComments">
						<p>Les avis de la communautève :</p>
						<div>
							<ProductComment />
							<ProductComment />
							<ProductComment />
						</div>
					</section>
					<section className="boxContent">
						<p>Les produits :</p>
						<div>
							<ProductMini />
							<ProductMini />
							<ProductMini />
						</div>
					</section>
				</div>
				<div>
					<section className="otherProducts">
						<p>Les derniers produits pour vous :</p>
						<div>
							<ProductCard />
							<ProductCard />
							<ProductCard />
						</div>
					</section>
					<GuideRedirect />
				</div>
				<img src={separation} alt="" />
				<Banner />
			</div>
		)
	}
}
