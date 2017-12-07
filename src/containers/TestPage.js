import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import {connect} from 'react-redux';


const styles = {
  
  div:{
    display: 'flex',
    flexDirection: 'row wrap',
    padding: 20,
    width: '90%'
  },
  paperLeft:{
    flex: 2,
    height: 600,
    margin: 10,
    textAlign: 'center',
    padding: 10
  },
};//styles


//---------------------------------------------------
//
//        TEST PAGE
//
//---------------------------------------------------
class TestPage extends React.Component {

  // ------------------------
  // constructor
  // ------------------------
  constructor(props) {
    super(props);
  }
   
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <div style={styles.div}>
              <Paper zDepth={3} style={styles.paperLeft}>
                <h4>Recording Test Page</h4>
                <p>
                  This is a text that you should speak and I will check its accuracy with google speech APIS.
                  This is a text that you should speak and I will check its accuracy with google speech APIS.
                  This is a text that you should speak and I will check its accuracy with google speech APIS.
                  This is a text that you should speak and I will check its accuracy with google speech APIS.
                  This is a text that you should speak and I will check its accuracy with google speech APIS.
                </p>
              </Paper>
            </div>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }//render
}//TestPage


function mapStateToProps(state) {
  const {alert} = state;
  return {
    alert,
  };
}

const connectedTestPage= connect(mapStateToProps)(TestPage);
export {connectedTestPage as TestPage};