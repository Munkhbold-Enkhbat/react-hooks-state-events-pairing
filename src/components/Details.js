import React from "react"
import video from "../data/video.js";

function Details() {
  return (
    <>
      <h1>{video.title}</h1>
      <p>{video.views} Views | Uploaded {video.createdAt}</p>
      <button>{video.upvotes}👍</button>
      <button>{video.downvotes}👎</button>
      <br/>
      <button className="hideComments">Hide Comments</button>
    </>    
  )
}

export default Details