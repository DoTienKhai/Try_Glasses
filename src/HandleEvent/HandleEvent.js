import React, { Component } from "react";

export default class HandleEvent extends Component {
  handerClick = (name) => {
    alert("Hello " + name);
  };
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.handerClick("Hai");
          }}
        >
          Click vào đây
        </button>
      </div>
    );
  }
}
