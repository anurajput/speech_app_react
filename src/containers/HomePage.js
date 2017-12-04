import React from 'react';
import { connect } from 'react-redux';
 
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

 
class HomePage extends React.Component {
    

    constructor(props) {
        super(props);

        var user = JSON.parse(localStorage.getItem('user'));
        if (!user) {
            this.props.history.push('/login');
        }
   }

    render() {
       return (
            <div style={styles.Container}>
                <h1>HomePage</h1>
                <p>Welcome to Home Page!!</p>
                
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
 
const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };
