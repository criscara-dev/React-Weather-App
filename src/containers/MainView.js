import React from "react";
import Select from "react-select";

import AppTitle from "../components/AppTitle";
import CityList from "../components/CitiesList";
import AddCity from "../components/AddCity";
import CityChart from "../components/CityChart";

import openweathermap from "../api/openWeatherMap";

const options = [
  { value: "weather", label: "Current Weather" },
  { value: "forecast", label: "Week Forecast" }
];

class MainView extends React.Component {
  state = {
    addToList: [],
    chartCityData: [],
    selectValue: "forecast"
  };

  onCitySelect = async id => {
    const link = `/${this.state.selectValue}?q=${id}&APPID=${process.env.REACT_APP_API_URL}`;
    // const link = `/forecast?q=${id},uk&APPID=${process.env.REACT_APP_API_URL}`;
    const response = await openweathermap.get(link);
    console.log(response.data.list);
    this.setState({
      chartCityData: response.data.list
    });
  };

  delCity = id => {
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
        <CityChart chartCityData={chartCityData} />
      </div>
    );
  }
}

const addStyle = {
  display: "flex"
};

export default MainView;
