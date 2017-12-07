import React from 'react';
import { connect } from 'react-redux';
import {studyActions} from '../actions';

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
  }    


  componentDidMount() {
    const {dispatch} = this.props;

    var user = JSON.parse(localStorage.getItem('user'));

    if (!user) {
            this.props.history.push('/login');

    } else {
      console.log('dispatching -> get api');
      dispatch(studyActions.getAll(this.props.history));
    }

    
    this.handleRowSelection = this.handleRowSelection.bind(this);
        
  }

  handleRowSelection = (selectedRows) => {

    console.log("row is selected");
    this.props.history.push('/speechTest');
  };

    render() {
     // var  studies = JSON.parse(localStorage.getItem('studies'));
     console.log("props: " +this.props);
     //var {studies} = this.props;



     console.log("--- Home Page render got studies:" + JSON.stringify(this.props.studies) );
     
     var t = typeof this.props.studies;

     console.log("--- type:" + t  + ", len: " + this.props.studies.length);

     var n = [1];
     var t1 = typeof n;

     console.log("--- t1:" + t1 + ", len: " + n.length);

     //----------------------------
     // fill up studies table data
     //----------------------------
     var tableBody = [];
      if(this.props.studies) {
       for(var i=0; i < this.props.studies.length; i++) {
          console.log("study " + (i+1) + ":" + JSON.stringify(this.props.studies[i]));
          var study = this.props.studies[i];
          tableBody.push(
                  <TableRow key={study.id} >
                  console.log("got study: " + study.Date_of_Upload);
                  <TableRowColumn>{i+1}</TableRowColumn>
                  <TableRowColumn>{study.created_at}</TableRowColumn>
                  <TableRowColumn>{study.Speaker}</TableRowColumn>
                  <TableRowColumn>{study.GCS_Acc}</TableRowColumn>
                  <TableRowColumn>{study.GCS_Conf}</TableRowColumn>
                </TableRow>
                );
         }
       }

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
          {tableBody}
          </TableBody>
        </Table>
      </MuiThemeProvider>
      );
    }
    }


function mapStateToProps(state) {
  //const {alert,user,loggedIn} = state;
  console.log("--- Home Page got state: " + JSON.stringify(state));
  console.log("--- Home Page got studies: " + JSON.stringify(state.studies.studies) );


  return {
    studies: state.studies
  };
}
 
const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };
