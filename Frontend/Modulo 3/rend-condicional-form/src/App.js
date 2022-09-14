import React from 'react';
import GeneralData from './components/GeneralData';
import AddInformation from './components/AddInformation';
import Course from './components/Course';
import FinalStep from './components/FinalStep';
// import {FormContainer, Button} from './components/StyledComponents';




class App extends React.Component{
  state = {
    step: 1,
  }

  changeStep = () => {
    this.setState({step: this.state.step +1})
  }

  renderStep = () => {
    switch (this.state.step) {
      case 1:
        return <GeneralData/>
      case 2:
        return <AddInformation/>  
      case 3:
        return <Course/>
      case 4:
        return <FinalStep/>    
    }
  }

  render() {
    return(
      <div> 
        {this.renderStep()}
        {this.state.step !== 4 && (
          <button onClick ={this.changeStep}>Next Step</button>
        )}
      </div>
    )
  }
}
export default App;