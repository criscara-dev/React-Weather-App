import React from "react";
import Select from "react-select";
import AppTitle from "../components/AppTitle";
// import WeeklyForecast from "../components/WeeklyForecast";
import CityList from "../components/CitiesList";
import AddCity from "../components/AddCity";
import CityChart from "../components/CityChart";

import openweathermap from "../api/openWeatherMap";

const options = [
  { value: "weather", label: "Weather" },
  { value: "forecast", label: "Week Forecast" },
  { value: "forecast/hourly", label: "Hourly Forecast" }
];

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

    listDT: [],
    selectValue: "forecast"
  };

  // @TODO
  // api call to openweathermap passing city name

  onCitySelect = async id => {
    const link = `/${this.state.selectValue}?q=${id}&APPID=${process.env.REACT_APP_API_URL}`;
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

  onHandleSelect = data => {
    this.setState({ selectValue: data.value });
  };

  render() {
    // let listDT = this.state.listDT;
    const { chartCityData } = this.state;
    return (
      <div className="mainStyle">
        <AppTitle />
        <AddCity addCity={this.addCity} />
        <div style={addStyle}>
          <CityList
            addToList={this.state.addToList}
            delCity={this.delCity}
            onCitySelect={this.onCitySelect}
          />
        </div>
        <div style={{ width: 200 }}>
          <Select options={options} onChange={this.onHandleSelect} />
        </div>
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
