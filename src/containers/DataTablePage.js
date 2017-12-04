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
class DataTablePage extends React.Component {
  constructor(props){
    super(props);

    const {dispatch} = this.props;

    console.log('dispatching -> get api');
    var history = this.props.history;
    dispatch(userActions.getApi(history));

   

    
 }
    render() {
     var  studies = JSON.parse(localStorage.getItem('studies'));
       console.log("studies",studies);
      return (

  <MuiThemeProvider>
  <Table>
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
      {studies.map(function(study){
        return(
          <TableRow>
            console.log("got study: " + study.Date_of_Upload);
            <TableRowColumn>{study.id}</TableRowColumn>
            <TableRowColumn>{study.Date_of_Upload}</TableRowColumn>
            <TableRowColumn>Employed</TableRowColumn>
            <TableRowColumn>Employed</TableRowColumn>
            <TableRowColumn>Employed</TableRowColumn>
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
  const {alert} = state;
  return {
    alert,
  };
}
 
const connectedDataTablePage = connect(mapStateToProps)(DataTablePage);
export { connectedDataTablePage as DataTablePage };