export const fetchCommentsRequest = () => ({
    type: 'FETCH_COMMENTS_REQUEST'
  });
  
  export const fetchCommentsSuccess = (comments) => ({
    type: 'FETCH_COMMENTS_SUCCESS',
    payload: comments
  });
  
  export const fetchCommentsFailure = (error) => ({
    type: 'FETCH_COMMENTS_FAILURE',
    payload: error
  });
  
  export const fetchComments = () => {
    return (dispatch) => {
      dispatch(fetchCommentsRequest());
      fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(data => {
          const comments = data.slice(0, 10); // Only fetch the first 10 comments
          dispatch(fetchCommentsSuccess(comments));
        })
        .catch(error => {
          dispatch(fetchCommentsFailure(error.message));
        });
    };
  };
  
  export const addCommentRequest = () => ({
    type: 'ADD_COMMENT_REQUEST'
  });
  
  export const addCommentSuccess = (comment) => ({
    type: 'ADD_COMMENT_SUCCESS',
    payload: comment
  });
  
  export const addCommentFailure = (error) => ({
    type: 'ADD_COMMENT_FAILURE',
    payload: error
  });
  
  export const addComment = (comment) => {
    return (dispatch) => {
      dispatch(addCommentRequest());
      fetch('https://jsonplaceholder.typicode.com/comments', {
        method: 'POST',
        body: JSON.stringify(comment),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then(response => response.json())
        .then(data => {
          dispatch(addCommentSuccess(data));
        })
        .catch(error => {
          dispatch(addCommentFailure(error.message));
        });
    };
  };
  