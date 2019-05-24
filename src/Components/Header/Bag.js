import React, { Component } from 'react'
import icon_bag from '../../Pictures/header/icons/bag.svg'

export default class Bag extends Component {
	constructor(props) {
		super(props)
		this.state = { addClass: false }
	}
	toggle() {
		this.setState({ addClass: !this.state.addClass })
	}
	render() {
		let bagClass = [ 'bagButton' ]
		let dispClass = [ 'bubble' ]
		if (this.state.addClass) {
			bagClass.push('disp')
			dispClass.push('unfold')
		}
		return (
			<div className={bagClass.join(' ')}>
				<button for="bag" onClick={this.toggle.bind(this)}>
					<img src={icon_bag} alt="Mon panier" />
				</button>
				<p>Mon panier</p>
				<div className={dispClass.join(' ')}>I WORK</div>
			</div>
		)
	}
}
