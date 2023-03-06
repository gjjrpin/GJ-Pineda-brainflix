import "./Video.scss";
import VideoList from "./VideoList";
import CommentList from "./CommentList";

// This is destructuring
function Video({ videoData, videosData, currentVideo, handleChangeVideo }) {
  // This sets the format of the timestamp to: dd/mm/yyyy. stored it in variable.
  const formattedDate = new Date(videoData.timestamp).toLocaleDateString();
  return (
    <div>
      <video
        className="content__video"
        controls
        width="250"
        poster={videoData.image}
      >
        <source src={videoData.video} type="video/mp4" />
      </video>
      <div className="video-side">
        <div className="content">
          <h2 className="content__title">{videoData.title}</h2>
          <div className="content__container">
            <div className="content__items">
              <p className="content__channel">By {videoData.channel}</p>
              <p className="content__timestamp">{formattedDate}</p>
            </div>

            <div className="content__items">
              <p className="content__views">
                <span className="content__icons content__icons--eye"></span>
                {videoData.views}
              </p>

              <p className="content__likes">
                {" "}
                <span className="content__icons content__icons--heart"></span>
                {videoData.likes}
              </p>
            </div>
          </div>
          <p className="content__description">{videoData.description}</p>
          <CommentList commentsData={videoData.comments} />
        </div>
        <VideoList
          videosData={videosData}
          currentVideo={currentVideo}
          handleChangeVideo={handleChangeVideo}
        />
      </div>
    </div>
  );
}

export default Video;
