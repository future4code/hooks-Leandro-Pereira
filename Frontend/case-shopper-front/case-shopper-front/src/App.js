import GlobalState from "./Global/GlobalState";
import GlobalStyles from "./Global/GlobalStyles";
import Router from "./Router/Router";

const App = () => {
  return (
    <GlobalState>
      <GlobalStyles />
      <Router />
    </GlobalState>
  );
};

export default App;
