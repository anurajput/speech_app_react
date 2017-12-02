import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import {LoginPage} from "./containers/LoginPage"
import RegisterPage from "./containers/RegisterPage"
import Header from "./containers/Header"
import dataTablePage from "./containers/dataTablePage"
import getAPI from "./containers/getApi"

import {connect} from 'react-redux';


class App extends Component {
   render() {
      return (
         <Router>
            <div>
               <Header />
               <hr />
               
               <Switch>
                  <Route exact path='/user_login' component={LoginPage} />
                  <Route exact path='/register' component={RegisterPage} />
                  <Route exact path='/dataTable' component={dataTablePage} />
                  <Route exact path='/recordVoice' component={getAPI} />
                   
               </Switch>
            </div>
         </Router>
      );
   }
}//App

//export default App;

function mapStateToProps(state) {
  const {alert} = state;
  return {
    alert,
  };
}

const connectedApp = connect(mapStateToProps)(App);
export {connectedApp as App};