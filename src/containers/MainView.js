import React from "react";
import MainHeader from "../components/MainHeader";
import AppTitle from "../components/AppTitle";
import MainCities from "../components/MainCities";
// import WeeklyForecast from "../components/WeeklyForecast";
import CityList from "../components/CitiesList";
import AddCity from "../components/AddCity";
import CityChart from '../components/CityChart';

import openweathermap from "../api/openWeatherMap";

// let counter = 4;
class MainView extends React.Component {
  state = {
    addToList: [
      // {
      //   id: 1,
      //   title:'Berlin',
      //   remove:false
      // }
    ],
    chartCityData: [],
    cities: [
      { city: "Berlin", country: "Germany" },
      { city: "London", country: "UK" },
      { city: "Paris", country: "France" }
    ],
    days: [
      {
        weekday: "Monday",
        humidityIcon: "fa-tint",
        humidity: "54%",
        temperatureIcon: "fa-sun",
        temperature: "17",
        maxTemp: "26"
      },
      {
        weekday: "Tuesday",
        humidityIcon: "fa-tint",
        humidity: "54%",
        temperatureIcon: "fa-sun",
        temperature: "17",
        maxTemp: "22"
      },
      {
        weekday: "Wednesday",
        humidityIcon: "fa-tint",
        humidity: "54%",
        temperatureIcon: "fa-sun",
        temperature: "15",
        maxTemp: "26"
      },
      {
        weekday: "Thurday",
        humidityIcon: "fa-tint",
        humidity: "54%",
        temperatureIcon: "fa-sun",
        temperature: "14",
        maxTemp: "25"
      },
      {
        weekday: "Friday",
        humidityIcon: "fa-tint",
        humidity: "54%",
        temperatureIcon: "fa-sun",
        temperature: "19",
        maxTemp: "26"
      },
      {
        weekday: "Saturday",
        humidityIcon: "fa-tint",
        humidity: "54%",
        temperatureIcon: "fa-sun",
        temperature: "19",
        maxTemp: "28"
      },
      {
        weekday: "Sunday",
        humidityIcon: "fa-tint",
        humidity: "54%",
        temperatureIcon: "fa-sun",
        temperature: "17",
        maxTemp: "25"
      }
    ],
    listDT: []
  };

  // @TODO
  // api call to openweathermap passing city name

  onCitySelect = async id => {
    const link = `/forecast?q=${id}&APPID=${process.env.REACT_APP_API_URL}`;
    // const link = `/forecast?q=${id},uk&APPID=${process.env.REACT_APP_API_URL}`;
    const response = await openweathermap.get(link);
    // console.log(response.data.list[0]);
    this.setState({
      chartCityData: response.data.list
    });
    
  };

  delCity = id => {
    // console.log(id)
    this.setState({
      addToList: [...this.state.addToList.filter(city => city.id !== id)]
    });
  };

  addCity = title => {
    // console.log(title)
    const newCity = {
      id: title,
      title
    };
    this.setState({
      addToList: [...this.state.addToList, newCity]
    });
  };

  render() {
    // let listDT = this.state.listDT;
const {chartCityData} = this.state;
    return (
      <div className="mainStyle">
        <MainHeader />
        <AppTitle />
        <AddCity addCity={this.addCity} />
        <div style={addStyle}>
          <CityList
            addToList={this.state.addToList}
            delCity={this.delCity}
            onCitySelect={this.onCitySelect}
          />
        </div>
        <MainCities cities={this.state.cities} />
        {/* <WeeklyForecast />       */}
        <CityChart chartCityData={chartCityData} />
      </div>
    );
  }
}

const addStyle = {
  display: "flex"
};

export default MainView;
