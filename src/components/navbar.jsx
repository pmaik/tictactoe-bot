import React, { Component } from 'react';

class Navbar extends Component {
    state = {  }

    render() { 
        return ( 
            <nav className="navbar navbar-light bg-default">
                <h1 className="navbar brand" id='heading1'>Welcome to tic-tac-toe Game</h1>
            </nav>
         );
    }
}
 
export default Navbar;