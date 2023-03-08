import "./HomePage.scss";
import Video from "../../components/Video";

function HomePage({ videosData, currentVideo, handleChangeVideo }) {
  return (
    <div>
      <Video
        videosData={videosData}
        currentVideo={currentVideo}
        handleChangeVideo={handleChangeVideo}
      />
    </div>
  );
}

export default HomePage;
