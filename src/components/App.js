import video from "../data/video.js";
import Header from "./Header"
import CommentsList from "./CommentsList"
import { useState } from "react"

function App() {
  const [upVotes, setUpVotes] = useState(video.upvotes)
  const [downVotes, setDownVotes] = useState(video.downvotes)
  const [comments, setComments] = useState(video.comments)

  function addVotes() {
    setUpVotes(upVotes => upVotes + 1)
  }

  function removeVotes() {
    setDownVotes(downVotes => downVotes - 1)
  }

  function removeComments() {
    const newCommentList = comments.filter(comment => comment.id === null)
    setComments(newCommentList)
  }

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <Header 
        video={video} 
        upVotes={upVotes}
        downVotes={downVotes}
        addVotes={addVotes}
        removeVotes={removeVotes}
        removeComments={removeComments}
      />
      <CommentsList comments={comments} />
    </div>
  );
}

export default App;
