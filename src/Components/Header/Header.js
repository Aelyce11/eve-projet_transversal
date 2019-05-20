import './header.css'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import logo from '../../Pictures/logo/logo-full.svg'

import Accessibility from './Accessibility'
import Searchbar from './Searchbar'
import Box from './Box'
import Bag from './Bag'
import Profile from './Profile'

export default class Header extends Component {
	handleClick = (e) => {}
	render() {
		return (
			<header>
				<div>
					<Accessibility />
					<Searchbar />
				</div>
				<Link to="/">
					<img src={logo} alt="Logo" id="logo" />
				</Link>
				<div className="header-right">
					<Box />
					<Bag />
					<Profile />
				</div>
			</header>
		)
	}
}
