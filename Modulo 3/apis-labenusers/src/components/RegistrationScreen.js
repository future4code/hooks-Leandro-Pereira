import axios from "axios";
import React from "react";

class RegistrationScreen extends React.Component {
  state = {
    inputName: "",
    inputEmail: "",
  };

  handleName = (event) => {
    this.setState({ inputName: event.target.value });
  };

  handleEmail = (event) => {
    this.setState({ inputEmail: event.target.value });
  };

  createUser = () => {
    const headers = {
      headers: {
        Authorization: "leandro-pereira-hooks",
      },
    };
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
    const body = {
      name: this.state.inputName,
      email: this.state.inputEmail,
    };
    axios
      .post(url, body, headers)
      .then((response) => {
        alert("User registered successfully!");
        this.setState({ inputName: "", inputEmail: "" });
      })
      .catch((err) => {
        alert("Something went wrong!");
        this.setState({ inputName: "", inputEmail: "" });
      });
  };

  render() {
    return (
      <div>
        <button onClick={this.props.goToList}>Go to List</button>
        <input
          placeholder="Name"
          value={this.state.name}
          onChange={this.handleName}
        />
        <input
          placeholder="E-mail Address"
          value={this.state.email}
          onChange={this.handleEmail}
        />
        <button onClick={this.createUser}>Send</button>
      </div>
    );
  }
}
export default RegistrationScreen;
