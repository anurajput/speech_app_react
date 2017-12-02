import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

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
      id:'',
      name: '',
      email:'',
      pswd: ''
    }
 }

handleRegister(event){
 const requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    body: `id=${this.state.id}&name=${this.state.name}&email=${this.state.email }&pswd=${  this.state.pswd}`,
  };

  
  return fetch('http://192.168.1.104:8080/api/user_registration', requestOptions)
        .then((response) => {
          if (!response.ok) {
            return Promise.reject(response.statusText);
             
          }

          return response.json();
        })
        .then((token_resp) => {
          console.log(`token_resp: ${  JSON.stringify(token_resp)}` );

            // ----------------------------------------------------------
            // login successful if there's a jwt token in the response
            // ----------------------------------------------------------
          if (token_resp && token_resp.token) {
            var user = {
              email: this.state.email,
              token: token_resp.token,
            };

                // ------------------------------------------------------
                // store user details and jwt token in local storage
                // to keep user logged in between page refreshes
                // ------------------------------------------------------
            localStorage.setItem('user', JSON.stringify(user));
          }

          return user;
        });



  



}



render() {
    return (
      <div>
        <MuiThemeProvider>
          <div style={styles.Container}>
          <h3>Sign Up</h3>
            <TextField
             hintText="Enter your id"
             floatingLabelText="User id"
             onChange = {(event,newValue) => this.setState({id:newValue})}
             />
            <TextField
             hintText="Enter your name"
             floatingLabelText="User name"
             onChange = {(event,newValue) => this.setState({name:newValue})}
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
               onChange = {(event,newValue) => this.setState({pswd:newValue})}
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