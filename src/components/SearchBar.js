import React, { Component } from "react";
import styled from "styled-components";

const borderRadius = "5px";

const Input = styled.input`
  height: 32px;
  width: 150px;
  border-radius: ${borderRadius};
  font-size: 1rem;
  &::placeholder {
    color: #8e8e8e;
    font-size: 1rem;
    padding-left: 0.625rem;
  }
`;

const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`;

const FormCitySearch = styled.form`
  display: flex;
`;

const Button = styled.button`
  border-radius: ${borderRadius};
  background: ${props => (props.alt ? "#110E3C" : "#333")};
  color: ${props => (props.alt ? "white" : "black")};
  font-size: 1rem;
`;

export default class SearchBar extends Component {
  state = {
    term: ""
  };
  onInputChange = e => {
    this.props.handleInput(e.target.value);
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onFormSubmit();
  };

  render() {
    return (
      <Container>
        <FormCitySearch onSubmit={this.onFormSubmit}>
          <Input
            type="text"
            name="city"
            placeholder="ex. London,uk"
            value={this.props.searchTerm}
            onChange={this.onInputChange}
          />
          <Button alt>Quick Search</Button>
        </FormCitySearch>
      </Container>
    );
  }
}
