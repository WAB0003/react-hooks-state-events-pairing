import video from "../data/video.js";
import Header from "./Header.js";
import Comments from "./Comments.js";
import { useState } from "react";

function App() {
  console.log("Here's your data:", video);
  const[commentDisp, setCommentDisp]=useState(false)


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
      <Header videoObj = {video} commentDisp={commentDisp} setCommentDisp={setCommentDisp}/>
      <hr></hr>
      {commentDisp ? <Comments comments={video.comments} /> : null}
    </div>
  );
}

export default App;
