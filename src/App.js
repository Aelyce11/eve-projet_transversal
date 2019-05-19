import React, { Component } from 'react'
import Home from './Components/Home'
import Blog from './Components/Blog'
import Header from './Components/Header/Header'
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {
	render() {
		return (
			<div>
				<Router>
					<Header />
					<Route exact path="/blog" component={Blog} />
					<Route exact path="/" component={Home} />
				</Router>
			</div>
		)
	}
}

export default App
