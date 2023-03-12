import "./Form.scss";
import avatar from "../assets/Images/Mohan-muruge.jpg";
import { useState } from "react";

function Form({ postNewComment }) {
  // The reason why its an empty string because when we type something,
  // we want it to be an empty string first.
  const [comment, setComment] = useState("");
  // This is false because we DO NOT want a red border BEFORE we submit anything.
  // This checks for error. The default is false
  const [isError, setIsError] = useState(false);

  // The event is a reserved parameter. onClick, onSubmit, onChange, are ALL stored in event.
  // note: event is NOT a reserved word, it could be any word/letter in the parameter.
  function handlePostNewComment(event) {
    // prevent default so it doesn't refresh.
    event.preventDefault();
    // This checks validation. Checks if comment is empty.
    if (comment !== "") {
      // if not empty, we can post a comment in "comment"
      // THIS LINKS TO LINE 86 IN VIDEO COMPONENT!!!
      postNewComment(comment);
      // this sets an empty comment.
      // Note: if you put "hello", notice the difference.
      setComment("");
      // This resets the comment form when it's valid.
      setIsError(false);
      // If it is empty, that means, there's an error.
    } else {
      setIsError(true);
      // sends an alert message to fill the form.
      alert("Please enter a valid comment!");
    }
  }
  // every time we type, we call this function.
  function handleCommentChange(event) {
    // console.log(event.target.value);
    setComment(event.target.value);
  }

  // -----------EVERYTHING AT THE TOP IS NOT BEING RENDERED BY JAVASCRIPT-------------
  // -----------THIS IS WHAT IS GETTING RENDERED------------

  return (
    <div className="form">
      <div className="form__main-container">
        <img className="form__avatar" src={avatar} alt="avatar"></img>
        {/* This happens when click on type="submit" buttons */}
        <form className="form__container" onSubmit={handlePostNewComment}>
          <p className="form__title">Join The Conversation</p>
          <div className="form__sub-container">
            {/* ----------------------------------- */}
            <textarea
              // This checks error state via ternary operator. Every time you use "?" and ":". ex. "condition ? true: false"
              // If isError is true, do "form__error-state", if not, "".
              className={`form__input ${isError ? "form__error-state" : ""}`}
              placeholder="Add a new comment"
              rows="5"
              // refer to lin 35!!!
              onChange={handleCommentChange}
              // setting the value to the state, which is comment.
              // we do this because when we submit out comment, we want to change it back to a blank string.
              // refer to line 24!!!
              value={comment}
            ></textarea>
            {/* ----------------------------------- */}
            <div>
              <span className="form__button--icon"></span>
              {/* "type="submit" is provided by HTML, submit is specific for forms even though it's a string. */}
              <button className="form__button" type="submit">
                Comment
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
