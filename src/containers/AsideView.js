import React from "react";
import styled from "styled-components";

import CentralView from "../components/CentralView";
import Chart from "../components/Chart";

import openweathermap from "../api/openWeatherMap";

const Aside = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1.5rem;
  order: 2;
  background-color: #110e3c;
  color: #fff;
  flex-wrap: wrap;
  padding: 1rem;
`;

class AsideView extends React.Component {
  state = {
    latitude: 0,
    longitude: 0,
    errMessage: "",
    icon: "",
    temperature: 0,
    sunrise: 0,
    sunset: 0,
    name: "",
    country: 0,
    humidity: 0,
    pressure: "",
    main: "",
    desc: "",
    listDT: [],
    chartData: []
  };

  getCurrentWeather = async (latitude, longitude) => {
    const link = `/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_API_URL}`;
    const response = await openweathermap.get(link);
    this.setState({
      latitude,
      longitude,
      main: response.data.weather[0].main,
      desc: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      temperature: response.data.main.temp,
      sunrise: response.data.sys.sunrise,
      sunset: response.data.sys.sunset,
      name: response.data.name,
      country: response.data.sys.country,
      humidity: response.data.main.humidity,
      pressure: response.data.main.pressure
    });
  };

  getForecast = async (latitude, longitude) => {
    const link = `/forecast?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_API_URL}`;
    const response = await openweathermap.get(link);
    this.setState({
      chartData: response.data.list
    });
  };

  componentDidMount() {
    const getLocation = async position => {
      try {
        let { latitude, longitude } = position.coords;
        this.getCurrentWeather(latitude, longitude);
        this.getForecast(latitude, longitude);
      } catch (err) {
        handleError();
      }
    };

    const handleError = () => this.setState({ errMessage: true });

    window.navigator.geolocation.getCurrentPosition(getLocation, handleError);
  }

  render() {
    const { chartData } = this.state;
    return (
      <Aside>
        <CentralView
          main={this.state.main}
          desc={this.state.desc}
          allTodayData={this.state.allTodayData}
          temperature={this.state.temperature}
          icon={this.state.icon}
          sunrise={this.state.sunrise}
          sunset={this.state.sunset}
          name={this.state.name}
          country={this.state.country}
          humidity={this.state.humidity}
          pressure={this.state.pressure}
        />
        <br />
        <Chart chartData={chartData} />
      </Aside>
    );
  }
}

export default AsideView;
