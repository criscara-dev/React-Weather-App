import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import moment from "moment";

export default class Chart extends Component {
  render() {
    const labels = this.props.chartData.map(el => {
      return moment(el.dt_txt).format("LL - H");
    });
    const temperatures = this.props.chartData.map(el => {
      return el.main.temp - 273.15;
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
          backgroundColor: "#E0C155"
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
