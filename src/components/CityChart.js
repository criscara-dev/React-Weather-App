import React, { Component } from "react";
import moment from "moment";

export default class CityChart extends Component {
  render() {
    return (
      <div
        style={{
          height: "600px",
          overflowY: "scroll"
        }}
      >
        {this.props.chartCityData.map(point => (
          <div
            key={point.dt}
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <span style={{ flex: 1 }}>
              {moment(point.dt_txt).format("MMM D")}
            </span>
            <span style={{ flex: 1 }}>
              {point.main.temp - (273.15).toFixed(1)}
            </span>
            <span style={{ flex: 1 }}>{point.main.humidity}</span>
            <span style={{ flex: 1 }}> {point.main.pressure}</span>
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
