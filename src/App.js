import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  
  const heros = ['Razzak', 'Jashim', 'Alamgir', 'Salman', 'Manna', 'Bappi'];
  
  const products = [
    {name: 'Photoshop', price:'$90.99'},
    {name: 'Illustrator', price:'$60.99'},
    {name: 'PDF Reader', price:'$6.99'}
  ];
  
  
  return (
    <div className="App">
    <header className="App-header">
    <p>I am a React Person</p>
    <Counter></Counter>
    <Users></Users>
    <ul>
      {
        heros.map( hero => <li>{hero}</li> )
      }
      {
        products.map( product => <li>{product.name}</li> )
      }
    </ul>
    {
      products.map( product => <Product product={product}></Product> )
    }
    
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


function Counter() {
  const [count, setCount] = useState(10);
  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);
  
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  );
}

function Users() {
  const [users , setUsers] = useState([]);
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => setUsers(data))
  });
  return (
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  );
}


    
export default App;
      