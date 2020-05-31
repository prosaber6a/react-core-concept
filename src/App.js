import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  
  const products = [
    {name: 'Photoshop', price:'$90.99'},
    {name: 'Illustrator', price:'$60.99'},
    {name: 'PDF Reader', price:'$6.99'}
  ];
  
  return (
    <div className="App">
    <header className="App-header">
    <p>I am a React Person</p>
    <Product product={products[0]}></Product>
    <Product product={products[1]}></Product>
    <Product product={products[2]}></Product>
    <Person name="Rubel" food="Fish"></Person>
    <Person name="Sakil" food="Chicken"></Person>
    <Person name="Zahid" food="Egg"></Person>
    </header>
    </div>
    );
  }
  
  function Product (props) {
    const productStyle = {
      border: '1px solid gray',
      borderRadius: '5px',
      backgroundColor: 'lightgray',
      height: '250px',
      width: '200px',
      float: 'left'
    }
    const {name, price} = props.product;
    return (
      <div style={productStyle}>
      <h3>Name: {name}</h3>
      <h5>{price}</h5>
      <button>Buy now</button>
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
      