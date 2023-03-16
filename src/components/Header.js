import React, {useState} from "react";

function Header ({videoObj, commentDisp, setCommentDisp}) {
    const [currentUpVote, setCurrentUpVote] = useState(videoObj.upvotes)
    const [currentDownVote, setCurrentDownVote] = useState(videoObj.downvotes)

    //*Make two function sfor handling vote click
    function upVote () {
       
        setCurrentUpVote((currentUpVote)=> currentUpVote+=1)
    }


    function downVote () {
        setCurrentDownVote((currentDownVote)=>currentDownVote-=1)
    }



    return (
        <div>
            <h1>{videoObj.title}</h1>
            <p>{videoObj.views} Views | Uploaded {videoObj.createdAt}</p>
            <span>
                <button onClick={upVote}>{currentUpVote} 👍</button>
                <button onClick={downVote}>{currentDownVote} 👎</button>
            </span>
            <p></p>
            <button onClick={() => setCommentDisp(!commentDisp)}>{commentDisp ? "Hide Comments" : "Show Comments" }</button>
        </div>

    )
}

export default Header;