import React from 'react';

import './App.css';

import QuizComponent from './components/QuizComponent';
import ResultComponent from './components/ResultComponent';
import HomeComponent from './components/HomeComponnent';

function App() {
  return (
    <div className="App">
      <HomeComponent/>
      <QuizComponent/>
      <ResultComponent/>
    </div>
  );
}

export default App;