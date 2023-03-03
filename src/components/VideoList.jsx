import "./VideoList.scss";

function VideoList({ videosData, currentVideo, handleChangeVideo }) {
  return (
    <div className="side-videos">
      <h3 className="side-videos__header">Next Videos</h3>
      {videosData
        .filter((video) => video.id !== currentVideo.id)
        .map((videoData) => (
          <div
            className="side-videos__container"
            onClick={() => handleChangeVideo(videoData.id)}
          >
            <div className="side-videos__image-container">
              <img
                className="side-videos__image"
                src={videoData.image}
                alt="poster"
              />
            </div>
            <div className="side-videos__sub-container">
              <h3 className="side-videos__title">{videoData.title}</h3>
              <h4 className="side-videos__channel">{videoData.channel}</h4>
            </div>
          </div>
        ))}
    </div>
  );
}

export default VideoList;
