import React, { Component } from "react";
import PropTypes from "prop-types";

export default class CityItem extends Component {
  render() {
    const { id, title } = this.props.buttonAdd;

    return (
      <div style={{ flex: 1, flexDirection: "row" }}>
        <input
          type="button"
          value={title}
          style={cityBtnStyle}
          onClick={this.props.onCitySelect.bind(this, id)}
        />
        <button style={btnStyle} onClick={this.props.delCity.bind(this, id)}>
          x
        </button>
      </div>
    );
  }
}

const cityBtnStyle = {
  backgroundColor: "#f2f2f2",
  padding: ".5rem",
  marginTop: ".3rem",
  borderRadius: ".3rem",
  color: "red",
  cursor: "pointer"
};

const btnStyle = {
  backgroundColor: "#ff0000",
  padding: ".5rem",
  marginTop: ".3rem",
  color: "#fff",
  cursor: "pointer"
};

// PropTypes
CityItem.propTypes = {
  buttonAdd: PropTypes.object.isRequired,
  delCity: PropTypes.func.isRequired
};
