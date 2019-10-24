import React from "react";
import MainHeader from "../components/MainHeader";
import AppTitle from "../components/AppTitle";
import MainCities from "../components/MainCities";
// import WeeklyForecast from "../components/WeeklyForecast";
import CityList from "../components/CitiesList";
import AddCity from "../components/AddCity";

// let counter = 4;
class MainView extends React.Component {
  state = {
    addToList: [
      // {
      //   id: 1,
      //   title:'Berlin',
      //   remove:false
      // },
      // {
      //   id: 2,
      //   title:'London',
      //   remove:false
      // },
      // {
      //   id: 3,
      //   title:'Paris',
      //   remove:false
      // }
    ],
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

  selectCity = () => {
    console.log("hi!");
  };

  render() {
    // let listDT = this.state.listDT;

    return (
      <div className="mainStyle">
        <MainHeader />
        <AppTitle />
        <AddCity addCity={this.addCity} />
        <div style={addStyle}>
          <CityList
            addToList={this.state.addToList}
            delCity={this.delCity}
            selectCity={this.selectCity}
          />
        </div>
        <MainCities cities={this.state.cities} />
        {/* <WeeklyForecast />       */}
      </div>
    );
  }
}

const addStyle = {
  display: "flex"
};

export default MainView;
