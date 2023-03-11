import { useDispatch, useSelector } from 'react-redux';
import { fetchComments } from './commentAction';
import { useEffect, useState } from 'react';
import NewComments from './AddComment';

const Comments = () => {
  const [isActive, setIsActive] = useState(false);
  const dispatch = useDispatch();
  const { comments, loading, error } = useSelector(state => state.comment);

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
        {/* <div><NewComments /></div> */}
            <div className="accordion-title" onClick={() => setIsActive(!isActive)}>

        <div>{isActive ? <span>Hide Comment <i></i></span> : <span>View Comment <i></i></span> }</div>
        </div>
        {isActive && <div>{comments.map(comment => (
        <div>
        <div key={comment.id}>
           </div>
          <h3>{comment.name}</h3>
          <p>{comment.body}</p>
        </div>
      ))}
      
      </div>}
    </div>
  );
};

export default Comments