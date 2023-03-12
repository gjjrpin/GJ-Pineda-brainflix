import "./Comment.scss";

// We are specifying this comes from an object, hence, the curly brace. Only extracting commentData.
function Comment({ commentData, deleteComment }) {
  const dateFormat = {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  };
  // This sets the format of the timestamp to: dd/mm/yyyy. stored it in variable.
  const formattedDate = new Date(commentData.timestamp).toLocaleDateString(
    "en-US",
    dateFormat
  );

  // This will delete comments
  function handleDeleteComment() {
    console.log("deleted");
    deleteComment(commentData.id);
  }

  return (
    <div className="comment__content">
      <img className="comment__placeholder" />
      <div className="comment__container">
        <div className="comment__sub-container">
          <p className="comment__name">{commentData.name}</p>
          <p className="comment__timestamp">{formattedDate}</p>
        </div>
        <p className="comment__message">{commentData.comment}</p>
        <div>
          <button onClick={handleDeleteComment}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default Comment;
