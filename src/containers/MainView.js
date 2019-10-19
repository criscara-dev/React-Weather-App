import React from "react";
import MainHeader from "../components/MainHeader";
import AppTitle from "../components/AppTitle";
import MainCities from "../components/MainCities";
// import WeeklyForecast from "../components/WeeklyForecast";
// import Chart from "../components/Chart";


import axios from "axios";
// import moment from 'moment';

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
  ],
  // listDT:[]
  };

  componentDidMount() {
    //server call
    const getLocation = async position => {
      try {
          let { latitude, longitude } = position.coords;
          // const baseURL = "http://api.openweathermap.org/data/2.5/";
          const link = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=dcc4ba580205eb4e86efb0c560cc0b95`;
          const response = await axios.get(link);
          const linkForecast = `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=dcc4ba580205eb4e86efb0c560cc0b95`;
          const responseF = await axios.get(linkForecast);
          console.log(responseF.data);

    //setState with response from server
          this.setState({
              latitude,
              longitude,
              main: response.data.weather[0].main,
              desc: response.data.weather[0].description,
              icon: response.data.weather[0].icon,
              temperature: response.data.main.temp,
              sunrise: response.data.sys.sunrise,
              sunset: response.data.sys.sunset,
              name:response.data.name,
              country:response.data.sys.country,
              humidity:response.data.main.humidity,
              pressure:response.data.main.pressure,
              // listDT: responseF.data.list
            })
      } catch (err) {
          handleError();
      }
  }

  const handleError = () => this.setState({ errMessage:true });
       
  window.navigator.geolocation.getCurrentPosition(getLocation, handleError);
        

  }
  render() {
    // let listDT = this.state.listDT;
    
    return (
      <div className="mainStyle">
        <MainHeader />
        <AppTitle />
        <MainCities cities={this.state.cities} />
        {/*<Chart days={this.state.days } />*/}
        {/* <WeeklyForecast 
          main={this.state.main}
          listDT={listDT.filter((hourForecast,index) => index % 5 ).map( (hourForecast,index) => (
            <div key={hourForecast.dt}>
            {moment(hourForecast.dt_txt).calendar()} -
            Temp: {(hourForecast.main.temp - 273).toFixed(1)}°C
            </div>
        ) ) }
          /> */}
          
      </div>
    );
  }
}

export default MainView;
