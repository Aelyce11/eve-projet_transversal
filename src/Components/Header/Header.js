import './header.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../Pictures/logo/logo-color_full.svg';

import Accessibility from './Accessibility/Accessibility';
import Searchbar from './Searchbar/Searchbar';
import Box from './Popups/Box';
import Bag from './Popups/Bag';
import Profile from './Popups/Profile';

export default class Header extends Component {
	handleClick = (e) => {};
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
		);
	}
}
