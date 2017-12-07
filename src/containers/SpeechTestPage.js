import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import {connect} from 'react-redux';


const styles = {
  
  div:{
    display: 'flex',
    flexDirection: 'row wrap',
    padding: 20,
    width: '100%'
  },
  paperLeft:{
    flex: 2,
    height: 600,
    margin: 10,
    textAlign: 'center',
    padding: 10
  },
  paperRight:{
    height: 600,
    flex: 3,
    margin: 10,
    textAlign: 'center',
  }
};//styles


//---------------------------------------------------
//
//        SPEECH TEST PAGE
//
//---------------------------------------------------
class SpeechTestPage extends React.Component {

  // ------------------------
  // constructor
  // ------------------------
  constructor(props) {
    super(props);



    var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    this.recognition = new SpeechRecognition();

    console.log("recognition: " + this.recognition);

  }

  startRecording() {
    console.log("-- startRecording --");
    this.recognition.start();
  }

  stopRecording() {
    console.log("-- stopRecording --");
    this.recognition.stop();
  }

  playRecording() {
    console.log("-- playRecording --");

  }

  saveRecording() {
    console.log("-- saveRecording --");
  }
   
  render() {

    var paragraphText = '';

    if(this.props.studies && this.props.selectedStudy) {
      // use first element of selectedStudy
      const study = this.props.studies[this.props.selectedStudy[0]];
      console.log(">>>>>>>>> SpeechTestPage got study: " + JSON.stringify(study) );

      if(study) { paragraphText = study.Paragraph_Text; }
    }

    return (
      <div>
        <MuiThemeProvider>
          <div>
            <div style={styles.div}>
              <Paper zDepth={3} style={styles.paperLeft}>
                <h4>Paragraph</h4>
                <p>
                  {paragraphText}
                </p>
              </Paper>
              <Paper zDepth={3} style={styles.paperRight}>
                <h4>Record & Test</h4>
                STEP-1: <RaisedButton label="RECORD" primary={true} onClick={this.startRecording}/> <RaisedButton label="STOP" primary={true} onClick={this.stopRecording}/><br /><br /><br />
                STEP-2: <RaisedButton label="PLAY" primary={true} onClick={this.playRecording}/><br /><br /><br />
                STEP-3: <RaisedButton label="SAVE" primary={true} onClick={this.saveRecording}/><br /><br /><br />
              </Paper>
            </div>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }//render
}//SpeechTestPage


function mapStateToProps(state) {
  console.log(")====> SpeechTestPage got state: " + JSON.stringify(state) );
  return {
    studies: state.studies,
    selectedStudy: state.selectedStudy
  };

}

const connectedSpeechTestPage= connect(mapStateToProps)(SpeechTestPage);
export {connectedSpeechTestPage as SpeechTestPage};