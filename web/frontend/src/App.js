import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  function testApiConnection() {
    const url = `${process.env.REACT_APP_API_ROOT}/api/test/`;
    axios.get(url)
      .then(response => {
        alert(response.data['detail']);
      });
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={testApiConnection}>Click to test API integration.</button>
      </header>
    </div>
  );
}

export default App;
