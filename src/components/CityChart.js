import React, { Component } from "react";
import moment from "moment";

export default class CityChart extends Component {
  render() {
    console.log(this.props.forecastCity);
    const date = moment(new Date()).format("MMM D LT");

    if (!this.props.forecastData) {
      return (
        <div>
          Current weather in: {this.props.forecastCity.name},&nbsp;
          {this.props.forecastCity.sys.country}
          <div style={{ textTransform: "capitalize" }}>
            {this.props.forecastCity.weather.map(item => item.description)}
          </div>
          <div>{`${date}`}</div>
          <div style={{ display: "flex", alignItems: "center" }}>
            {" "}
            <img
              style={{}}
              alt="weather icon"
              src={`https://openweathermap.org/img/w/${this.props.forecastCity.weather.map(
                item => item.icon
              )}.png`}
            />{" "}
            {(this.props.forecastCity.main.temp - 273.15).toFixed(1)} °C
          </div>
          <div>
            Wind speed: {this.props.forecastCity.wind.speed} m/s, and direction:
            ({this.props.forecastCity.wind.deg})
          </div>
          <div>Pressure: {this.props.forecastCity.main.pressure} hPa</div>
          <div>Humidity: {this.props.forecastCity.main.humidity} %</div>
          <div>
            Sunrise: {moment(this.props.forecastCity.sys.sunrise).format("LTS")}
          </div>
          <div>
            Sunset: {moment(this.props.forecastCity.sys.sunset).format("LTS")}
          </div>
        </div>
      );
    }
    return (
      <div
        style={{
          height: "600px",
          overflowY: "scroll"
        }}
      >
        <div>Forecast in: {this.props.name}</div>
        {this.props.forecastData.map(point => (
          <div
            key={point.dt}
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <span style={{ flex: 1 }}>
              {moment(point.dt_txt).format("MMM D LT")}
            </span>
            <span style={{ flex: 1 }}>
              {(point.main.temp - 273.15).toFixed(1)} °C
            </span>
            <span style={{ flex: 1 }}>{point.main.humidity} %</span>
            <span style={{ flex: 1 }}> {point.main.pressure} hPa</span>
            <span style={{ flex: 1 }}>{point.weather[0].main}</span>
            <img
              alt={point.weather[0].description}
              src={`https://openweathermap.org/img/w/${point.weather[0].icon}.png`}
            />
          </div>
        ))}
      </div>
    );
  }
}
