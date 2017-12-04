import React from 'react';
import FlatButton from 'material-ui/FlatButton';

import {connect} from 'react-redux';








class Loggedout extends React.Component {
  static muiName = 'FlatButton';
  constructor(props){
    super(props);

    
    
    this.state = {     
     
    }
  }

  render() {
    return (
      <div>
        <FlatButton  label="Login" href='/login' />
        <FlatButton  label="Regiter" href="/register" />
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

const connectedLoggedout = connect(mapStateToProps)(Loggedout);
export {connectedLoggedout as Loggedout};