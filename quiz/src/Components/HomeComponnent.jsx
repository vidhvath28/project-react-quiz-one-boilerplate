import React, { Component } from 'react'

import './HomeComponent.css'

export default class HomeComponent extends Component {
  render() {
    return (
      <div class='home'>
        <h1 class='quiz'>Quiz App</h1>
        <button class="play">Play</button>
      </div>
    )
  }
}