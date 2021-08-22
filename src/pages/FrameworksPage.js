import React from "react";
import { Component } from "react";
import items from "../data/items";
import ItemsContainer from "../components/ItemsContainer";

export default class FrameworksPage extends Component {
  state = {
    searchTerm: ""
  };
  editSearchTerm = (event) => {
    this.setState({ searchTerm: event.target.value });
  };
  dynamicSearch = () => {
    return items.filter(
      (item) =>
        item.title
          .toLowerCase()
          .includes(this.state.searchTerm.toLowerCase()) ||
        item.description
          .toLowerCase()
          .includes(this.state.searchTerm.toLowerCase())
    );
  };
  render() {
    return (
      <div style={{ textAlign: "center", paddingTop: "30vh" }}>
        <h1 className="mb-3">Frameworks</h1>
        <input
          className="form-control-md px-5 mb-5 border-primary"
          type="text"
          value={this.state.searchTerm}
          onChange={this.editSearchTerm}
          placeholder="Search for a framework"
        />
        <br />
        <ItemsContainer items={this.dynamicSearch()} />
      </div>
    );
  }
}
