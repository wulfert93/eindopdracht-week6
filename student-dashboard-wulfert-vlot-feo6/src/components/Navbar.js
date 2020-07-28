import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';
import Student from './Student';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {naam: 'leeg'};
  }
  render(){
    console.log('navbar present');
    
    const handleClickName = (e) => 
      {
        this.setState({naam: e.target.id})
        e.preventDefault();
    }
    return (
        <div>
          <h1>Nav Component h1</h1>
          <Router>
            <Link to="/Evelyn">
              <li id="Evelyn">Evelyn</li>
            </Link>
            <Link to="/Aranka">
              <li id="Aranka">Aranka</li>
            </Link>
            <Link to="/Floris">
              <li id="Floris">Floris</li>
            </Link>
            <Link to="/Hector">
              <li id="Hector">Hector</li>
            </Link>
            <Link to="/Martina">
              <li id="Martina">Martina</li>
            </Link>
            <Link to="/Maurits">
              <li id="Maurits">Maurits</li>
            </Link>
            <Link to="/Rahima">
              <li id="Rahima">Rahima</li>
            </Link>
            <Link to="/Sandra">
              <li id="Sandra">Sandra</li>
            </Link>
            <Link to="/Wietske">
              <li id="Wietske">Wietske</li>
            </Link>
            <Link to="/Storm">
              <li id="Storm">Storm</li>
            </Link>
          gekozen naam naam: {this.state.naam}
            
       
          </Router>
          {/* <Student name={this.state.naam}/> */}
        </div>
    )}
  };
  export default Nav;