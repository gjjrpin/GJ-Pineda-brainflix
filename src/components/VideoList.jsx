import "./VideoList.scss";
import { Link } from "react-router-dom";

function VideoList({ videosData, currentVideo, handleChangeVideo }) {
  return (
    <div className="video-list">
      <h3 className="video-list__header">Next Videos</h3>
      {videosData
        .filter((video) => video.id !== currentVideo.id)
        .map((videoData) => (
          // This makes the videoList data into links with ID. ex. localhost:3000/videos/${videoData.id}
          <Link
            key={videoData.id}
            to={`/videos/${videoData.id}`}
            // This is react inline-style. This removes the underline on the link.
            style={{ textDecoration: "none" }}
          >
            <div className="video-list__container">
              <div className="video-list__image-container">
                <img
                  className="video-list__image"
                  src={videoData.image}
                  alt="poster"
                />
              </div>
              <div className="video-list__sub-container">
                <h3 className="video-list__title">{videoData.title}</h3>
                <p className="video-list__channel">{videoData.channel}</p>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
}

export default VideoList;
