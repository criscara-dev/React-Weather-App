import React from "react";
import MainHeader from "../components/MainHeader";
import AppTitle from "../components/AppTitle";
import MainCities from "../components/MainCities";
// import WeeklyForecast from "../components/WeeklyForecast";
import Toadds from "../components/Toadds";

class MainView extends React.Component {
  state = {
    toadds: [
        {
          id: 1,
          title:'Berlin',
          added:true
        },
        {
          id: 2,
          title:'London',
          added:true
        },
        {
          id: 3,
          title:'Paris',
          added:true
        }
    ],
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
  ],
  listDT:[]
  };

  render() {
    // let listDT = this.state.listDT;
    // console.log(this.state.toadds)
    return (
      <div className="mainStyle">
        <MainHeader />
        <AppTitle />
        <Toadds toadds={this.state.toadds} />
        <MainCities cities={this.state.cities} />    
        {/* <WeeklyForecast />       */}
      </div>
    );
  }
}

export default MainView;
