import React, { Component } from 'react';
import {createBrowserHistory} from 'history';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Link } from 'react-router-dom';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Home from './components/Home';

const appHistory = {
  basename: process.env.PUBLIC_URL
};
const history = createBrowserHistory(appHistory);
function App() {
  return (
    <div className="page">
      <Router>  
            <Route exact path='/' component={ Home } />  
    </Router>  
    </div> 
  );
}

export default App;
