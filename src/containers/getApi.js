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


class GetAPIPage extends React.Component {

  // ------------------------------------------------
  // constructor
  // ------------------------------------------------

constructor(props){
  super(props);

  this.state={
    submitted:false
    }
  this.handleSubmit = this.handleSubmit.bind(this);
 }

  // ------------------------------------------------
  // handleSubmit
  // -
 handleSubmit(event) {
        event.preventDefault();
       
        this.setState({ submitted: true });
        const {dispatch} = this.props;
        console.log('dispatching -> get api');
        var history = this.props.history;

        dispatch(userActions.getApi(history));

      }
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <form name="form" onSubmit={this.handleSubmit}> 
            <div style={styles.Container}>
              <h3>Get API</h3>
              <RaisedButton label="Get API" primary={true} type="submit" />
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

const connectedGetAPIPage = connect(mapStateToProps)(GetAPIPage);
export {connectedGetAPIPage as GetAPIPage};