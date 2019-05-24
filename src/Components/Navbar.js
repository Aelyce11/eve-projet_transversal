import React, { Component } from 'react'
import './Navbar.css'

export default class Navbar extends Component {
    render() {
        return (
                <div className="navbar">
                  <a href="home">Les boîtes</a>
                  <a href="home">Les cups</a>
                  <a href="home">Les serviettes</a>
                  <a href="home">Les tampons</a>
                  <a href="home">Le confort</a>
                  <a href="home">Les marques</a>
                  <a href="home">Le blog</a>
                  <a href="home">Les guides</a>
                </div>
        )
    }
}
