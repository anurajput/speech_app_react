import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';

import {connect} from 'react-redux';
import {userActions} from '../actions';





class Loggedin extends React.Component {
  static muiName = 'FlatButton';

// ------------------------------------------------
  // constructor
  // ------------------------------------------------
  constructor(props){
    super(props);

    this.state = {     
     
    }

    this.handleLogout = this.handleLogout.bind(this);
    
  }

  handleLogout(e) {
    console.log("handleLogout");
    const {dispatch} = this.props;
    var history = this.props.history;

    dispatch(userActions.logout(history));
  }

  render() {
    return (
      <div>
        <FlatButton  label="Logout"  onClick={this.handleLogout()} />
        <FlatButton  label="Table"   href="/dataTable" />
        <FlatButton  label="Get API" href="/getAPI" />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const {alert} = state;
  return {
    alert,
  };
}

const connectedLoggedin = connect(mapStateToProps)(Loggedin);
export {connectedLoggedin as Loggedin};


class Loggedout extends React.Component {
  static muiName = 'FlatButton';
  render() {
    return (
      <div>
        <FlatButton  label="Login" href='/login' />
        <FlatButton  label="Regiter" href="/register" />
      </div>
    );
  }
}

export default class Header extends React.Component {
 
  render() {

    var user = JSON.parse(localStorage.getItem('user'));

    console.log("Header got user: " + user);

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