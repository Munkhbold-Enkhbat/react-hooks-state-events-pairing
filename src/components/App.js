import React, { useState } from "react";
import video from "../data/video.js";
import Details from "./Details"
import Comments from "./Comments.js";

function App() {
  console.log("Here's your data:", video);

  const [upVotes, setUpVotes] = useState(video.upvotes)
  const [downVotes, setDownVotes] = useState(video.downvotes)

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <Details 
        video={video}
        upVotes={upVotes}  
        setUpVotes={setUpVotes}
        downVotes={downVotes}
        setDownVotes={setDownVotes}
      />
      <Comments comments={video.comments}/>
    </div>
  );
}

export default App;
