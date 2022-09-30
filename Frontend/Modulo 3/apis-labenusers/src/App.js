import axios from 'axios';
import React from 'react';
import UserList from './components/UserList'
import RegistrationScreen from './components/RegistrationScreen'


const headers = {
 headers:{
   Authorization:"leandro-pereira-hooks"
 }
}

class App extends React.Component {
  state = {
    currentScreen: "Registration"
  }
  
  changePage = () => {
    switch (this.state.currentScreen) {
      case "Registration":
        return <RegistrationScreen goToList={this.goToList}/>
      case "List":
        return <UserList goToRegistration={this.goToRegistration}/>
      default:
        return <p>Page not found</p>
    }

  }

  goToRegistration = () =>{
    this.setState({currentScreen: "Registration"})
  }

  goToList = () => {
    this.setState({currentScreen: "List"})
  }

  render(){
    return (
      <div>
       {this.changePage()}
      </div>
    )
  }
}
export default App;