import "./Comment.scss";

// We are specifying this comes from an object, hence, the curly brace. Only extracting commentData.
function Comment({ commentData }) {
  const formattedDate = new Date(commentData.timestamp).toLocaleDateString();

  return (
    <div className="comment__content">
      <img className="comment__placeholder" />
      <div className="comment__container">
        <div className="comment__sub-container">
          <p className="comment__name">{commentData.name}</p>
          <p className="comment__timestamp">{formattedDate}</p>
        </div>
        <p className="comment__message">{commentData.comment}</p>
      </div>
    </div>
  );
}

export default Comment;
