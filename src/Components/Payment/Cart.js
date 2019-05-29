import React, { Component } from 'react';
import Header from './Header/PaymentHeader'
import ProductCard from '../Product/ProductCard'
import Banner from '../utilities/Banner'

import cartProduct from '../../Pictures/products/natracare_serviette_naturelle_ultra_extra_suoer.png'
import trash from '../../Pictures/icons/red/trash-stroke.svg'
import arrow from '../../Pictures/icons/darkgreen/arrow_right.svg'
import separation from '../../Pictures/others/separation.svg'


export default class Cart extends Component {

  render() {
    return(
      <div>
        <Header />
        <div className="step-one-payment">
            <a href="" ><img className="arrow" src={arrow} /> Continuer mes achats</a>

          <div class="cart">
            <span>Mon panier :</span>
            <div className="cart-container">
              <div className="cart-content">
                <img className="cart-product" src={cartProduct} alt="produit" />
                <main>
                  <p>Quantité : </p>
                  <div className="input_number">
                    <input type="number" />
                    <button disabled>-</button>
                    <span>1</span>
                    <button>+</button>
                  </div>
                </main>
                <div class="cart-right">
                  <button><img src={trash} alt="supprimer" /></button>
                  <span>x2 <br /> 35,80€</span>
                </div>
              </div>
            </div>
          </div>

          <div className="recap-container">
            <span>Récapitulatif :</span>
            <div className="recap-cart">
              <div className="recap-price">
                <span>PANIER(2)</span><span>71,60€</span>
              </div>
              <p>-------------------------------------------------</p>
              <div className="recap-total">
                <span>TOTAL TTC</span><span>71,60€</span>
              </div>
            </div>

            <button className="button-bordered">
						  Ajouter au panier
					  </button>
          </div>

          <div className="suggest-container">
            <div className="suggest-product">
              <span>Suggestion spéciale pour vous :</span>
              <div className="suggest-card">
                <ProductCard />
                <ProductCard />
              </div>
            </div>

            <img className="separation" src={separation} alt="" />
          </div>
          <Banner />
        </div>
      </div>

    )
  }
}