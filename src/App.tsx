import React from "react";
import Home from "./pages/home";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

// styles global
import { GlobalStyle } from "./global-styles";
import theme from "./config/theme";
import { ThemeProvider } from "styled-components";
import { AuthProvider } from "./context/authContext";
import ManagementRoutes from "./components/manager-routes";
import ProductsProvider from "./context/productContext";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ProductsProvider>
        <AuthProvider>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <ManagementRoutes />
          </ThemeProvider>
        </AuthProvider>
      </ProductsProvider>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
