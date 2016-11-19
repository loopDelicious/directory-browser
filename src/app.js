import React, { Component } from 'react';
import './app.css';

class App extends Component {

  render() {

    var thing = 'Joyce';

    return (
      <div className="App">
        <p className="intro">
          Hello {thing}
        </p>
      </div>
    );
  }
}

export default App;

