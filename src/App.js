import React from 'react'
import './App.css';
import AppRouter from './config/router'
import { Component } from 'react';

class App extends Component{
  render(){
    return(
      <div>
        <AppRouter/>
      </div>
    );
  }
}
export default App;
