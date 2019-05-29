import React, { Component } from 'react'
import './Static/style.css'
import Home from './Components/Home'
import Blog from './Components/Blog/Blog'
import Article from './Components/Blog/Article'
import Product from './Components/Product/Product'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'

import Cart from './Components/Payment/Cart'

import NavBulma from './Components/Backoffice/Navbar'
import Dashboard from './Components/Backoffice/Dashboard'
import Orders from './Components/Backoffice/Orders'
import NewProducts from './Components/Backoffice/NewProduct'
import Products from './Components/Backoffice/Products'
import Articles from './Components/Backoffice/Articles'
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
							<Route path="/admin/" />
              <Route path="/payment/" />
							<Route path="/" component={Header} />
						</Switch>
					</Route>

					<Route exact path="/" component={Home} />
					<Route exact path="/blog" component={Blog} />
					<Route exact path="/blog/:id" component={Article} />

					{/* <Route exact path="/research" component={} /> */}
					<Route exact path="/research/:id" component={Product} />

          <Route exact path="/payment/cart" component={Cart} />

					<Route path="/">
						<Switch>
							<Route path="/admin/" />
              {/* <Route path="/payment/" /> */}

							<Route path="/" component={Footer} />
						</Switch>
					</Route>

					<Route exact path="/admin/" component={Dashboard} />
					<Route exact path="/admin/orders" component={Orders} />
					<Route exact path="/admin/products" component={Products} />
					<Route exact path="/admin/new-product" component={NewProducts} />
					<Route exact path="/admin/articles" component={Articles} />
					<Route exact path="/admin/customers" component={Customers} />
				</Router>
			</div>
		)
	}
}

export default App
