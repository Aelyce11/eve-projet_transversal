import './footer.css'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import icon_facebook from '../../Pictures/icons/white/social-facebook.svg'
import icon_instagram from '../../Pictures/icons/white/social-instagram.svg'
import icon_twitter from '../../Pictures/icons/white/social-twitter.svg'

export default class Footer extends Component {
	render() {
		return (
			<footer>
				<div>
					<h2>Transparence</h2>
					<ul>
						<li>
							<Link to="/">C.G.U</Link>
						</li>
						<li>
							<Link to="/">C.G.V</Link>
						</li>
						<li>
							<Link to="/">Mentions Légales</Link>
						</li>
						<li>
							<Link to="/">Politique de protection des données personnelles</Link>
						</li>
						<li>
							<Link to="/">Charte produits</Link>
						</li>
					</ul>
				</div>
				<div>
					<h2>Service</h2>
					<ul>
						<li>
							<Link to="/">L'abonnement</Link>
						</li>
						<li>
							<Link to="/">La box personnalisée</Link>
						</li>
						<li>
							<Link to="/blog">Le blog</Link>
						</li>
						<li>
							<Link to="/">FAQ - Aide</Link>
						</li>
						<li>
							<Link to="/">Accessibilité</Link>
						</li>
					</ul>
				</div>
				<div>
					<div>
						<h2>Reste aux nouvelles</h2>
						<formarea id="newsletter">
							<label for="newsletter">Adresse mail :</label>
							<input type="text" />
							<button>OK!</button>
						</formarea>
					</div>
					<div>
						<h2>Rejoins la communautève !</h2>
						<div>
							<Link to="https://www.facebook.com/">
								<img src={icon_facebook} />
							</Link>
							<Link to="https://www.instagram.com/">
								<img src={icon_instagram} />
							</Link>
							<Link to="https://www.twitter.com/">
								<img src={icon_twitter} />
							</Link>
						</div>
					</div>
				</div>
			</footer>
		)
	}
}
