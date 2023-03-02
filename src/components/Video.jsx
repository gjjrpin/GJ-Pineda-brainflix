import "./Video.scss";
import Comments from "./Comments";
// This is importing state.
import React, { useState } from "react";
// props is similar to parameters. Just passing some data.
function Video(props) {
  return (
    <>
      <video controls width="250">
        <source src={props.videoData.video} type="video/mp4" />
      </video>
      <h2>{props.videoData.title}</h2>
      <div>
        <p>By: {props.videoData.channel}</p>
        <p>{props.videoData.views}</p>
        <p>{props.videoData.timestamp}</p>
        <p>{props.videoData.likes}</p>
      </div>
      <p>{props.videoData.description}</p>
      <Comments commentsData={props.videoData.comments} />
    </>
  );
}

export default Video;
