import "./Video.scss";
import Comments from "./Comments";

// This is destructuring
function Video({ videoData }) {
  // This sets the format of the timestamp to: dd/mm/yyyy. stored it in variable.
  const formattedDate = new Date(videoData.timestamp).toLocaleDateString();
  return (
    <div className="content">
      <video
        className="content__video"
        controls
        width="250"
        poster={videoData.image}
      >
        <source src={videoData.video} type="video/mp4" />
      </video>
      <h2 className="content__title">{videoData.title}</h2>
      <div>
        <p className="content__channel">By {videoData.channel}</p>
        <p className="content__views">
          <span className="content__icon content__icon--eye"></span>
          {videoData.views}
        </p>
        <p className="content__timestamp">{formattedDate}</p>
        <p className="content__likes">
          <span className="content__icon content__icon--heart"></span>
          {videoData.likes}
        </p>
      </div>
      <p className="content__description">{videoData.description}</p>
      <Comments commentsData={videoData.comments} />
    </div>
  );
}

export default Video;
