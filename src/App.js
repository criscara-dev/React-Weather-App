import React from "react";
// API
// import axios from 'axios';
// containers
import MainView from "./containers/MainView";
import AsideView from "./containers/AsideView";



import "./App.css";

function App() {
  return (
    <div className="appStyle">
      <MainView />
      <AsideView />
    </div>
  );
}

export default App;
