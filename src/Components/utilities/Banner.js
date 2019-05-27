import React, { Component } from 'react'

import protections from '../../Pictures/others/greenBanner/protections.svg'
import natural from '../../Pictures/others/greenBanner/natural.svg'
import secure from '../../Pictures/others/greenBanner/secure.svg'
import shipping from '../../Pictures/others/greenBanner/shipping.svg'
import cookies from '../../Pictures/others/greenBanner/cookies.svg'

export default class Article extends Component {
	render() {
		return (
			<div className="greenBanner">
				<div>
					<img src={protections} />
					<p>Des produits de qualité que votre intimité remercie et votre santé aussi !</p>
				</div>
				<div>
					<img src={natural} />
					<p>La garantie du respect de la nature est dans la nôtre et la planète apprécie</p>
				</div>
				<div>
					<img src={secure} />
					<p>Le paiement est 100% sécurisé chez Ève, réglez avec votre carte ou votre Paypal</p>
				</div>
				<div>
					<img src={shipping} />
					<p>Faites vous livrer dans les plus brefs délais, et même quand vous voulez</p>
				</div>
				<div>
					<img src={cookies} />
					<p>Vous n’êtes pas fichée, chez Ève, on a une boîte à cookies, mais ce sont les vôtres !</p>
				</div>
			</div>
		)
	}
}
