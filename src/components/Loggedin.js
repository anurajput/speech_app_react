import React from 'react';
import FlatButton from 'material-ui/FlatButton';

import {connect} from 'react-redux';






class Loggedin extends React.Component {
  static muiName = 'FlatButton';

  // ------------------------------------------------
  // constructor
  // ------------------------------------------------
  

  

  render() {
    return (
      <div>
        <FlatButton  label="Logout"  href="/logout" />
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



