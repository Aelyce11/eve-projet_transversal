import React, { Component } from 'react'
import brand from '../../Pictures/logo/logo-color_leaf_no_bg.png'
// import './bulma.min.css'

export default class NavBulma extends Component {
	componentDidMount() {
		const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0)

		// Check if there are any navbar burgers
		if ($navbarBurgers.length > 0) {
			// Add a click event on each of them
			$navbarBurgers.forEach((el) => {
				el.addEventListener('click', () => {
					// Get the target from the "data-target" attribute
					const target = el.dataset.target
					const $target = document.getElementById(target)

					// Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
					el.classList.toggle('is-active')
					$target.classList.toggle('is-active')
				})
			})
		}
	}

	render() {
		return (
			<div className="container">
				<nav class="navbar" role="navigation" aria-label="main navigation">
					<div class="navbar-brand">
						<a class="navbar-item" href="/">
							<img src={brand} />
						</a>

						<a
							role="button"
							class="navbar-burger burger"
							aria-label="menu"
							aria-expanded="false"
							data-target="navbarBasicExample"
						>
							<span aria-hidden="true" />
							<span aria-hidden="true" />
							<span aria-hidden="true" />
						</a>
					</div>

					<div id="navbarBasicExample" class="navbar-menu">
						<div class="navbar-start">
							<a class="navbar-item" href="/admin">
								Dashboard
							</a>

							<div class="navbar-item has-dropdown is-hoverable">
								<a class="navbar-link">More</a>

								<div class="navbar-dropdown">
									<a class="navbar-item">Orders</a>
									<a class="navbar-item">Products</a>
									<a class="navbar-item">Articles</a>
									<a class="navbar-item" href="/admin/customers">
										Customers
									</a>
								</div>
							</div>
						</div>
					</div>
				</nav>
			</div>
		)
	}
}
