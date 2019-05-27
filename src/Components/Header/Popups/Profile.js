import React, { Component } from 'react'
import api from '../../Api'

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
			content: 'center',
      lastname: "",
      firstname: "",
      email: "",
      password: ""
		}
	}
	toggle() {
		this.setState({ addClass: !this.state.addClass })
	}
	setContent(name) {
		this.setState({ content: name })
	}

  register() {
      api.register(this.state.lastname, this.state.firstname, this.state.email, this.state.password)
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
						<img src={icon_profile} alt="Mon profil" />
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
						<img src={icon_profile} alt="Mon profil" />
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
											<img src={next} alt="Se connecter" />
										</button>
									</div>
								</form>
								<span>Ou</span>
								<button className="fb-button">
									<img src={facebook} alt="Se connecter avec Facebook" />
									Se connecter avec Facebook
								</button>
								<button className="ggl-button">
									<img src={google} alt="Se connecter avec Google" />
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
						<img src={icon_profile} alt="Mon profil" />
					</button>
					<div className={dispClass.join(' ')}>
						<h3>Mon espace</h3>
						<div className="content">
							<div className="inscription">
								<form>
									<fieldset>
										<legend>Nom : </legend>
										<input type="text" placeholder="DUJARDIN" value={this.state.lastname} onChange={(e) => { this.setState({lastname: e.target.value}) }}/>
									</fieldset>
									<fieldset>
										<legend>Prénom : </legend>
										<input type="text" placeholder="Ève" value={this.state.firstname} onChange={(e) => { this.setState({firstname: e.target.value}) }} />
									</fieldset>
									<fieldset>
										<legend>Adresse mail : </legend>
										<input type="email" placeholder="eve.dujardin@gmail.com" value={this.state.email} onChange={(e) => { this.setState({email: e.target.value}) }} />
									</fieldset>
									<fieldset>
										<legend>Mot de passe : </legend>
										<input type="password" placeholder="&bull; &bull; &bull; &bull; &bull; &bull; &bull; &bull;" value={this.state.password} onChange={(e) => { this.setState({password: e.target.value}) }} />
										<img src={info} className="form-info" />
									</fieldset>
									<div>
										<a href="#" onClick={() => this.setContent('connection')}>
											Déjà membre ? Je me connecte
										</a>
										<button onClick={() => { this.register() } }>
											Inscription
											<img src={next} alt="S'inscrire" />
										</button>
									</div>
								</form>
								<span>Ou</span>
								<button className="fb-button">
									<img src={facebook} alt="Se connecter avec Facebook" />
									Se connecter avec Facebook
								</button>
								<button className="ggl-button">
									<img src={google} alt="Se connecter avec Google" />
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
