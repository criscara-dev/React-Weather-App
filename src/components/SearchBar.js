import React, { Component } from "react";
// import { Container, Input, Button, FormCitySearch } from "./addCity.styles";

// const borderRadius = "5px";

// const Input = styled.input`
//   height: 32px;
//   width: 150px;
//   border-radius: ${borderRadius};
//   font-size: 24px;
//   margin-right: 24px;
// `;

// const Container = styled.div``;

// const FormCitySearch = styled.form`
//   display: flex;
// `;

// const Button = styled.button`
//   border-radius: ${borderRadius};
//   background: ${props => (props.alt ? "white" : "#333")};
//   color: ${props => (props.alt ? "black" : "white")};
// `;

export default class SearchBar extends Component {
  state = {
    term: ""
  };
  onInputChange = e => {
    this.setState({
      term: e.target.value
    });
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.term);
    this.setState({ term: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input
            type="text"
            name="city"
            placeholder="ex. London,uk"
            value={this.state.term}
            onChange={this.onInputChange}
          />
          {/* <button>+ add city</button> */}
          <button alt>Quick Search</button>
        </form>
      </div>
    );
  }
}
