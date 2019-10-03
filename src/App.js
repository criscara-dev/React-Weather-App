import React from "react";
//containers
import MainView from "./containers/MainView";
import AsideView from "./AsideView";
//components
import LoginArea from "./components/LoginArea";
import CentralView from "./components/CentralView";
import "./App.css";

function App() {
  return (
    <div className="appStyle">
      <MainView />
      <AsideView>
        <LoginArea />
        <CentralView />
      </AsideView>
    </div>
  );
}

export default App;
