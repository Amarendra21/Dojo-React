const initialState = {
    comments: [],
    loading: false,
    error: null
  };
  
  const commentReducer = (state = initialState, action) => {
    switch(action.type) {
      case 'FETCH_COMMENTS_REQUEST':
        return {
          ...state,
          loading: true
        };
      case 'FETCH_COMMENTS_SUCCESS':
        return {
          ...state,
          comments: action.payload,
          loading: false,
          error: null
        };
      case 'FETCH_COMMENTS_FAILURE':
        return {
          ...state,
          loading: false,
          error: action.payload
        };
    case 'ADD_COMMENT_REQUEST':
          return {
            ...state,
            loading: true
          };
        
    case 'ADD_COMMENT_SUCCESS':
          return {
            ...state,
            comments: [...state.comments, action.payload],
            loading: false,
            error: null
          };
    case 'ADD_COMMENT_FAILURE':
          return {
            ...state,
            loading: false,
            error: action.payload
          };
        default:
          return state;
      }
    
  };
  
  export default commentReducer;
  