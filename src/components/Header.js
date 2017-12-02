import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';

export default class Header extends React.Component {

	render() {

    return (
         <div>
            <MuiThemeProvider>
              <div>
                <AppBar
                title="SPEECH TEST"
                iconElementLeft={<IconButton><NavigationClose /></IconButton>}
                iconElementRight={
                  <div>
                    <FlatButton key={1} label="Login"  href="/user_login" />
                    <FlatButton key={2} label="Regiter" href="/register" />
                    <FlatButton key={3} label="Table" href="/dataTable" />
                    <FlatButton key={4} label="Get API" href="/getAPI" />
                  </div>
                }
                />

              </div>
            </MuiThemeProvider>
          </div>
      );
   }
}//Header