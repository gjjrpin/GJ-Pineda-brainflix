import "./App.css";
import Video from "./components/Video";
import Header from "./components/Header";

// transferring one data from data folder to video.
import data from "./data/video-details.json";

function App() {
  return (
    <>
      <Header />
      {/* we're putting the first index of data to videoData. We can access it through props.videoData */}
      <Video videoData={data[0]} />
    </>
  );
}

export default App;
