import React, { Component } from 'react'
import './WhySubscribe.css'

export default class WhySubcribe extends Component {
    render() {
        return (
                <div className="container">
                  <div className="list">
                      <div className="div1"></div>
                      <p>Pourquoi m'abonner ?</p>
                      <div className="div2"></div>
                  </div>

                    <div className="box"> Une box unique en fonction de mes besoins</div>
                    <p>Je programme ma commande à la date souhaitée</p>
                    <p>Je reçois les cadeaux mens(tr)uels.</p>
                    <a className="abonnement" href="#">Je m'abonne</a>
                </div>
        )
    }
}
