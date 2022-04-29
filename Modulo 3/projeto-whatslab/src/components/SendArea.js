import React from "react";
import {
  Container,
  Header,
  MessageContainer,
  Footer,
  MessageArea
} from "./SendAreaStyles";

class SendArea extends React.Component {
  state = {
    messages: [{ sender: "Leandro", text: "Oi" }],
    inputSender: "",
    inputText: ""
  };

  onChangeInputSender = (e) => {
    this.setState({ inputSender: e.target.value });
  };

  onClickMessage = () => {
    const newMessage = [...this.state.messages];
    newMessage.push({
      sender: this.state.inputSender,
      text: this.state.inputText
    });
    this.setState({ messages: newMessage });
  };

  render() {
    return (
      <Container>
        <Header>
          <h1>Não Estou Quebrado</h1>
        </Header>
        <MessageContainer>
          {this.state.messages.map((m, i) => {
            return (
              <MessageArea key={i}>
                <p>{m.sender}</p>
                <p>{m.text}</p>
              </MessageArea>
            );
          })}
        </MessageContainer>
        <Footer>
          <input
            value={this.state.inputSender}
            onChange={this.onChangeInputSender}
          />
          <input />
          <button onClick={this.onClickMessage}>Send me</button>
        </Footer>
      </Container>
    );
  }
}
export default SendArea;