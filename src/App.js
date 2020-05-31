import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  
  return (
    <div className="App">
    <header className="App-header">
    <p>I am a React Person</p>
    <Person name="Rubel" food="Fish"></Person>
    <Person name="Sakil" food="Chicken"></Person>
    <Person name="Zahid" food="Egg"></Person>
    </header>
    </div>
    );
  }
  
  function Person(properties) {
    console.log(properties);
    
    const personStyle = {
      border:"2px solid red",
      margin: "10px",
      width: "400px"
    }
    return (
    <div style={personStyle}>
      <h1>Name: {properties.name}</h1>
      <h3>Loves to eat {properties.food}</h3>
    </div>
    );
  }
  
  export default App;
  