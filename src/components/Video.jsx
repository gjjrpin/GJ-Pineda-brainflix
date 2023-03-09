import "./Video.scss";
import VideoList from "./VideoList";
import CommentList from "./CommentList";

// This is destructuring
function Video({ videosData, currentVideo, handleChangeVideo, api_key }) {
  const dateFormat = {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  };
  // This sets the format of the timestamp to: dd/mm/yyyy. stored it in variable.
  const formattedDate = new Date(currentVideo.timestamp).toLocaleDateString(
    "en-US",
    dateFormat
  );

  return (
    <div>
      <video
        className="content__video"
        controls
        width="250"
        poster={currentVideo.image}
      >
        <source
          src={`${currentVideo.video}?api_key=${api_key}`}
          type="video/mp4"
        />
      </video>
      <div className="video-side">
        <div className="content">
          <h2 className="content__title">{currentVideo.title}</h2>
          <div className="content__container">
            <div className="content__items">
              <p className="content__channel">By {currentVideo.channel}</p>
              <p className="content__timestamp">{formattedDate}</p>
            </div>

            <div className="content__items">
              <p className="content__views">
                <span className="content__icons content__icons--eye"></span>
                {currentVideo.views}
              </p>

              <p className="content__likes">
                {" "}
                <span className="content__icons content__icons--heart"></span>
                {currentVideo.likes}
              </p>
            </div>
          </div>
          <p className="content__description">{currentVideo.description}</p>
          {/* && if currentVideo.comments is "TRUTHY", render <CommentList>  */}
          {currentVideo.comments && (
            <CommentList commentsData={currentVideo.comments} />
          )}
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
