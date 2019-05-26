import './popup.css'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import icon_profile from '../../../Pictures/header/icons/profile.svg'
import next from '../../../Pictures/icons/darkgreen/arrow_right.svg'
import info from '../../../Pictures/icons/forms/info.svg'
import facebook from '../../../Pictures/header/facebook.svg'
import google from '../../../Pictures/header/google.svg'

export default class Profile extends Component {
	constructor(props) {
		super(props)
		this.state = {
			addClass: false,
			content: 'center'
		}
	}
	toggle() {
		this.setState({ addClass: !this.state.addClass })
	}
	setContent(name) {
		this.setState({ content: name })
	}

	render() {
		let profileClass = [ 'profileButton' ]
		let dispClass = [ 'bubble' ]
		if (this.state.addClass) {
			profileClass.push('disp')
			dispClass.push('unfold')
		}

		if (this.state.content == 'center') {
			return (
				// for center
				<div className={profileClass.join(' ')}>
					<button for="profile" onClick={this.toggle.bind(this)}>
						<img src={icon_profile} alt="Mon panier" />
					</button>
					<div className={dispClass.join(' ')}>
						<h3>Mon espace</h3>
						<div className="content">
							<div className="center">
								<div>
									<span>Déjà membre ?</span>
									<button onClick={() => this.setContent('connection')}>Connexion</button>
								</div>
								<hr />
								<div>
									<span>La petite nouvelle ?</span>
									<button onClick={() => this.setContent('inscription')}>Inscription</button>
								</div>
							</div>
						</div>
					</div>
					<div className="darkness" />
				</div>
			)
		} else if (this.state.content == 'connection') {
			return (
				// for connection
				<div className={profileClass.join(' ')}>
					<button for="profile" onClick={this.toggle.bind(this)}>
						<img src={icon_profile} alt="Mon panier" />
					</button>
					<div className={dispClass.join(' ')}>
						<h3>Mon espace</h3>
						<div className="content">
							<div className="connexion">
								<form>
									<fieldset>
										<legend>Adresse mail : </legend>
										<input type="email" placeholder="eve.dujardin@gmail.com" />
									</fieldset>
									<fieldset>
										<legend>Mot de passe : </legend>
										<input
											type="password"
											placeholder="&bull; &bull; &bull; &bull; &bull; &bull; &bull; &bull;"
										/>
									</fieldset>
									<a href="#" onClick={() => this.setContent('center')}>
										Mot de passe oublié ?
									</a>
									<div>
										<a href="#" onClick={() => this.setContent('inscription')}>
											Pas encore de compte ? Je m'inscris
										</a>
										<button>
											Connexion
											<img src={next} />
										</button>
									</div>
								</form>
								<span>Ou</span>
								<button className="fb-button">
									<img src={facebook} />
									Se connecter avec Facebook
								</button>
								<button className="ggl-button">
									<img src={google} />
									Se connecter avec Google
								</button>
							</div>
						</div>
					</div>
					<div className="darkness" />
				</div>
			)
		} else if (this.state.content == 'inscription') {
			return (
				// for inscription
				<div className={profileClass.join(' ')}>
					<button for="profile" onClick={this.toggle.bind(this)}>
						<img src={icon_profile} alt="Mon panier" />
					</button>
					<div className={dispClass.join(' ')}>
						<h3>Mon espace</h3>
						<div className="content">
							<div className="inscription">
								<form>
									<fieldset>
										<legend>Nom : </legend>
										<input type="text" placeholder="DUJARDIN" />
									</fieldset>
									<fieldset>
										<legend>Prénom : </legend>
										<input type="text" placeholder="Ève" />
									</fieldset>
									<fieldset>
										<legend>Adresse mail : </legend>
										<input type="email" placeholder="eve.dujardin@gmail.com" />
									</fieldset>
									<fieldset>
										<legend>Mot de passe : </legend>
										<input
											type="password"
											placeholder="&bull; &bull; &bull; &bull; &bull; &bull; &bull; &bull;"
										/>
										<img src={info} className="form-info" />
									</fieldset>
									<div>
										<a href="#" onClick={() => this.setContent('connection')}>
											Déjà membre ? Je me connecte
										</a>
										<button>
											Inscription
											<img src={next} />
										</button>
									</div>
								</form>
								<span>Ou</span>
								<button className="fb-button">
									<img src={facebook} />
									Se connecter avec Facebook
								</button>
								<button className="ggl-button">
									<img src={google} />
									Se connecter avec Google
								</button>
							</div>
						</div>
					</div>
					<div className="darkness" />
				</div>
			)
		}
	}
}
