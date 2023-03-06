import React, { useState } from "react";
import "./App.scss";
import Video from "./components/Video";
import Header from "./components/Header";

// transferring one data from data folder to video.
import mock_data from "./data/video-details.json";

function App() {
  // The entire data (an array of videos)
  const [videos, setVideos] = useState(mock_data); //mock_data is the default value of "videos"

  // Currently selected video (one video)
  const [currentVideo, setCurrentVideo] = useState(mock_data[0]);

  //-----------------------------------

  // update the currently selected video w/ the given ID.
  function changeVideo(target_id) {
    const selectedVideo = videos.filter((video) => video.id === target_id);
    setCurrentVideo(selectedVideo[0]);
  }

  //-----------------------------------

  return (
    <>
      <Header />
      {/* we're putting the first index of data to videoData. We can access it through props.videoData */}
      <Video
        videoData={currentVideo}
        videosData={videos}
        currentVideo={currentVideo}
        handleChangeVideo={changeVideo}
      />
    </>
  );
}

export default App;
