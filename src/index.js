import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Customers from './Files/Customers';
import Navbar from './Files/Navbar';
import Rentals from './Files/Rentals';
import Login from './Files/Login';

ReactDOM.render(
  <Router>
    <Navbar/>
    <Switch>
      <Route path="/customers">
        <Customers />
      </Route>

      <Route path="/rentals">
        <Rentals/>
      </Route>

      <Route path="/login">
        <Login/>
      </Route>

      <Route path="/">
        <App />
      </Route>
    </Switch>
  </Router>,
  
  
  
  
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

