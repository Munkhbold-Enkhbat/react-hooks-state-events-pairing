import React, { useState } from "react";
import video from "../data/video.js";
import Details from "./Details"
import Comments from "./Comments.js";
import Video from "./Video.js";

function App() {
  // console.log("Here's your data:", video);

  const [upVotes, setUpVotes] = useState(video.upvotes)
  const [downVotes, setDownVotes] = useState(video.downvotes)  
  const [isCommentsHided, setIsCommentsHided] = useState(false)

  const handleHideComments = () => {  
    console.log('isCommentsHided:', isCommentsHided);
    const handleClick = () => {
      setIsCommentsHided(!isCommentsHided)
    }
    
    if(!isCommentsHided) {
      return (
        <>
          <button onClick={handleClick}>Hide Comments</button>
          <Comments comments={video.comments} />
        </>        
      )
    } else {
        return <button onClick={handleClick}>Show Comments</button>           
    }
  }

  return (
    <div className="App">
      <Video embedUrl={video.embedUrl}/>
      <Details 
        video={video}
        upVotes={upVotes}  
        setUpVotes={setUpVotes}
        downVotes={downVotes}
        setDownVotes={setDownVotes}
      />
      <br/><br/>
      {handleHideComments()}
    </div>
  );
}

export default App;
