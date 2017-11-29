import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import LoginPage from "./containers/LoginPage"
import RegisterPage from "./containers/RegisterPage"
import Header from "./containers/Header"
import dataTablePage from "./containers/dataTablePage"




class App extends Component {
   render() {
      return (
         <Router>
            <div>
               <Header />
               <hr />
               
               <Switch>
                  <Route exact path='/login' component={LoginPage} />
                  <Route exact path='/register' component={RegisterPage} />
                  <Route exact path='/dataTable' component={dataTablePage} />
                  
               </Switch>
            </div>
         </Router>
      );
   }
}

export default App;
