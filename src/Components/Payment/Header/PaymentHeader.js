import React, { Component } from 'react'
import Accessibility from '../../Header/Accessibility/Accessibility'
import logo from '../../../Pictures/logo/logo-color_full.svg'


export default class PaymentHeader extends Component {

  render() {
    return(
      <header className="payment-header">
        <Accessibility />
        <div className="statement-container">
          <div className="long-line"></div>

          <div className="one">
            <div class="circle">
              1
            </div>
            <span>PANIER</span>
          </div>

          <div className="line"></div>

          <div className="two">
            <div class="circle">
              2
            </div>
            <span>LIVRAISON</span>
          </div>

          <div className="line"></div>

          <div className="three">
            <div class="circle">
              3
            </div>
            <span>PAIMENT</span>
          </div>

          <div className="long-line"></div>
        </div>
        <div>
          <img src={logo} alt="logo" class="logo" />
        </div>
      </header>
    )
  }
}