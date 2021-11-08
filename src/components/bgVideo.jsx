import React from "react";
import { useState } from "react";

const BackgroundVideo = () => {
  const [active, setActive] = useState(false);
  const videoSrc =
    "https://chucknorris.com/wp-content/themes/chuck-norris/videos/chucknorris.mp4";

  const setBrightnessOnVideo = () => {
    setTimeout(() => {
      setActive(true);
    }, 12780);
  };

  setBrightnessOnVideo();
  return (
    <video
      className={`myVideo ${active ? "addFilter" : ""}`}
      id="myVideo"
      autoPlay
      muted
    >
      <source src={videoSrc} type="video/mp4" />
    </video>
  );
};

export default BackgroundVideo;
