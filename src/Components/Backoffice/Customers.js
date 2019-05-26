import React, { Component } from 'react'
import './bulma.min.css'
import api from '../Api'
import Sidebar from './Sidebar'
export default class Customers extends Component {

  constructor() {
    super()
    this.state = {
      customers: []
    }
  }

  componentDidMount() {
    api.getUsers().then(result => {
      console.log(result)
      this.setState({ customers: result })
    })
  }


  render() {
    return(
      <div className="container">
        <h1>Customers</h1>
        {/* <Sidebar /> */}
        <table class="table is-fullwidth">
          <thead>
            <tr>
              <th>id</th>
              <th>Lastname</th>
              <th>Firstname</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {this.state.customers.map(customer => {
              return (
                <tr>
                  <td>{customer.id}</td>
                  <td>{customer.lastname}</td>
                  <td>{customer.firstname}</td>
                  <td>{customer.email}</td>
                  <td>{customer.phone}</td>
                  <td>{customer.role}</td>
                </tr>
              )
            })}
            </tbody>
        </table>
      </div>
    )
  }
}