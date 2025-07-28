import { commentData } from '../utils/commentsData'
import CommentList from './CommentList'

const CommentsContainer = () => {
    return (
        <div className='m-5 p-2'>
            <h1 className='text-2xl font-bold'>Comments:</h1>
            <div className='p-4 m-4'>
                <CommentList comments={commentData} />
            </div>
        </div>
    )
}

export default CommentsContainer