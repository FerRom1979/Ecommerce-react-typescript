import React from "react";
import Home from "./pages/home";

// styles global
import { GlobalStyle } from "./global-styles";
import theme from "./config/theme";
import { ThemeProvider } from "styled-components";
import { AuthProvider } from "./context/authContext";
import ManagementRoutes from "./components/manager-routes";

function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ManagementRoutes />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
