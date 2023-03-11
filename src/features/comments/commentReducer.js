// const initialState={
//     comment:[]
//     }

//     const commentReducer=(state=initialState,action)=>{
//         switch(action.type){
//             case ADD_COMMENT:
//                 state.comment=[...action.payload,...state.comment]    
//             return {
//                 ...state
//             }
//             case ADD_USER_COMMENT:
//                 state.comment=[...state.comment,action.payload]    
//             return {
//                 ...state
//             }
//             default:return state
//         }
//     }
//     export default commentReducer;