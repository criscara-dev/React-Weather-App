import React, { Component } from "react";
import CityItem from "./CityItem";
import PropTypes from "prop-types";

export default class CityList extends Component {
  render() {
    // console.log(this.props.toadds)
    return this.props.addToList.map(buttonAdd => (
      <CityItem
        key={buttonAdd.id}
        buttonAdd={buttonAdd}
        delCity={this.props.delCity}
        onCitySelect={this.props.onCitySelect}
      />
    ));
  }
}

// PropTypes
CityList.propTypes = {
  addToList: PropTypes.array.isRequired,
  delCity: PropTypes.func.isRequired,
  onCitySelect: PropTypes.func.isRequired
};
