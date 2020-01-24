import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from "./components"; 

class App extends React.Component{
  render(){
    return(
      <HomePage firstName = "Katherine"/>
    )
  }
}

export default App;
