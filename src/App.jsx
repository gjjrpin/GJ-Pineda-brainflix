import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/page/HomePage";
import HeaderPage from "./components/HeaderPage";
import UploadPage from "./pages/page/UploadPage";
import NotFoundPage from "./pages/page/NotFoundPage";

function App() {
  //-----------------------------------

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
        <Route path="/" element={<HomePage />} />
        {/* HomePage2 */}
        <Route
          // colon specifying like variable (useParams). No need to put colon in destructuring in HomePage.
          path="/videos/:id"
          element={<HomePage />}
        />
        {/* When we go to /UploadPage, we go to that page. */}
        <Route path="/UploadPage" element={<UploadPage />} />
        {/* Whenever you set path as "*", it catches any path that doesn't match the Route above. 
        * = unkonwn amount of characters. ex. *fsdfsdfsdfs */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
