import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';


const styles = {
  
  loginContainer: {
      minWidth: 320,
      maxWidth: 400,
      height:'auto',
      position: 'absolute',
      
      left: 0,
      right: 0,
      margin: 'auto',
     
    },
  
};

class LoginPage extends React.Component {

constructor(props){
  super(props);

  console.log("-- props: " + JSON.stringify(props) );

  this.state={
      email: '',
      password: ''
    }
 }

handleLogin(event){
  console.log("-- handleLogin --");


  var self = this;

  var headers = {'Content-Type': 'application/x-www-form-urlencoded'}

  var payload  = { "email": this.state.email, "password": this.state.password };

  axios.post('http://crosswinds.oflanderclient.com/auth/login', payload, headers)
   .then((result) => {
      console.log("login result: " + JSON.stringify(result) );
        this.props.callSetLoggedOfParent(true); 


  })
  .catch((err) => {
      console.log("login err: " + err);
  })

}

render() {
    return (
      <div>
        <MuiThemeProvider>
          <div style={styles.loginContainer}>
          <h3>Login</h3>
           <TextField
             hintText="Enter your email"
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
             <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleLogin(event)}/>
         </div>
         </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
 margin: 15,
};
export default LoginPage;