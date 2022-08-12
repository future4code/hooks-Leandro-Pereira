import React from "react";
import { Router } from "./routes/Router";
import { GlobalStyle } from "./globalStyles";

const App = () => {
  return (
    <div>
      <Router />
      <GlobalStyle />
    </div>
  );
};
export default App;
