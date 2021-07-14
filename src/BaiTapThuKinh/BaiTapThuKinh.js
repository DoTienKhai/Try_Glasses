/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import styleGlass from "./Style.module.css";
import dataGlass from "../Data/dataGlasses.json";

export default class BaiTapThuKinh extends Component {
  //render glass
  renderGlass = () => {
    return dataGlass.map((glass, index) => {
      return (
        <div className={`${styleGlass.glass__item} col-2`} key={index}>
          <img
            src={glass.url}
            onClick={() => {
              this.tryGlass(glass.name, glass.url, glass.desc);
            }}
          />
        </div>
      );
    });
  };

  state = {
    title: "Kính đẹp",
    urlGlass: "./assets/glassesImage/v1.png",
    detail:
      "Được gia công tỉ mỉ cẩn thận luôn có tác dụng chống tia cực tím cho mắt",
  };

  tryGlass = (newTitle, newUrlGlass, newDetail) => {
    let newState = {
      title: newTitle,
      urlGlass: newUrlGlass,
      detail: newDetail,
    };
    this.setState(newState);
  };
  render() {
    return (
      <div
        style={{
          backgroundImage: "url(./assets/glassesImage/background.jpg)",
          height: "100vh",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className={styleGlass.title}>
          <h2>TRY GLASSES APP ONLINE</h2>
        </div>
        <div className={styleGlass.wapper}>
          <div className={`${styleGlass.person} row mr-0`}>
            <div className={`${styleGlass.person_item} col-6 mt-5`}>
              <img src="./assets/glassesImage/model.jpg" alt="err" />
              <div className={styleGlass.person_item__detail}>
                <h5>{this.state.title}</h5>
                <p>{this.state.detail}</p>
              </div>
              <img
                className={styleGlass.glassdemo}
                src={this.state.urlGlass}
                atl="err"
              />
            </div>
            <div className={`${styleGlass.person_item} col-6 mt-5`}>
              <img src="./assets/glassesImage/model.jpg" alt="err" />
            </div>
          </div>

          <div className={`${styleGlass.boxglass} row `}>
            {this.renderGlass()}
          </div>
        </div>
      </div>
    );
  }
}
