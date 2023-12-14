import React, { Component } from 'react'

import './QuizComponent.css'

export default class QuizComponent extends Component {
  render() {
    return (
      <div class='question'>
        <h1 class='que'>Question</h1>
        <h5>1 of 15</h5>
        <h3>Which is the only mammal that can jump?</h3>
        <div class='options'>
            <button class='opt-btn'>Dog</button>
            <button class='opt-btn'>Elephant</button>
            <button class='opt-btn'>Goat</button>
            <button class='opt-btn'>Lion</button>
        </div>
        <div class='sub'>
            <button class='submit-1'>Previous</button>
            <button class='submit-2'>Next</button>
            <button class='submit-3'>Quit</button>
        </div>
      </div>
    )
  }
}