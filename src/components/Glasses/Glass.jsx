import React, { Component } from "react";

export default class Glass extends Component {
  state = {
    name: 'GUCCI G8850U',
    desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.',
    imgSrc: require('../img/v1.png'),
  };
  render() {
    return (
      <div className="glass-content">
        <div className="app-name bg-dark text-light text-center">
          <h6>TRY GLASSES APP ONLINE</h6>
        </div>
        <div className="app-content">
          <div className="container">
            <div className="row justify-content-between ">
              <div className="col-lg-5 left-content mt-5 ">
                <div className="product-glass">
                  <img src={this.state.imgSrc} alt="" />
                </div>
                <div className="product-pic-model">
                  <img className="" />
                </div>
                <div className="product-detail">
                  <h6 className=" mx-3 text-primary">{this.state.name}</h6>
                  <p className="mt-2 mx-3  text-light">{this.state.desc}</p>
                </div>
              </div>
              <div className="col-lg-5 right-content mt-5">
                <div className="product-pic">
                  <img className="" />
                </div>
              </div>
            </div>
            <div className="product-item p-2 ">
              <div className="row">
                <button
                  className="col-lg-2 btn-1"
                  onClick={() => {
                    this.setState({
                      name: "GUCCI G8850U",
                      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.",
                      imgSrc:  require("../img/v1.png"),
                    });
                  }}
                ></button>
                <button
                  className="col-lg-2 btn-2"
                  onClick={() => {
                    this.setState({
                      name: "GUCCI G8759H",
                      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.",
                      imgSrc:  require("../img/v2.png"),
                    });
                  }}
                ></button>
                <button
                  className="col-lg-2 btn-3"
                  onClick={() => {
                    this.setState({
                      name: "DIOR D6700HQ",
                      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.",
                      imgSrc:  require("../img/v3.png"),
                    });
                  }}
                ></button>
                <button
                  className="col-lg-2 btn-4"
                  onClick={() => {
                    this.setState({
                      name: "DIOR D6005U",
                      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.",
                      imgSrc:  require("../img/v4.png"),
                    });
                  }}
                ></button>
                <button
                  className="col-lg-2 btn-5"
                  onClick={() => {
                    this.setState({
                      name: "PRADA P8750",
                      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.",
                      imgSrc:  require("../img/v5.png"),
                    });
                  }}
                ></button>
                <button
                  className="col-lg-2 btn-6"
                  onClick={() => {
                    this.setState({
                      name: "PRADA P9700",
                      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.",
                      imgSrc:  require("../img/v6.png"),
                    });
                  }}
                ></button>
                <button
                  className="col-lg-2 btn-7"
                  onClick={() => {
                    this.setState({
                      name: "FENDI F8750",
                      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.",
                      imgSrc:  require("../img/v7.png"),
                    });
                  }}
                ></button>
                <button
                  className="col-lg-2 btn-8"
                  onClick={() => {
                    this.setState({
                      name: "FENDI F8500",
                      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.",
                      imgSrc:  require("../img/v8.png"),
                    });
                  }}
                ></button>
                <button
                  className="col-lg-2 btn-9"
                  onClick={() => {
                    this.setState({
                      name: "FENDI F4300",
                      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.",
                      imgSrc:  require("../img/v9.png"),
                    });
                  }}
                ></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
