import Comments from "./Comments"

function CommentsList({ comments }) {
  const eachComment = comments.map(comment => (
    <Comments 
    key={comment.id}
    user={comment.user}
    comment={comment.comment}
  />
  ))
  return(
    <div>
      <hr></hr>
      <h2>{comments.length} Comments</h2>
      {eachComment}
    </div>
  )
}

export default CommentsList