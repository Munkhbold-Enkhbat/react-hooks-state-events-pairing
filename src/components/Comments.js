import React from "react"
import video from "../data/video.js";

function Comments() {

  function renderComments() {
    video.comments.map(comment => {
      return (
        <>
          <h4>{comment.user}</h4>
          <p>{comment.comment}</p>
        </>       
      )      
    })
  }

  return (
    <div>
      <h2>{video.comments.length} Comments</h2>
      {renderComments}
    </div>    
  )
}

export default Comments