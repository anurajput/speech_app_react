import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {LoginPage} from "./containers/LoginPage"
import {RegisterPage} from "./containers/RegisterPage"
import dataTablePage from "./containers/dataTablePage"
import {GetAPIPage} from "./containers/getApi"

import {connect} from 'react-redux';


class Routes extends Component {
   render() {
      return (
         <Router>
            <div>
              <Switch>
                  <Route exact path='/user_login' component={LoginPage} />
                  <Route exact path='/register' component={RegisterPage} />
                  <Route exact path='/dataTable' component={dataTablePage} />
                  <Route exact path='/getAPI' component={GetAPIPage} />
                   
              </Switch>
            </div>
         </Router>
      );
   }
}//Routes


function mapStateToProps(state) {
  const {alert} = state;
  return {
    alert,
  };
}

const connectedRoutes = connect(mapStateToProps)(Routes);
export {connectedRoutes as Routes};