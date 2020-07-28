import React, {Component} from 'react';
//  
import Dashboard from './components/Dashboard'
import './App.css';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
import Student from './components/Student';
import Nav from './components/Navbar';

const App = () => {
  console.log('start App');
  return (
      <div>
        <Router>
          <Nav/>
          <Route 
            path="/Evelyn" 
            render=
              {
                (props) => (<Student {...props} name={'Evelyn'} />)
              }
          />
          <Route 
            path="/Aranka" 
            render=
              {
                (props) => (<Student {...props} name={'Aranka'} />)
              }
          />
          <Route 
            path="/Floris" 
            render=
              {
                (props) => (<Student {...props} name={'Floris'} />)
              }
          />
          <Route 
            path="/Hector" 
            render=
              {
                (props) => (<Student {...props} name={'Hector'} />)
              }
          />
          <Route 
            path="/Martina" 
            render=
              {
                (props) => (<Student {...props} name={'Martina'} />)
              }
          />
          <Route 
            path="/Maurits" 
            render=
              {
                (props) => (<Student {...props} name={'Maurits'} />)
              }
          />
          <Route 
            path="/Rahima" 
            render=
              {
                (props) => (<Student {...props} name={'Rahima'} />)
              }
          />
          <Route 
            path="/Sandra" 
            render=
              {
                (props) => (<Student {...props} name={'Sandra'} />)
              }
          />
          <Route 
            path="/Wietske" 
            render=
              {
                (props) => (<Student {...props} name={'Wietske'} />)
              }
          />
          <Route 
            path="/Storm" 
            render=
              {
                (props) => (<Student {...props} name={'Storm'} />)
              }
          />

          <Dashboard/>
        </Router>
      </div>
      
  
  );
};
export default App;
