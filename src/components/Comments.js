import React from "react"
import video from "../data/video.js";

function Comments() {  
  let comments = video.comments  
  let renderComments = () => {    
    comments.map(comment => {
      console.log("Comment:", comment); 
      return (
        <div>
          <h4>{comment.user}</h4>
          <p>{comment.comment}</p>
        </div>
      )      
    })
  }    
  
  return (
    <div className="comments">
      <h2>{video.comments.length} Comments</h2>
      {renderComments()}
    </div>    
  )
}

export default Comments