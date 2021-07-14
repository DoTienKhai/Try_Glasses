import React, { Component } from "react";

export default class Rendercondition extends Component {
  login = true;
  name = "Nguyen hong Quan";
  renderCheck = () => {
    if (this.login) {
      return <h1>Đăng nhập thành công</h1>;
    }
    return <button>Đăng nhập</button>;
  };
  render() {
    return <div>{this.renderCheck()}</div>;
  }
}
