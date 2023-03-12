import "./CommentList.scss";
import Form from "./Form";
import Comment from "./Comment";

// This is destructuring
function CommentList({ commentsData, postNewComment, deleteComment }) {
  return (
    <div className="comment-list">
      <p className="comment-list__counter">{commentsData.length} Comments</p>
      <Form postNewComment={postNewComment} />
      <div>
        {commentsData.map((comment) => (
          <Comment
            key={comment.id}
            commentData={comment}
            deleteComment={deleteComment}
          />
        ))}
      </div>
    </div>
  );
}

export default CommentList;
