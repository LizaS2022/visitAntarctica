import React, { useEffect, useState } from "react";
import axios from "axios";
import "./video.css";

const DisplayVideos = () => {
  return (
    <section id="videos">
      <div className="container align-center video-container">
        <iframe
          className="video-frame"
          width="340"
          height="220"
          src="https://www.youtube.com/embed/ImwrzOAXpk8"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <iframe
          className="video-frame"
          width="340"
          height="220"
          src="https://www.youtube.com/embed/TiXOQn7z9Hg"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <iframe
          className="video-frame"
          width="340"
          height="220"
          src="https://www.youtube.com/embed/t57DPnH06V0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <iframe
          className="video-frame"
          width="340"
          height="220"
          src="https://www.youtube.com/embed/shF-ZscudbU"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </section>
  );
};

export default DisplayVideos;
