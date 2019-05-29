import React, { Component } from 'react';
import Header from './Header/PaymentHeader'
import ProductCard from '../Product/ProductCard'
import Banner from '../utilities/Banner'

import cartProduct from '../../Pictures/products/natracare_serviette_naturelle_ultra_extra_suoer.png'
import separation from '../../Pictures/others/separation.svg'


export default class Cart extends Component {

  render() {
    return(
      <div>
        <Header />
        <div className="step-one-payment">
            <a href="">Continuer mes achats</a>

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
                  <img src="" alt="supprimer" />
                  <span>x2 <br /> 35,80€</span>
                </div>
              </div>
            </div>
          </div>

          <div className="suggest-product">
            <span>Suggestion spéciale pour vous :</span>
            <div className="suggest-container">
              <ProductCard />
              <ProductCard />
            </div>
          </div>
          <img className="separation" src={separation} alt="" />
          <Banner />
        </div>
      </div>

    )
  }
}