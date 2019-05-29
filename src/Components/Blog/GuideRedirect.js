import React, { Component } from 'react'

export default class Product extends Component {
	render() {
		return (
			<aside className="guideRedirect">
				<h5>Un petit Guide ?</h5>
				<div>
					<a href="/">Petit guide : Quelle protection choisir ?</a>
					<a href="/">Petit guide : Qu'est-ce-que l'hygiène intime ?</a>
				</div>
			</aside>
		)
	}
}
