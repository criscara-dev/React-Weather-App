import React from "react";
// containers
import MainView from "./containers/MainView";
import AsideView from "./containers/AsideView";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin:0
  }
`;

const appStyle = {
  display: "flex",
  fontFamily: "Montserrat",
  margin: 0,
  padding: 0,
  fontSize: "100%",
  boxSizing: "border-box",
  flexWrap: "wrap",
  height: "100vh"
};

function App() {
  return (
    <div style={appStyle}>
      <GlobalStyle />
      <MainView />
      <AsideView />
    </div>
  );
}

export default App;
