import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/page/HomePage";
import HeaderPage from "./components/HeaderPage";
import UploadPage from "./pages/page/UploadPage";
import NotFoundPage from "./pages/page/NotFoundPage";

// transferring one data from data folder to video. No longer being used as of Sprint-1
// import mock_data from "./data/video-details.json";

function App() {
  //-----------------------------------
  // This is getting api key using async/await

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
      <HeaderPage />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          // colon specifying like variable (useParams). No need to put colon in destructuring in HomePage.
          path="/videos/:id"
          element={<HomePage />}
        />
        <Route path="/UploadPage" element={<UploadPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
