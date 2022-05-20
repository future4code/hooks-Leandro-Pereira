import axios from 'axios';
import React from 'react';



const headers = {
 headers:{
   Authorization:"leandro-pereira-hooks"
 }
}

const urlCreateUsers = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

class App extends React.Component {
  state = {
    inputName:"",
    inputEmail:""
  }

  createUsers = () => {
    const body = {
      name:this.state.inputName,
      email:this.state.inputEmail
    }

    axios.post(urlCreateUsers,body, headers).then((response) => {
      this.setState({
        inputName: "", 
        inputEmail: ""
      });
    })
    .catch(error => {
      alert(error.data.message )
    })
  }

  sendInput = (event) => {
    this.setState({inputName: event.target.value})
  }

  sendEmail = (event) => {
    this.setState({inputEmail: event.target.value})
  }

  render() {
    return(
      <div>
        <h1>Cadastro</h1>
        <input placeholder="Name"
        value={this.state.inputName}
        onChange={this.sendInput}
        />

        <input placeholder="Email"
        value={this.state.inputEmail}
        onChange={this.sendEmail}
        />
        <button onClick={this.createUsers}>Send</button>
      
      <p>O projeto é composto por duas telas a saber:
        <p>1.Tela de cadastro: esta tela deve solicitar um nome e email. Além disso, deve utilizar a requisição de criar
          o usuário da API. Tanto em erro como em sucesso, um alert deve ser mostrado ao usuário.
        </p>
        <p>2.Tela de lista de usuários: Esta tela deve mostrar uma lista dos usuários com somente seus nomes.
          Cada item da lista deve possuir um botão de deletar que realize a requisição de deletar da API. Tanto 
          em erro como sucesso, um alert deve ser mostrado ao usuário.
          Crie um botão voltar: ao clicar nele, o usuário deve voltar a tela inicial.
        </p>
      </p>
      </div>
    )
  }
}
export default App;
