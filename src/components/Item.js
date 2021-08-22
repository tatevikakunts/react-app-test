import React, { Component } from "react";

class Item extends Component {
  render() {
    return (
      <div className="container-fluid justify-content-center">
        <ul className="list-unstyled">
          <li>
            <div className="card " style={{ width: "80%" }}>
              <div className="card-body">
                <h5 className="card-title">{this.props.item.title}</h5>
                <p className="card-text">{this.props.item.description}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Item;
