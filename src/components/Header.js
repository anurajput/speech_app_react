import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import {Loggedin} from "./Loggedin"
import {Loggedout} from "./Loggedout"

import {connect} from 'react-redux';

export default class Header extends React.Component {


  // ------------------------------------------------
  // constructor
  // ------------------------------------------------
  constructor(props) {
      super(props);
      //this.state = {};  
  }

  // ------------------------------------------------
  // render UI
  // ------------------------------------------------
  render() {
    const {loggedIn} = this.props;
    console.log("Header got loggedIn: " + loggedIn);

    return (
         <div>
            <MuiThemeProvider>
              <div>
                <AppBar
                  title="SPEECH TEST"
                  showMenuIconButton={true}
                  iconElementRight={loggedIn ? <Loggedin /> :  <Loggedout />}
                />

              </div>
            </MuiThemeProvider>
          </div>
      );
   }
}//Header


function mapStateToProps(state) {
  //const {alert,user,loggedIn} = state;
  //console.log("--- header got state: " + JSON.stringify(state));

  return state.authentication;
}

const connectedHeaderPage = connect(mapStateToProps)(Header);
export {connectedHeaderPage as Header};