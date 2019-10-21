import React from "react";
// containers
import MainView from "./containers/MainView";
import AsideView from "./containers/AsideView";


// Styles
import "./App.css";


//  console.log(process.env.REACT_APP_API_URL)

function App() {
  return (
    <div className="appStyle">
      <MainView />
      <AsideView />
    </div>
  );
}

export default App;
