import React from "react";

const BackgroundVideo = () => {
  const videoSrc =
    "https://chucknorris.com/wp-content/themes/chuck-norris/videos/chucknorris.mp4";

  return (
    <video className="myVideo" id="myVideo" autoPlay muted loop>
      <source src={videoSrc} type="video/mp4" />
    </video>
  );
};

export default BackgroundVideo;
