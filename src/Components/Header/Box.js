import React, { Component } from 'react'
import icon_box from '../../Pictures/header/icons/box.svg'

export default class Box extends Component {
	constructor(props) {
		super(props)
		this.state = { addClass: false }
	}
	toggle() {
		this.setState({ addClass: !this.state.addClass })
	}
	render() {
		let boxClass = [ 'boxButton' ]
		let dispClass = [ 'bubble' ]
		if (this.state.addClass) {
			boxClass.push('disp')
			dispClass.push('unfold')
		}
		return (
			<div className={boxClass.join(' ')}>
				<button for="box" onClick={this.toggle.bind(this)}>
					<img src={icon_box} alt="Mon panier" />
				</button>
				<p>Ma box</p>
				<div className={dispClass.join(' ')}>I WORK</div>
			</div>
		)
	}
}
