import ".././page/UploadPage.scss";
import thumbnail from "../../assets/Images/Upload-video-preview.jpg";

function UploadPage() {
  return (
    <div className="upload">
      <h2 className="upload__heading">Upload Video</h2>

      <form className="upload__form" action="">
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
              className="upload__input"
              placeholder="Add a description to your video"
            ></textarea>
          </div>
        </div>
        <div className="upload__button-container">
          <button className="upload__publish">Publish</button>
          <button className="upload__cancel">Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default UploadPage;
