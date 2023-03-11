import PostAuthor from "./PostAuthor";
import { Link } from 'react-router-dom';

import { useSelector } from "react-redux";
import { selectPostById } from "./postsSlice";
import Comments from '../comments/ShowComment';
import NewComments from "../comments/AddComment";

const PostsExcerpt = ({ postId }) => {
    const post = useSelector(state => selectPostById(state, postId))

    return (
        <article>
            <h2>{post.title}</h2>
            <p className="excerpt">{post.body.substring(0, 75)}...</p>
            <p className="postCredit">
                <Link to={`post/${post.id}`}>View Post</Link>
                <PostAuthor userId={post.userId} />
            </p>
            {/* <NewComments/> */}
            <Comments/>
        </article>
    )
}

export default PostsExcerpt