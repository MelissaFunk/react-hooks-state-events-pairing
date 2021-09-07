

function Header({ video, upVotes, downVotes, addVotes, removeVotes, removeComments }) {
  return(
    <div>
      <h2>{video.title}</h2>
      <p>{video.views} Views | Uploaded {video.createdAt}</p>
      <button onClick={addVotes}>{upVotes} 👍</button>
      <button onClick={removeVotes}>{downVotes} 👎</button>
      <br />
      <br />
      <button onClick={removeComments}>Hide Comments</button>
    </div>
  )
}

export default Header
