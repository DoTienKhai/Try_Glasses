import React, { Component } from "react";

export default class StateDemo extends Component {
  //state: là thuộc tính có sẵn của react class component giúp định nghĩa những nội dùng có khả năng thay đổi khi người dùng thao tác sự kiện
  state = {
    status: false,
  };

  userLogin = {
    name: "QuanNH",
    age: 20,
  };
  login = () => {
    let newState = {
      status: true,
    };
    this.setState(newState);
  };
  renderUserLogin = () => {
    if (this.state.status) {
      return (
        <h1>
          {this.userLogin.name} {this.userLogin.age} tuổi
        </h1>
      );
    }
    return (
      <button
        onClick={() => {
          this.login();
        }}
      >
        login
      </button>
    );
  };

  render() {
    return <div>{this.renderUserLogin()}</div>;
  }
}
