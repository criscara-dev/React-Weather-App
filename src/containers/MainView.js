import React from "react";
import MainHeader from "../components/MainHeader";
import AppTitle from "../components/AppTitle";
import MainCities from "../components/MainCities";
import TimeLine from "../components/TimeLine";
import Chart from "../components/Chart";

class MainView extends React.Component {
  state = {
    cities: [
      { city: "Berlin", country: "Germany" },
      { city: "London", country: "UK" },
      { city: "Paris", country: "France" }
    ]
  };

  componentDidMount() {
    //server call
    //setState with response from server
  }
  render() {
    return (
      <div className="mainStyle">
        <MainHeader />
        <AppTitle />
        <MainCities cities={this.state.cities} />
        <TimeLine />
        <Chart />
      </div>
    );
  }
}

export default MainView;
