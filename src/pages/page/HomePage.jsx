import "./HomePage.scss";
import Video from "../../components/Video";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

function HomePage({ videosData, currentVideo, handleChangeVideo, api_key }) {
  // we're getting the url ID and putting it to handleChangeVideo which changes the videos for us.
  const { id } = useParams();
  useEffect(() => {
    // This means opposite of id.
    if (!id) {
      // This changes the current video to the first video via ID.
      // Refer to app.jsx line 65.
      if (!videosData) {
        handleChangeVideo(videosData[0].id);
      }
    } else {
     
      // If the URL has the id, we use bottom, if not, we use above.
      handleChangeVideo(id);
    }
  }, [id]);

  return (
    <div>
      <Video
        videosData={videosData}
        currentVideo={currentVideo}
        api_key={api_key}
        // This is no longer needed because it's being used in the HomePage function.
        // handleChangeVideo={handleChangeVideo}
      />
    </div>
  );
}

export default HomePage;
