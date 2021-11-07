import React, { Component, Fragment } from "react";
// import BackgroundVideo from "./bgVideo";

class Home extends Component {
  showContentAfterVideo = () => {
    setTimeout(() => {
      const chuckContent = document.querySelector(".chuck__content");
      const chuckVideo = document.getElementById("myVideo");

      chuckVideo.style.filter = "brightness(5%)";
      chuckContent.classList.remove("hidden");

      document.querySelector(".chuck__content").classList.add("animate__tada");
    }, 12780);
  };

  render() {
    return (
      <Fragment>
        {/* <BackgroundVideo /> */}
        {/* DIV HIDDEN */}
        <div className="chuck__content animate__animated">
          <div className="chuck__gif animate__animated">
            <img src="../chuck.gif" alt="chuck" className="chuck__img" />
          </div>
          <button className="chuck__btn animate__animated">Chuck It!</button>
        </div>
        <p className="chuck__joke animate__animated"></p>
      </Fragment>
    );
  }
}

export default Home;
