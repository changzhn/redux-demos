import React, { Component } from 'react';
import Demo1 from './demos/demo1';
import Demo2 from './demos/demo2';
import Demo2_1Provider from './demos/demo2.1-provider';
import Demo3Provider from './demos/demo3-provider';
import Demo4Provider from './demos/demo4-provider';
import Demo5Provider from './demos/demo5-provider';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Demo1 /> */}
        {/* <Demo2 /> */}
        <Demo2_1Provider />
        {/* <Demo3Provider /> */}
        {/* <Demo4Provider /> */}
        {/* <Demo5Provider /> */}
      </div>
    );
  }
}

export default App;
