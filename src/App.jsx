import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import "./App.scss";
import HomePage from "./pages/page/HomePage";
import Header from "./components/Header";
import VideoDetailPage from "./pages/page/VideoDetailPage";
import UploadPage from "./pages/page/UploadPage";
import NotFoundPage from "./pages/page/NotFoundPage";

// transferring one data from data folder to video.
import mock_data from "./data/video-details.json";

function App() {
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
  // This is getting api key using async/await
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
    if (isApiKeyReady.current) {
    const response = await axios.get(
      `${api_url}/videos/${id}?api_key=${api_key}`
    );

    setCurrentVideo(response.data);
    }
  }

  //-----------------------------------
  // This is using the mock data. commenting it out because it's no longer used.

  // update the currently selected video w/ the given ID.
  // function changeVideo(target_id) {
  //   console.log(target_id);
  //   const selectedVideo = videos.filter((video) => video.id === target_id);

  //   setCurrentVideo(selectedVideo[0]);
  // }

  //-----------------------------------

  return (
    <BrowserRouter>
      {/* What ever is outside of <Routes> will be ignored when you switch to diff page. */}
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              videosData={videos}
              currentVideo={currentVideo}
              // changing from changeVideo to getVideoDetails to use the API data.
              handleChangeVideo={getVideoDetails}
              // we're passing the api_key from the app component to homepage, to video component
              api_key={api_key}
            />
          }
        />
        <Route
          // colon specifying like variable (useParams). No need to put colon in destructuring in HomePage.
          path="/videos/:id"
          element={
            <HomePage
              videosData={videos}
              currentVideo={currentVideo}
              // changing from changeVideo to getVideoDetails to use the API data.
              handleChangeVideo={getVideoDetails}
              // we're passing the api_key from the app component to homepage, to video component
              api_key={api_key}
            />
          }
        />
        <Route path="/UploadPage" element={<UploadPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
