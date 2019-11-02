import React from "react";
import styled from "styled-components";
import reset from "styled-reset";
import MainView from "./containers/MainView";
import AsideView from "./containers/AsideView";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 ${reset}
`;

const Container = styled.div`
  display: flex;
  font-family: Montserrat;
  margin: 0;
  padding: 0;
  font-size: 100%;
  box-sizing: border-box;
  flex-wrap: wrap;
  height: 100vh;
`;

function App() {
  return (
    <Container>
      <GlobalStyle />
      <MainView />
      <AsideView />
    </Container>
  );
}

export default App;
