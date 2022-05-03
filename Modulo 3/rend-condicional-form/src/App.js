import React from 'react';
import GeneralData from './components/GeneralData';
import AddInformation from './components/AddInformation';
import Course from './components/Course';
import FinalStep from './components/FinalStep';
import styled from 'styled-components';

const Button = styled.button`
width: 100px;
height : 50px;
padding: 10px;
margin-top:120px; 
`

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
      default:
        return "Houve um erro em nossos servidores, tente novamente mais tarde"
    }
  }

  render() {
    return(
    <>
      {this.renderStep()}
      <div> 
        <Button onClick ={this.changeStep}>Next Step</Button>
      </div>
    </>
    )
  }
}
export default App;