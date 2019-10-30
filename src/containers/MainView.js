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

const mainStyle = {
  margin: 0,
  marginRight: "1rem",
  marginLeft: "1rem",
  flexDirection: "column",
  backgroundColor: "#F3FBFF",
  flex: 2,
  flexWrap: "wrap"
};

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
      <div style={mainStyle}>
        <AppTitle />
        <div style={{ width: 200, marginBottom: ".5rem " }}>
          <Select
            style={{ flex: 1, justifyContent: "center" }}
            options={options}
            onChange={this.onHandleSelect}
          />
        </div>
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <br />
        <CityChart
          style={{
            display: "flex"
          }}
          forecastData={forecastData}
          forecastCity={forecastCity}
          forecastCityName={forecastCityName}
        />
      </div>
    );
  }
}

export default MainView;
