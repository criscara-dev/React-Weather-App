import React from "react";
// containers
import MainView from "./containers/MainView";
import AsideView from "./containers/AsideView";

//  console.log(process.env.REACT_APP_API_URL)

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
      <MainView />
      <AsideView />
    </div>
  );
}

export default App;
