import "./VideoList.scss";

function VideoList({ videosData, currentVideo, handleChangeVideo }) {
  return (
    <div className="video-list">
      <h3 className="video-list__header">Next Videos</h3>
      {videosData
        .filter((video) => video.id !== currentVideo.id)
        .map((videoData) => (
          <div
            className="video-list__container"
            onClick={() => handleChangeVideo(videoData.id)}
          >
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
        ))}
    </div>
  );
}

export default VideoList;
