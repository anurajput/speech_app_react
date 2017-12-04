import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

import {connect} from 'react-redux';
import {userActions} from '../actions';

const styles = {
  
  Container: {
      minWidth: 320,
      maxWidth: 400,
      height:'auto',
      position: 'absolute',
      left: 0,
      right: 0,
      margin: 'auto',
     },
  };



//---------------------------------------------------
//
//         Get API
//
//---------------------------------------------------


class SpeechApp extends React.Component {

  // ------------------------------------------------
  // constructor
  // ------------------------------------------------


  // ------------------------------------------------
  // handleSubmit
  // -
 
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <form name="form" > 
            <div style={styles.Container}>
              <h3>Speach App</h3>
              
            </div>
          </form>
        </MuiThemeProvider>
      </div>
    );
  }//render
}//GetAPIPage


function mapStateToProps(state) {
  const {alert} = state;
  return {
    alert,
  };
}

const connectedSpeechApp = connect(mapStateToProps)(SpeechApp);
export {connectedSpeechApp as SpeechApp};