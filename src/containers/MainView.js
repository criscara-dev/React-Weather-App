import React from "react";
import Select from "react-select";

import AppTitle from "../components/AppTitle";
import CityChart from "../components/CityChart";
import SearchBar from "../components/SearchBar";

import openweathermap from "../api/openWeatherMap";

const options = [
  { value: "weather", label: "Current Weather" },
  { value: "forecast", label: "Week Forecast" }
];

class MainView extends React.Component {
  state = {
    forecastCity: [],
    forecastData: [],
    forecastCityName: "",
    selectValue: "weather"
  };

  onTermSubmit = async term => {
    const link = `/${this.state.selectValue}?q=${term}&APPID=${process.env.REACT_APP_API_URL}`;
    const response = await openweathermap.get(link);
    // console.log(response.data.list);
    this.setState({
      forecastCity: response.data,
      forecastData: response.data.list,
      forecastCityName: response.data.city
    });
  };

  onHandleSelect = data => {
    this.setState({ selectValue: data.value });
  };

  componentDidMount() {
    // default search
    this.onTermSubmit("London");
  }

  render() {
    const { forecastData, forecastCity, forecastCityName } = this.state;
    return (
      <div className="mainStyle">
        <AppTitle />
        <div style={{ width: 200, marginBottom: ".5rem " }}>
          <Select options={options} onChange={this.onHandleSelect} />
        </div>
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <br />
        <CityChart
          forecastData={forecastData}
          forecastCity={forecastCity}
          forecastCityName={forecastCityName}
        />
      </div>
    );
  }
}

export default MainView;
