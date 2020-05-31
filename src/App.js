import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let person = {
    name : "Dr. Mahfuzur Rahman",
    job: "Singer"
  };
  let person2 = {
    name : "Eva Rahman",
    job : "Kokil Konthi"
  };
  let style = {
    color: "red",
    backgroundColor: "yellow"
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2 style={{color:"navy", backgroundColor:"yellow"}}>My Heading: {person.name + " " +person.job}</h2>
        <h2 style={style}>My Heading: {person2.name + " " +person2.job}</h2>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>My First React App</p>
      </header>
    </div>
  );
}

export default App;
