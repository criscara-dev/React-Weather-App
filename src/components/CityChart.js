import React, { Component } from "react";
import moment from "moment";

const TodayCityData = ({
  day,
  temperature,
  humidity,
  pressure,
  celsius,
  weather_main,
  icon
}) => {
  return (
    <div>
      <div>{day.slice(0, 8).join(" | ")} </div>
      <div>{`${celsius.slice(0, 8).join(" | ")}°C`}</div>
      <div>{humidity.slice(0, 8).join(" | ")}</div>
      <div> {pressure.slice(0, 8).join(" | ")}</div>
      <div>{weather_main.slice(0, 8).join(" | ")}</div>
      <div>{icon.slice(0, 8).join(" | ")}</div>
      <div>
        <img
          alt="weather icon"
          src={`https://openweathermap.org/img/w/${icon
            .slice(0, 1)
            .join(" | ")}.png`}
        />
      </div>
    </div>
  );
};

export default class CityChart extends Component {
  render() {
    const date = this.props.chartCityData.map(item => item.dt_txt);
    const temperature = this.props.chartCityData.map(item =>
      (item.main.temp - 273.15).toFixed(1)
    );
    const humidity = this.props.chartCityData.map(item => item.main.humidity);
    const pressure = this.props.chartCityData.map(item => item.main.pressure);
    const weather_main = this.props.chartCityData.map(
      item => item.weather[0].main
    );
    const icon = this.props.chartCityData.map(item => item.weather[0].icon);
    const celsius = temperature;
    // console.log(celsius)

    return (
      <div
        style={{
          height: "600px",
          overflowY: "scroll"
        }}
      >
        {this.props.chartCityData.map(point => (
          <div style={{ display: "flex", justifyContent: "space-between" }}>
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
              alt="weather icon"
              src={`https://openweathermap.org/img/w/${point.weather[0].icon}.png`}
            />
          </div>
        ))}
      </div>
    );
    // return (
    //   <div>
    //     <TodayCityData
    //       day={day}
    //       celsius={celsius}
    //       humidity={humidity}
    //       pressure={pressure}
    //       icon={icon}
    //       weather_main={weather_main}
    //     />
    //   </div>
    // );
  }
}
