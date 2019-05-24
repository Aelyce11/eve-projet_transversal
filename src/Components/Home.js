import React, { Component } from 'react';
import WhySubcribe from './WhySubscribe';
import mabox from '../Pictures/home/mabox.png';
import './Home.css';

export default class Home extends Component {
	render() {
		return (
			<div>
				<img src={mabox} />
				<WhySubcribe />
				<div className="text1">
					<p className="avantages">Plein d’avantages pour</p>
					<p className="euro">2,99€</p>
					<p className="seulement">seulement</p>
					<p className="engagement">et sans engagement*</p>
				</div>

				<div className="green_container">
					<p>Les produits préférés</p>
				</div>
				<div className="green_container">
					<p>Les boxs par Ève</p>
				</div>
				<div className="green_container">
					<p>Les valeurs d’Ève</p>
				</div>
				<div className="green_container">
					<p>La communautève</p>
				</div>
				<div className="green_container">
					<p>Un peu de lecture ?</p>
				</div>
			</div>
		);
	}
}
