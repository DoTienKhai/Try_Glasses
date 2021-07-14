import React, { Component } from "react";
import Banner from "./Banner";
import Item from "./Item";

export default class Body extends Component {
  render() {
    return (
      <div>
        <Banner />
        <div className="album py-5 bg-light">
          <div className="container">
            <div className="row">
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
