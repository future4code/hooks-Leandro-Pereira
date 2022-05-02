import styled from 'styled-components';
import background from '../images/Background-image.jpg';

export const Container = styled.div`
  width:500px;
  height:100vh;
  display:flex;
  border: 1px solid black;
  margin:auto;
  flex-direction:column;
  background-image: url(${background});
`
export const Header = styled.div`
  color: black;
  display:flex;
  justify-content: center;
  width: 100%;
  background-color:red;
`

export const MessageContainer = styled.div`
  display:flex;
  flex-direction: column-reverse;
  flex-grow:1;
`

export const Footer = styled.div`
  display:flex;
  background-image: url(${background});
`

export const MessageArea = styled.div`
  background-color:darkgoldenrod;
`

export const InputMessage = styled.input`
  display:flex;
  width:42vw;
  border-radius: 15px;
  border: 1px solid black;
  padding: 10px;
`

export const InputName = styled.input`
  display:flex;
  width:20%;
  border-radius: 15px;
  border: 1px solid black;
  padding: 10px;
`

export const ButtonSendMe = styled.button`
  display:flex;
  border-radius: 15px;
  width: 60px;
`

