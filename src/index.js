import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { AuthProvider } from "./context/AuthContext";
import { WineListProvider } from "./context/WineListContext";
import theme from "./theme";
import "normalize.css";

const GlobalBodyStyle = createGlobalStyle`
  body {
    color: #4d5a66;
    font-family: 'Roboto Condensed', sans-serif;

  }
`;

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <WineListProvider>
          <GlobalBodyStyle />
          <Routes />
        </WineListProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
