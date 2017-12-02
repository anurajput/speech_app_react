import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

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

class getApiPage extends React.Component {
constructor(props){
  super(props);

  this.state={
     
    }
 }

handle(event){
 

   const request = {
    method: 'GET',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    
  };




  return fetch('http://192.168.1.104:8080/api/get_study_material?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoidG9tQGdtYWlsLmNvbSIsImV4cCI6MTUxMjA0MjU5OX0.aZ864jqtUJuus9uPknmMHjq6OB6MMVv_r7Rk63HoS3Q', request)
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
          <h3>Get API</h3>
         
             <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handle(event)}/>
         </div>
         </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
 margin: 15,
};
export default getApiPage