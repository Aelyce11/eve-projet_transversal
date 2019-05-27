import React, { Component } from 'react'
import './Static/style.css'
import Home from './Components/Home'
import Blog from './Components/Blog/Blog'
import Article from './Components/Blog/Article'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'

import NavBulma from './Components/Backoffice/Navbar'
import Dashboard from './Components/Backoffice/Dashboard'
import Customers from './Components/Backoffice/Customers'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class App extends Component {
	render() {
		return (
			<div>
				<Router>
					<Route path="/admin/" component={NavBulma} />

					<Route path="/">
						<Switch>
							<Route path="/admin/" component={Dashboard} />
							<Route path="/" component={Header} />
						</Switch>
					</Route>

					<Route exact path="/" component={Home} />
					<Route exact path="/blog" component={Blog} />
					<Route exact path="/blog/:id" component={Article} />

					<Route path="/">
						<Switch>
							<Route path="/admin/" />
							<Route path="/" component={Footer} />
						</Switch>
					</Route>

					<Route exact path="/admin/customers" component={Customers} />
				</Router>
			</div>
		)
	}
}

export default App
