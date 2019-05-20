import React, { Component } from 'react'
import icon_access from '../../Pictures/header/icons/accessibility_white.svg'

export default class Accessibility extends Component {
	constructor(props) {
		super(props)
		this.state = { addClass: false }
	}
	toggle() {
		this.setState({ addClass: !this.state.addClass })
	}
	render() {
		let accessClass = [ 'accessButton' ]
		let dispClass = [ 'bubble' ]
		if (this.state.addClass) {
			accessClass.push('disp')
			dispClass.push('unfold')
		}
		return (
			<div className={accessClass.join(' ')}>
				<button for="access" onClick={this.toggle.bind(this)}>
					<img src={icon_access} alt="Menu d'accessibilité" />
				</button>
				<div className={dispClass.join(' ')}>I WORK</div>
			</div>
		)
	}
}
