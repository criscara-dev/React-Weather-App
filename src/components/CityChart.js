import React, { Component } from "react";
import styled from "styled-components";
import moment from "moment";

export default class CityChart extends Component {
  render() {
    const date = moment(new Date()).format("MMM D LT");

    const Div = styled.div`
      margin-bottom: ${props => (props.first ? "3rem" : "1rem")};
      display: flex;
      align-items: center;
      text-transform: ${props => (props.desc ? "capitalize" : "none")};
    `;

    const SpanAlternate = styled.div`
      &:nth-child(even) {
        background-color: lightyellow;
      }
      display: flex;
      justify-content: space-between;
      &:first-child {
        flex: 1;
      }
      align-items: center;
    `;

    const TitleChart = styled.div`
      text-align: center;
      margin-bottom: 1rem;
    `;

    const ForecastChart = styled.div`
      height: 600px;
      overflow-y: scroll;
    `;
    const CurrentWeather = styled.div`
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      margin-top: 3rem;
    `;

    const Strong = styled.strong`
      font-weight: 700;
    `;

    if (!this.props.forecastData) {
      return (
        <CurrentWeather>
          <Div first>
            Current weather in:
            <Strong>
              {this.props.forecastCity.name},&nbsp;
              {this.props.forecastCity.sys.country}
            </Strong>
          </Div>
          <Div desc>
            {this.props.forecastCity.weather.map(item => item.description)}
          </Div>
          <Div>{`${date}`}</Div>
          <Div>
            <img
              alt="weather icon"
              src={`https://openweathermap.org/img/w/${this.props.forecastCity.weather.map(
                item => item.icon
              )}.png`}
            />
            {(this.props.forecastCity.main.temp - 273.15).toFixed(1)} °C
          </Div>
          <Div>Wind speed: {this.props.forecastCity.wind.speed} m/s,</Div>
          <Div>and direction: ({this.props.forecastCity.wind.deg})°</Div>
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
        </CurrentWeather>
      );
    }
    return (
      <ForecastChart>
        <TitleChart>
          Forecast in: <Strong>{this.props.forecastCityName.name}</Strong>
        </TitleChart>
        {this.props.forecastData.map(point => (
          <SpanAlternate key={point.dt}>
            <span>{moment(point.dt_txt).format("MMM D LT")}</span>
            <span>{(point.main.temp - 273.15).toFixed(1)} °C</span>
            <span>{point.main.humidity} %</span>
            <span> {point.main.pressure} hPa</span>
            <span>{point.weather[0].main}</span>
            <img
              alt={point.weather[0].description}
              src={`https://openweathermap.org/img/w/${point.weather[0].icon}.png`}
            />
          </SpanAlternate>
        ))}
      </ForecastChart>
    );
  }
}
