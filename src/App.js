import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Navbar from './components/navbar';
import Board from './components/board';
import './App.css';

class App extends Component {
  state = {  }
  render() { 
    return (
      <React.Fragment>
        <Navbar />
        <Board />
      </React.Fragment>
    );
  }
}
 
export default App;