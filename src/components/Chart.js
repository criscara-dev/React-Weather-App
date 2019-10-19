import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import moment from "moment";

// chartData: {
//     labels:['Milan','London','Rome', 'Berlin', 'Dublin'],
//     datasets:[
//         {
//             label:'Population',
//             data:[
//                 164356,
//                 261656,
//                 234132,
//                 322764,
//                 343243,
//                 224434,
//             ],
//             backgroundColor:[
//                 'rgba(255, 99, 132, 0.6)',
//                 'rgba(54, 162, 235, 0.6)',
//                 'rgba(255, 206, 86, 0.6)',
//                 'rgba(153, 102, 255, 0.6)',
//                 'rgba(255, 99, 132, 0.6)',
//             ]
//         }
//     ]
// }

export default class Chart extends Component {
  render() {
    const labels = this.props.chartData.map(el => {
      return moment(el.dt_txt).format("H");
    });
    const temperatures = this.props.chartData.map(el => {
      return el.main.temp;
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
          backgroundColor: "red"
        }
      ]
    };

    console.log(this.props.chartData);
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
              display: false
            }
          }}
        />
      </div>
    );
  }
}
