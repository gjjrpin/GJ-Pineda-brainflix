// We are specifying this comes from an object, hence, the curly brace. Only extracting commentData.
function Comment({ commentData }) {
  const formattedDate = new Date(commentData.timestamp).toLocaleDateString();

  return (
    <div className="comment__content">
      <img className="comment__placeholder" src="" alt="" />
      <p className="comment__name">{commentData.name}</p>
      <p className="comment__message">{commentData.comment}</p>
      <p className="comment__timestamp">{formattedDate}</p>
    </div>
  );
}

export default Comment;
