import React, { Component } from 'react';
import Demo1 from './demos/demo1';
import Demo2 from './demos/demo2';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Demo1 />
        <Demo2 />
      </div>
    );
  }
}

export default App;
