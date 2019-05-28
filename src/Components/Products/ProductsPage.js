import React, { Component } from 'react'

export default class ProductPage extends Component {

  constructor() {
    super()

    this.state = {
      products: []
    }
  }

  componentDidMount() {
    api.getProductById().then(result => {
      this.setState({ products: result })
    })
  }

  render() {
    return (
      <div>
      {this.state.products.map(product => {
        return(
          
        )
      })}
      </div>
    )
  }
}