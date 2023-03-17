import "./HomePage.scss";
import Video from "../../components/Video";
import { useParams } from "react-router-dom";

// What does useParams do? useParams() --> extracts data from the URL.
// ex. /videos/:id --> we are extracting /videos/"something". We are storing the "something"
// in a variable called "id" for later use.

function HomePage({ videos, setVideos, api_key, api_url }) {
  // we're getting the url ID and putting it to handleChangeVideo which changes the videos for us.
  // id comes from useParams(). Every time there's a ":" and name (id), it gets stored in useParams().
  // note: id is currently undefined because we didn't specify :id in its path. look below:
  // <Route path="/" element={<HomePage />} /> in path "/"

  // <Route path="/videos/:id" element={<HomePage /> />
  const { id } = useParams();

  return (
    <div>
      {/* we are putting the id that we got, to the Video component. We are storing it in the props "id." */}
      <Video
        id={id}
        videos={videos}
        setVideos={setVideos}
        api_key={api_key}
        api_url={api_url}
      />
    </div>
  );
}

export default HomePage;
