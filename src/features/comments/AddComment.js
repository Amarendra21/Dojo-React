import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchComments, addComment } from './commentAction';

const NewComments = () => {
  const dispatch = useDispatch();
  const { comments, loading, error } = useSelector(state => state.commentReducer);
  const [name, setName] = useState('');
  const [body, setBody] = useState('');

  const handleAddComment = () => {
    const newComment = {
      postId: 1,
      name,
      email: 'test@test.com', // you can change this to your own email address
      body
    };
    dispatch(addComment(newComment));
    setName('');
    setBody('');
  };

  useEffect(() => {
    dispatch(fetchComments());
  }, [dispatch]);

  if (loading) {
    return <div>Loading comments...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Add a comment</h2>
      <form>
        <label>
          Name:
          <input type="text" value={name} onChange={e => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Comment:
          <textarea value={body} onChange={e => setBody(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleAddComment}>Add Comment</button>
      </form>
    </div>
  )
}

export default NewComments;
