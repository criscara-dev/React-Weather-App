import React from "react";
import Select from "react-select";
import styled from "styled-components";

import AppTitle from "../components/AppTitle";
import CityChart from "../components/CityChart";
import SearchBar from "../components/SearchBar";

import openweathermap from "../api/openWeatherMap";

const SelectContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const SelectForm = styled.div`
  width: 17rem;
  padding-bottom: 1rem;
`;

const options = [
  { value: "weather", label: "Current Weather" },
  { value: "forecast", label: "Week Forecast" }
];

const Main = styled.div`
  flex: 2;
  background-color: #f3fbff;
  @media (max-width: 414px) {
    display: none;
    vh: 100px;
  }
`;

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
      <Main>
        <AppTitle />
        <SelectContainer>
          <SelectForm>
            <Select
              options={options}
              onChange={this.onHandleSelect}
              defaultValue={{ label: "Current Weather", value: "weather" }}
            />
          </SelectForm>
        </SelectContainer>
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
      </Main>
    );
  }
}

export default MainView;
