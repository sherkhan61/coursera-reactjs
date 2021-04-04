import React, { Component } from 'react';
import { Navbar, NavbarBrand } from "reactstrap";
import './App.css';


class App extends Component{

  constructor(props){
    super(props);

  }

  render(){

    return(
        <div>
          <Navbar dark color="primary">
            <div className="container">
              <NavbarBrand href="/"> Ristorante Con Fusion </NavbarBrand>
            </div>
          </Navbar>
        </div>
    );

  }

}

export default App;
