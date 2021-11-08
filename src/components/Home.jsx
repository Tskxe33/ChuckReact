import React, { Component, Fragment } from "react";
import chuckGif from "../chuck.gif";
import BackgroundVideo from "./bgVideo";
import { getJoke } from "./../jokes";

class Home extends Component {
  state = {
    active: false,
    clicked: false,
    joke: "",
  };

  showContentAftefVideo = () => {
    setTimeout(() => {
      this.setState({ active: true });
    }, 12780);
  };

  handleClick = () => {
    console.log(this.chuckContent);
    getJoke().then((res) => {
      this.setState({ joke: res[0].joke, clicked: true });
    });
  };

  render() {
    this.showContentAftefVideo();
    return (
      <Fragment>
        <BackgroundVideo />
        <div
          className={`chuck__content hidden animate__animated ${
            this.state.active ? "removeHidden" : ""
          }`}
        >
          <div className="chuck__gif animate__animated">
            <img src={chuckGif} alt="chuck" className="chuck__img" />
          </div>
          <button
            className="chuck__btn animate__animated"
            onClick={this.handleClick}
          >
            {this.state.clicked ? `More chuckles!` : "Chuck It!"}
          </button>
        </div>
        <p className="chuck__joke animate__animated">{this.state.joke}</p>
      </Fragment>
    );
  }
}

export default Home;
