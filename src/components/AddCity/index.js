import React, { Component } from "react";
import { Container, Input, Button, FormCitySearch } from "./addCity.styles";

export default class AddCity extends Component {
  state = {
    title: ""
  };
  onHandleChange = e => {
    this.setState({
      // title: e.target.value
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addCity(this.state.title);
    this.setState({ title: "" });
  };

  render() {
    return (
      <Container>
        <FormCitySearch onSubmit={this.handleSubmit}>
          <Input
            type="text"
            name="title"
            placeholder="ex. London,uk"
            value={this.state.title}
            onChange={this.onHandleChange}
          />
          <Button>+ add city</Button>
          <Button alt>Quick Search</Button>
        </FormCitySearch>
      </Container>
    );
  }
}
