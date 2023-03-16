import React from "react";
import Comment from "./Comment";

function Comments ({comments}) {
    
    function renderComments () {
       return comments.map((comment)=>{
            return (
                <Comment key={comment.id} user={comment.user} comment={comment.comment}/>
            )
        })
    }

    return(
        <div>
            <h2>{comments.length} Comments</h2>
            <div>{renderComments()}</div>
        </div>
    )
}

export default Comments