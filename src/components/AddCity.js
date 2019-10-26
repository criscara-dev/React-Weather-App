import React, { Component } from "react";

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
      <div>
        <form
          style={{ display: "flex" }}
          method="get"
          onSubmit={this.handleSubmit}
        >
          <input
            style={{ flex: "4" }}
            type="text"
            name="title"
            placeholder="ex. London,uk"
            value={this.state.title}
            onChange={this.onHandleChange}
          />
          <input style={{ flex: "1" }} type="submit" value="+ add city" />
        </form>
      </div>
    );
  }
}
