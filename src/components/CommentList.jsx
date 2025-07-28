import React from 'react'
import Comment from './Comment'

const CommentList = ({ comments }) => {
    return comments.map((comment, idx) => (
        <div key={idx} className="mb-2">
            <Comment data={comment} />
            {comment.replies && comment.replies.length > 0 && (
                <div className="ml-8 border-l-2 border-gray-200 pl-4 mt-2">
                    <CommentList comments={comment.replies} />
                </div>
            )}
        </div>
    ))
}

export default CommentList