import React, { Component } from 'react'
import './bulma.min.css'

export default class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <div className="container">
        <h1>Dashboard</h1>
          <nav class="level">
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">Tweets</p>
                <p class="title">3,456</p>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">Following</p>
                <p class="title">123</p>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">Followers</p>
                <p class="title">456K</p>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">Likes</p>
                <p class="title">789</p>
              </div>
            </div>
          </nav>
        </div>
      </div>
    )
  }
}
