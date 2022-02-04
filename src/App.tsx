import React from "react";
import Home from "./pages/home";

// styles global
import { GlobalStyle } from "./global-styles";
import theme from "./config/theme";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
}

export default App;
