import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';

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

class RegisterPage extends React.Component {
constructor(props){
  super(props);

  this.state={
      username: '',
      password: ''
    }
 }

handleRegister(event){
  console.log("-- handleRegister --");

  var self = this;

  var headers = {'Content-Type': 'application/x-www-form-urlencoded'}

  var payload  = { "username": this.state.username,"email": this.state.email, "password": this.state.password };

  axios.post('http://localhost:4444/users/login', payload, headers)
   .then((result) => {
      console.log("login result: " + JSON.stringify(result) );
  })
  .catch((err) => {
      console.log("login err: " + err);
  })

}

render() {
    return (
      <div>
        <MuiThemeProvider>
          <div style={styles.Container}>
          <h3>Sign Up</h3>
            <TextField
             hintText="Enter your Username"
             floatingLabelText="Username"
             onChange = {(event,newValue) => this.setState({username:newValue})}
             />
           <TextField
             hintText="Enter your Email"
             floatingLabelText="Email"
             onChange = {(event,newValue) => this.setState({email:newValue})}
             />
           <br/>
             <TextField
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
             <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleRegister(event)}/>
         </div>
         </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
 margin: 15,
};
export default RegisterPage;