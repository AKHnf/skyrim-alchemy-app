import React, { Component } from 'react';
import './App.css';

const name = 'Lieza';

class App extends Component {
  render() {
    return (
      <div class="container">
        <h1>Hello, {name}!</h1>
        <p>I just created my first React app</p>
      </div>
    )
  }
}

export default App;
