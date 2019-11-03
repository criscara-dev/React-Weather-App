import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import moment from "moment";

export default class Chart extends Component {
  render() {
    const labels = this.props.chartData
      .filter((value, index) => index % 2 === 0)
      .map((el, index) => {
        const time = moment(el.dt_txt).format("D/M - H");
        return time;
      });
    const temperatures = this.props.chartData.map(el => {
      const temp = (el.main.temp - 273.15).toFixed(1);
      return temp;
    });
    const humidity = this.props.chartData.map(el => {
      return el.main.humidity;
    });
    const data = {
      labels: labels,
      datasets: [
        {
          type: "line",
          label: "Humidity",
          data: humidity,
          borderColor: "blue"
        },

        {
          type: "bar",
          label: "Temperature",
          data: temperatures,
          backgroundColor: "#ffce35",
          barThickness: 2
        }
      ]
    };

    return (
      <div>
        <Bar
          data={data}
          options={{
            title: {
              display: true,
              text: "Forecast next hours",
              fontSize: 25
            },
            legend: {
              display: true,
              position: "bottom"
            },
            scales: {
              xAxes: [
                {
                  ticks: {
                    beginAtZero: false
                  }
                }
              ]
            }
          }}
        />
      </div>
    );
  }
}
