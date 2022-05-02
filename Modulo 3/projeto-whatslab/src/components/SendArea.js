import React from "react";
import emoji from "../images/emoji-teste.jpg";
import {
  Container,
  Header,
  MessageContainer,
  Footer,
  MessageArea,
  InputMessage,
  ButtonSendMe,
  InputName
} from "./SendAreaStyles";

class SendArea extends React.Component {
  state = {
     messages:[{inputSender: "" ,inputText: ""}]
  };

  onChangeInputSender = (e) => {
    this.setState({ inputSender: e.target.value });
  };

  onChangeinputText = (e) =>{
    this.setState({ inputText: e.target.value });
  }

  onClickMessage = () => {
    const newMessage = [...this.state.messages];
    newMessage.push({
      sender: this.state.inputSender,
      text: this.state.inputText
    });
    this.setState({ messages: newMessage });
    this.setState({ inputSender:"", inputText: ""}); 
  };

  render() {
    return (
      <Container>
        <Header>
          <h1>Whatslab</h1>
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
          <InputName
            value={this.state.inputSender}
            onChange={this.onChangeInputSender}
          />
          <InputMessage 
          value={this.state.inputText}
          onChange={this.onChangeinputText}
          />
          <ButtonSendMe onClick={this.onClickMessage}>Send me</ButtonSendMe>
        </Footer>
      </Container>
    );
  }
}
export default SendArea;