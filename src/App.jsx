import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/page/HomePage";
import HeaderPage from "./components/HeaderPage";
import UploadPage from "./pages/page/UploadPage";
import NotFoundPage from "./pages/page/NotFoundPage";
import { useState } from "react";

function App() {
  //-----------------------------------
  const [videos, setVideos] = useState([]);

  // We are getting the api_url and api_key FROM the API documentation we were provided.
  // Refer to the API docs for more info.
  // This is a common practice, you should almost always have a const api_url and api_key.

  const api_url = "http://localhost:3000";
  // const api_url = "https://project-2-api.herokuapp.com";
  const api_key = "bdd57ec0-fa70-4c84-9316-db69b13293c7";

  // This allows us to change the different pages using
  // import { BrowserRouter, Routes, Route } from "react-router-dom";
  // This gives the illusion of multi-page application. (multiple HTMLs)
  // in reality, we only have ONE html. This is the power of REACT.
  // This is referred to as "single-page application" (SPA).

  return (
    <BrowserRouter>
      {/* What ever is outside of <Routes> will be ignored when you switch to diff page. Hence, we 
      leave the HeaderPage OUTSIDE of the Routes because we want it to stay the same in other pages. */}
      <HeaderPage />
      {/* The reason for two routes for HomePages is: HomePage1- gives us the default video.
      HomePage2- gives us a SPECIFIC video, specified by the video id, hence, path="/videos/:id"  */}
      <Routes>
        {/* HomePage1 */}
        <Route
          path="/"
          // we passed some props here
          element={
            <HomePage
              videos={videos}
              setVideos={setVideos}
              api_url={api_url}
              api_key={api_key}
            />
          }
        />
        {/* HomePage2 */}
        <Route
          // colon specifying like variable (useParams). No need to put colon in destructuring in HomePage.
          path="/videos/:id"
          // we passed some props here
          element={
            <HomePage
              videos={videos}
              setVideos={setVideos}
              api_url={api_url}
              api_key={api_key}
            />
          }
        />
        {/* When we go to /UploadPage, we go to that page. */}
        <Route
          path="/UploadPage"
          // we passed some props here
          element={
            <UploadPage
              videos={videos}
              setVideos={setVideos}
              api_url={api_url}
              api_key={api_key}
            />
          }
        />
        {/* Whenever you set path as "*", it catches any path that doesn't match the Route above.
         * = unkonwn amount of characters. ex. *fsdfsdfsdfs */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
