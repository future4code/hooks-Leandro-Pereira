import { createGlobalStyle } from "styled-components";
import Background from "./components/images/Background.jpg"

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    font-family: sans-serif;
    background-color: aqua;
    background-image: url(${Background});
    background-size: cover;
}
`
export default GlobalStyle;
