import React from "react";
import Home from "./pages/home";

// styles global
import { GlobalStyle } from "./global-styles";
import theme from "./config/theme";
import { ThemeProvider } from "styled-components";
import { AuthProvider } from "./context/authContext";

function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Home />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
