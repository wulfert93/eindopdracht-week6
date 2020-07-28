import React from 'react';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';
import Student from './Student';

const Nav = () => {
    console.log('navbar present');
    return (
        <div>
          <h1>Nav Component h1</h1>
          <Router>
          <Link to={{
              pathname:'/Evelyn',
              aboutProps:{name: 'people'}
          }}>
            {/* <li onClick={handleClickEvlyn}>Evelyn</li> */}
            <li>Evelyn</li>
          </Link>
          </Router>
        </div>
        
    
    );
  };
  export default Nav;