import React from 'react';
import './App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1><span role="img" aria-label="bird emoji">🦉</span> Watcher!</h1>
        <button className="btn btn-info">
          <i className="fas fa-kiwi-bird"></i> Btn Here <i className="fas fa-kiwi-bird fa-flip-horizontal"></i>
        </button>
      </div>
    );
  }
}

export default App;
