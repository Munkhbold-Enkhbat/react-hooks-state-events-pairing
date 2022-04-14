import React from "react"

function Comments({comments}) {  
   
  function renderComments() {    
    return comments.map(comment => {
      return (
        <>
          <h4>{comment.user}</h4>
          <p>{comment.comment}</p>
        </>
      )      
    })
  }    
  
  return (
    <div className="comments">
      <h2>{comments.length} Comments</h2>
      {renderComments()}
    </div>    
  )
}

export default Comments