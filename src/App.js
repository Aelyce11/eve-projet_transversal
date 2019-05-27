import React, { Component } from 'react'
import Home from './Components/Home'
import Blog from './Components/Blog'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'

import NavBulma from './Components/Backoffice/Navbar'
import Dashboard from './Components/Backoffice/Dashboard'
import Orders from './Components/Backoffice/Orders'
import Customers from './Components/Backoffice/Customers'
import Products from './Components/Backoffice/Products'
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
              <Route path="/" component={Header} />
            </Switch>
          </Route>
          
					<Route exact path="/" component={Home} />
					<Route exact path="/blog" component={Blog} />

          <Route path="/">
            <Switch>
              <Route path="/admin/" />
              <Route path="/" component={Footer} />
            </Switch>
          </Route>

          <Route exact path="/admin/" component={Dashboard} />
          <Route exact path="/admin/orders" component={Orders} />
          <Route exact path="/admin/customers" component={Customers} />
          <Route exact path="/admin/products" component={Products} />

				</Router>
			</div>
		)
	}
}

export default App
