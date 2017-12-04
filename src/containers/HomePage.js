import React from 'react';
import { connect } from 'react-redux';
import {userActions} from '../actions';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

/**
 * A simple table demonstrating the hierarchy of the `Table` component and its sub-components.
 */
class HomePage extends React.Component {
  constructor(props){
    super(props);
    
    const {dispatch} = this.props;


    var user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
            this.props.history.push('/login');
    } else {
      console.log('dispatching -> get api');
      var history = this.props.history;
      dispatch(userActions.getApi(history));
    }

    
    this.handleRowSelection = this.handleRowSelection.bind(this);
        
  }

  handleRowSelection = (selectedRows) => {
    
    console.log("row is selected");
     var history = this.props.history;
    this.props.history.push('/speechApp');
  };

    render() {
     var  studies = JSON.parse(localStorage.getItem('studies'));
      return (
        <MuiThemeProvider>
          <Table onRowSelection={this.handleRowSelection}>
            <TableHeader>
              <TableRow>
                <TableHeaderColumn>#</TableHeaderColumn>
                <TableHeaderColumn>Date</TableHeaderColumn>
                <TableHeaderColumn>Type</TableHeaderColumn>
                <TableHeaderColumn>Word</TableHeaderColumn>
                <TableHeaderColumn>Status</TableHeaderColumn>
              </TableRow>
            </TableHeader>
          <TableBody>
          {studies && studies.map(function(study, i){
            return(
              <TableRow key={study.id} >
                console.log("got study: " + study.Date_of_Upload);
                <TableRowColumn>{i+1}</TableRowColumn>
                <TableRowColumn>{study.created_at}</TableRowColumn>
                <TableRowColumn>{study.Speaker}</TableRowColumn>
                <TableRowColumn>{study.GCS_Acc}</TableRowColumn>
                <TableRowColumn>{study.GCS_Conf}</TableRowColumn>
              </TableRow>
             );
           })}
          </TableBody>
        </Table>
      </MuiThemeProvider>
      );
    }
    }


function mapStateToProps(state) {
  const {alert, loggedIn} = state;
  return {
    alert, loggedIn
  };
}
 
const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };