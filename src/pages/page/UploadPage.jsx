import ".././page/UploadPage.scss";
import thumbnail from "../../assets/Images/Upload-video-preview.jpg";
// Navigating to something directly.
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

// UploadPage function is the entire UploadPage component.
/* Remember, EVERY FUNCTION HAS AN EMPTY PARAMETER/ARGUMENT "()".
When we are creating a function, we need a body "{}" which specifies what that function does.
When we call a function, we already specified what it does, we are simply calling it in another area. */
function UploadPage({ videos, setVideos, api_key, api_url }) {
  // This helps us navigate back to the HomePage
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // When we use handleSubmit, it navigates back to "/" which is the HomePage.
  function handleSubmit(event) {
    // This prevents refreshing the page when you submit something.
    event.preventDefault();
    alert("Video upload successful!");
    postNewVideo(title, description);
    // This returns to the homepage. Using navigate from React Router DOM.
    // Note: We do "/" because we want it to be dependent on the web app itself, not domain specific. ex. https//:www.google.com
    return navigate("/");
  }

  // This sends an alert upload cancelled when you click cancel. It's also linked to onClick={handleCancel} below.
  function handleCancel(event) {
    event.preventDefault();

    alert("Upload cancelled!");
  }

  // This function is calling out postNewVideo backend-api (POST /videos)
  // calling postNewVideo in line 20
  async function postNewVideo(title, description) {
    try {
      let videoObject = {
        title: title,
        channel: "GJ Pineda",
        description: description,
      };
      // newVideo from the backend is being stored in "response." being sent with "res.send(newVideo)" <-- from backend.
      const response = await axios.post(`${api_url}/videos`, videoObject);

      // example: below.
      // const numbers = [1,2,3,4]
      // [...numbers, 10] = [1,2,3,4, 10]
      setVideos([...videos, response]);
      // This catches the error
    } catch (error) {
      console.log(error);
    }
  }

  function handleTitleOnChange(event) {
    // console.log(event.target.value);
    setTitle(event.target.value);
  }
  function handleDescriptionOnChange(event) {
    // console.log(event.target.value);
    setDescription(event.target.value);
  }

  return (
    <div className="upload">
      <h2 className="upload__heading">Upload Video</h2>
      {/* This is linked to type="submit" */}
      <form className="upload__form" action="" onSubmit={handleSubmit}>
        <div className="upload__main-container">
          <div className="upload__main-container--left">
            <h3 className="upload__sub-heading">Video Thumbnail</h3>
            <img
              className="upload__thumbnail"
              // We are doing this because we are uploading it in line 2.
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
              // connecting react state to input
              value={title}
              // This connects the input to the React state.
              onChange={handleTitleOnChange}
            />
            <h3 className="upload__sub-heading">Add a Video Description</h3>
            <textarea
              rows="5"
              className="upload__input"
              placeholder="Add a description to your video"
              // connecting react state to input
              value={description}
              // This connects the input to the React state.
              onChange={handleDescriptionOnChange}
            ></textarea>
          </div>
        </div>
        <div className="upload__bottom-container">
          <div className="upload__button-sub-container">
            <span className="upload__button-icon"></span>
            {/* The attribute called type="submit" is linked to the form. Which has
            the form attribute called "onSubmit={handleSubmit}"  */}
            {/* additional note: "submit" is a reserved word. It's preferred to use "submit"
            whenever you are submitting a form. */}
            <button className="upload__publish" type="submit">
              Publish
            </button>
          </div>
          {/* we are using onClick here because we aren't actually submitting a form. */}
          <button className="upload__cancel clear-bg" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default UploadPage;
