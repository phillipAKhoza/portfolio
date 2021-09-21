import React, {useEffect} from 'react';
import {createBrowserHistory} from 'history';
import {BrowserRouter as Router, Route} from 'react-router-dom';
// import { Link } from 'react-router-dom';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.css';
import ReactGA from 'react-ga';

const appHistory = {
  basename: process.env.PUBLIC_URL
};
const history = createBrowserHistory(appHistory);
console.log(history +" history");
function App() {
  useEffect(() => {
    ReactGA.initialize('G-9JBT1JC36G');
    ReactGA.pageview(window.location.pathname + window.location.search);
  });
  return (
    <div className="page">
      <Router basename={process.env.PUBLIC_URL} history={history}>  
          <div id="preloader">
            <div id="status">&nbsp;</div>
          </div> 
        <Route exact path='/' component={ Home } />  
    </Router>  
    </div> 
  );
}

export default App;
