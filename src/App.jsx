import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/page/HomePage";
import HeaderPage from "./components/HeaderPage";
import UploadPage from "./pages/page/UploadPage";
import NotFoundPage from "./pages/page/NotFoundPage";

function App() {

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
