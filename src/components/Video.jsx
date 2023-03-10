import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import "./Video.scss";
import VideoList from "./VideoList";
import CommentList from "./CommentList";

// This is destructuring
function Video({ id }) {
  const api_url = "https://project-2-api.herokuapp.com";

  const [api_key, setApi_key] = useState("");

  // useRef to prevent rendering "cleaning up". Not rendered.
  const isApiKeyReady = useRef(false);

  // The entire data (an array of videos)
  const [videos, setVideos] = useState([]); //mock_data is the default value of "videos"

  // Currently selected video (one video)
  const [currentVideo, setCurrentVideo] = useState({});

  //-----------------------------------

  // 1. get API key
  // 2. Once we got API key, use it to get videos through "something.com/videos/?api_key=..."

  useEffect(() => {
    getApiKey();
  }, []);

  // useEffect will run at least once when the component is created.
  useEffect(() => {
    getVideos();
  }, [api_key]);

  //-----------------------------------

  useEffect(() => {
    // This means opposite of id.
    if (!id) {
      // This changes the current video to the first video via ID.
      // Refer to app.jsx line 65.

      getVideoDetails(videos[0]?.id);
    } else {
      // If the URL has the id, we use bottom, if not, we use above.
      getVideoDetails(id);
    }
  }, [id, videos, getVideoDetails]);

  //-----------------------------------

  async function getApiKey() {
    const response = await axios.get(api_url + "/register");

    isApiKeyReady.current = true;

    // updates state (useState)
    setApi_key(response.data.api_key);
  }
  //This is getting the videos data
  async function getVideos() {
    if (isApiKeyReady.current) {
      const response = await axios.get(`${api_url}/videos/?api_key=${api_key}`);

      // updates state (useState)
      setVideos(response.data);

      getVideoDetails(response.data[0].id);
    }
  }

  // This is using the API. Getting the data from the API.
  async function getVideoDetails(id) {
    if (isApiKeyReady.current && id) {
      const response = await axios.get(
        `${api_url}/videos/${id}?api_key=${api_key}`
      );

      setCurrentVideo(response.data);
    }
  }

  //-----------------------------------

  const dateFormat = {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  };
  // This sets the format of the timestamp to: dd/mm/yyyy. stored it in variable.
  const formattedDate = new Date(currentVideo.timestamp).toLocaleDateString(
    "en-US",
    dateFormat
  );

  return (
    <div>
      <video
        className="content__video"
        controls
        width="250"
        poster={currentVideo.image}
        src={`${currentVideo.video}?api_key=test`}
      >
        <source
          src={`${currentVideo.video}?api_key=${api_key}`}
          type="video/mp4"
        />
      </video>
      <div className="video-side">
        <div className="content">
          <h2 className="content__title">{currentVideo.title}</h2>
          <div className="content__container">
            <div className="content__items">
              <p className="content__channel">By {currentVideo.channel}</p>
              <p className="content__timestamp">{formattedDate}</p>
            </div>

            <div className="content__items">
              <p className="content__views">
                <span className="content__icons content__icons--eye"></span>
                {currentVideo.views}
              </p>

              <p className="content__likes">
                {" "}
                <span className="content__icons content__icons--heart"></span>
                {currentVideo.likes}
              </p>
            </div>
          </div>
          <p className="content__description">{currentVideo.description}</p>
          {/* && if currentVideo.comments is "TRUTHY", render <CommentList>  */}
          {currentVideo.comments && (
            <CommentList commentsData={currentVideo.comments} />
          )}
        </div>
        <VideoList
          videosData={videos}
          currentVideo={currentVideo}
          handleChangeVideo={getVideoDetails}
        />
      </div>
    </div>
  );
}

export default Video;
