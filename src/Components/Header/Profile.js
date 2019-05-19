import React, { Component } from 'react'
import icon_profile from '../../Pictures/header/icons/profile.svg'

export default class Profile extends Component {
	constructor(props) {
		super(props)
		this.state = { addClass: false }
	}
	toggle() {
		this.setState({ addClass: !this.state.addClass })
	}
	render() {
		let profileClass = [ 'profileButton' ]
		let dispClass = [ 'bubble' ]
		if (this.state.addClass) {
			profileClass.push('disp')
			dispClass.push('unfold')
		}
		return (
			<div className={profileClass.join(' ')}>
				<button for="profile" onClick={this.toggle.bind(this)}>
					<img src={icon_profile} alt="Mon panier" />
				</button>
				<p>Ma box</p>
				<div className={dispClass.join(' ')}>I WORK</div>
			</div>
		)
	}
}
