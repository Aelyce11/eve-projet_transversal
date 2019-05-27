import React, { Component } from 'react'

export default class Products extends Component {

  render() {
    return(
      <div className="container">
      <h1>Products</h1>
      <table class="table is-fullwidth">
          <thead>
            <tr>
              <th>id</th>
              <th>Image</th>
              <th>Name</th>
              <th>Company</th>
              <th>Category</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>a</td>
              <td>a</td>
              <td>a</td>
              <td>a</td>
              <td>a</td>
              <td>a</td>
              <td>a</td>
              <td><a class="button is-primary">Edit</a></td>
            </tr>
          </tbody>
      </table>
      </div>
    )
  }
}