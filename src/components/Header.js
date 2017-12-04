import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import {Loggedin} from "./Loggedin"
import {Loggedout} from "./Loggedout"

import {connect} from 'react-redux';

export default class Header extends React.Component {
  
  render() {
    var user = JSON.parse(localStorage.getItem('user'));
    return (
         <div>
            <MuiThemeProvider>
              <div>
                <AppBar
                  title="SPEECH TEST"
                  iconElementLeft={<IconButton><NavigationClose /></IconButton>}
                  iconElementRight={user ?<Loggedin /> :  <Loggedout />}
                />

              </div>
            </MuiThemeProvider>
          </div>
      );
   }
}//Header


function mapStateToProps(state) {
  const {alert,user} = state;
  return {
    alert,user
  };
}

const connectedHeaderPage = connect(mapStateToProps)(Header);
export {connectedHeaderPage as Header};