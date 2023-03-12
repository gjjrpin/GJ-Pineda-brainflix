import ".././page/UploadPage.scss";
import thumbnail from "../../assets/Images/Upload-video-preview.jpg";
// Navigating to something directly.
import { useNavigate } from "react-router-dom";

function UploadPage() {
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    alert("Video upload successful!");
    // This returns to the homepage. Using navigate from React Router DOM.
    return navigate("/");
  }

  return (
    <div className="upload">
      <h2 className="upload__heading">Upload Video</h2>

      <form className="upload__form" action="" onSubmit={handleSubmit}>
        <div className="upload__main-container">
          <div className="upload__main-container--left">
            <h3 className="upload__sub-heading">Video Thumbnail</h3>
            <img
              className="upload__thumbnail"
              src={thumbnail}
              alt={thumbnail}
            />
          </div>
          <div className="upload__main-container--right">
            <h3 className="upload__sub-heading">Title Your Video</h3>
            <input
              className="upload__input"
              type="text"
              placeholder="Add a title to your video"
            />
            <h3 className="upload__sub-heading">Add a Video Description</h3>
            <textarea
              rows="5"
              className="upload__input"
              placeholder="Add a description to your video"
            ></textarea>
          </div>
        </div>
        <div className="upload__bottom-container">
          <div className="upload__button-sub-container">
            <span className="upload__button-icon"></span>
            <button className="upload__publish" type="submit">
              Publish
            </button>
          </div>
          <button className="upload__cancel">Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default UploadPage;
