import "./HomePage.scss";
import Video from "../../components/Video";
import { useParams } from "react-router-dom";

function HomePage() {
  // we're getting the url ID and putting it to handleChangeVideo which changes the videos for us.
  const { id } = useParams();

  return (
    <div>
      <Video id={id} />
    </div>
  );
}

export default HomePage;
