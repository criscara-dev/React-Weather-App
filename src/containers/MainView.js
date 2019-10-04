import React from "react";
import MainHeader from "../components/MainHeader";
import AppTitle from "../components/AppTitle";
import MainCities from "../components/MainCities";
import TimeLine from "../components/TimeLine";
import Chart from "../components/Chart";
import axios from 'axios';

class MainView extends React.Component {
  state = {
    cities: [
      { city: "Berlin", country: "Germany" },
      { city: "London", country: "UK" },
      { city: "Paris", country: "France" }
    ],
    days: [
      {weekday:'Monday',humidityIcon: 'fa-tint',humidity:'54%',temperatureIcon:'fa-sun',temperature:'17',maxTemp:'26'},
      {weekday:'Tuesday',humidityIcon: 'fa-tint',humidity:'54%',temperatureIcon:'fa-sun',temperature:'17',maxTemp:'22'},
      {weekday:'Wednesday',humidityIcon: 'fa-tint',humidity:'54%',temperatureIcon:'fa-sun',temperature:'15',maxTemp:'26'},
      {weekday:'Thurday',humidityIcon: 'fa-tint',humidity:'54%',temperatureIcon:'fa-sun',temperature:'14',maxTemp:'25'},
      {weekday:'Friday',humidityIcon: 'fa-tint',humidity:'54%',temperatureIcon:'fa-sun',temperature:'19',maxTemp:'26'},
      {weekday:'Saturday',humidityIcon: 'fa-tint',humidity:'54%',temperatureIcon:'fa-sun',temperature:'19',maxTemp:'28'},
      {weekday:'Sunday',humidityIcon: 'fa-tint',humidity:'54%',temperatureIcon:'fa-sun',temperature:'17',maxTemp:'25'}
  ]
  };

  componentDidMount() {
    //server call
    // axios.get('http://api.openweathermap.org/data/2.5/weather?q=',{
    //   params: {q : 'London'},
    //   headers: {
    //     Authorization:'Client-ID dcc4ba580205eb4e86efb0c560cc0b95'
    //   }
    // }).then(
    //   response => console.log(response)
    // )
    

    //setState with response from server
  }
  render() {
    return (
      <div className="mainStyle">
        <MainHeader />
        <AppTitle />
        <MainCities cities={this.state.cities} />
        <TimeLine />
        <Chart days={this.state.days } />
      </div>
    );
  }
}

export default MainView;
