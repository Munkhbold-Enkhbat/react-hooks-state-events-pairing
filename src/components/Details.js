import React from "react"

function Details({video, upVotes, setUpVotes, downVotes, setDownVotes}) {

  function handleUpVotes() {
    setUpVotes(currentUpVotes => currentUpVotes + 1)
  }

  function handleDownVotes() {
    setDownVotes(currentDownVotes => currentDownVotes + 1)
  }

  return (
    <>
      <h1>{video.title}</h1>
      <p>{video.views} Views | Uploaded {video.createdAt}</p>
      <button onClick={handleUpVotes}>{upVotes}👍</button>
      <button onClick={handleDownVotes}>{downVotes}👎</button>
    </>    
  )
}

export default Details