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
  backgroundColor: "#F3FBFF",
  flex: 2,
  flexWrap: "wrap",
  flexDirection: "column",
  alignItems: "center"
};

class MainView extends React.Component {
  state = {
    forecastCity: [],
    forecastData: [],
    forecastCityName: "",
    selectValue: "weather",
    searchTerm: "London"
  };

  onTermSubmit = async () => {
    const link = `/${this.state.selectValue}?q=${this.state.searchTerm}&APPID=${process.env.REACT_APP_API_URL}`;
    const response = await openweathermap.get(link);
    // console.log(response.data.city);
    this.setState({
      forecastCity: response.data,
      forecastData: response.data.list,
      forecastCityName: response.data.city
    });
  };

  onHandleSelect = data => {
    this.setState({ selectValue: data.value });
  };

  handleInput = value => this.setState({ searchTerm: value });

  componentDidMount() {
    // default search
    this.onTermSubmit(this.state.searchTerm);
  }

  render() {
    const { forecastData, forecastCity, forecastCityName } = this.state;
    return (
      <div style={mainStyle}>
        <AppTitle />
        <div
          style={{
            flex: "0 1 320px",
            display: "flex",
            textAlign: "center",
            justifyContent: "center",
            margin: "1rem 0"
          }}
        >
          <div style={{ width: 270 }}>
            <Select options={options} onChange={this.onHandleSelect} />
          </div>
        </div>
        <SearchBar
          onFormSubmit={this.onTermSubmit}
          handleInput={this.handleInput}
          searchTerm={this.state.searchTerm}
        />
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
