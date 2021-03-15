//Route
import Routes from "./routes";
//Styles
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
//StaticTheme
import { darkTheme } from "./styles/theme/dark";

const App = () => (
  <ThemeProvider theme={darkTheme}>
    <GlobalStyles />
    <Routes />
  </ThemeProvider>
);

export default App;
