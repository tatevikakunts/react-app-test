import React, { Component } from "react";
import Item from "./Item";

class ItemsContainer extends Component {
  render() {
    return (
      <div>
        {this.props.items.map((item) => (
          <Item key={item.title} item={item} />
        ))}
      </div>
    );
  }
}

export default ItemsContainer;
