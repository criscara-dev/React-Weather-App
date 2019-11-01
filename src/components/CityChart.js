import React, { Component } from "react";
import styled from "styled-components";
import moment from "moment";

export default class CityChart extends Component {
  render() {
    // console.log(this.props.forecastCityName.name);
    const date = moment(new Date()).format("MMM D LT");
    const Div = styled.div`
      margin-bottom: 0.5rem;
    `;
    const SpanAlternate = styled.div`
      &:nth-child(even) {
        background-color: lightyellow;
      }
    `;

    if (!this.props.forecastData) {
      return (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            textAlign: "center"
          }}
        >
          <Div>
            Current weather in:{" "}
            <strong>
              {this.props.forecastCity.name},&nbsp;
              {this.props.forecastCity.sys.country}
            </strong>
          </Div>
          <Div style={{ textTransform: "capitalize" }}>
            {this.props.forecastCity.weather.map(item => item.description)}
          </Div>
          <Div>{`${date}`}</Div>
          <Div style={{ display: "flex", alignItems: "center" }}>
            {" "}
            <img
              style={{}}
              alt="weather icon"
              src={`https://openweathermap.org/img/w/${this.props.forecastCity.weather.map(
                item => item.icon
              )}.png`}
            />{" "}
            {(this.props.forecastCity.main.temp - 273.15).toFixed(1)} °C
          </Div>
          <Div>
            <Div>Wind speed: {this.props.forecastCity.wind.speed} m/s,</Div>
            <Div>
              and direction: ({this.props.forecastCity.wind.deg}) in degrees.
            </Div>
          </Div>
          <Div>Pressure: {this.props.forecastCity.main.pressure} hPa</Div>
          <Div>Humidity: {this.props.forecastCity.main.humidity} %</Div>
          <Div>
            Sunrise:{" "}
            {moment.unix(this.props.forecastCity.sys.sunrise).format("LT")}
          </Div>
          <Div>
            Sunset:{" "}
            {moment.unix(this.props.forecastCity.sys.sunset).format("LT")}
          </Div>
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
        <div style={{ marginBottom: ".5rem" }}>
          Forecast in: <strong>{this.props.forecastCityName.name}</strong>
        </div>
        {this.props.forecastData.map(point => (
          <SpanAlternate
            key={point.dt}
            style={{
              display: "flex",
              justifyContent: "space-between"
            }}
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
          </SpanAlternate>
        ))}
      </div>
    );
  }
}
