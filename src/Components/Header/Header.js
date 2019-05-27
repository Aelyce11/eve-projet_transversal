import './header.css'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Navbar from './Navbar/Navbar'
import Searchbar from './Searchbar/Searchbar'
import Accessibility from './Accessibility/Accessibility'
import Box from './Popups/Box'
import Bag from './Popups/Bag'
import Profile from './Popups/Profile'

import logo from '../../Pictures/logo/logo-color_full.svg'

export default class Header extends Component {
	render() {
		return (
			<div>
				<header className="header-eve">
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
				<Navbar />
			</div>
		)
	}
}
