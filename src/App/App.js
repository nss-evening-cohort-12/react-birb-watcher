import React from 'react';
import './App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1><span role="img" aria-label="poop emoji">💩</span> Surprise!</h1>
        <button className="btn btn-info">
          <i className="fas fa-poo-storm"></i> Btn Here <i className="fas fa-poo-storm"></i>
        </button>
      </div>
    );
  }
}

export default App;
