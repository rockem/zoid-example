import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <header>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <button onClick={() => this.setState({showModal: true})}>Add Work Log</button>
      {/*<Modal open={this.state.showModal}>...</Modal>*/}
    </div>
  );
}

export default App;
