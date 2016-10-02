// a reducer takes in two things:
// 1. the action (info about what happened)
// 2. copy of current state

function postComments(state = [], action) {
  switch(action.type) {
    case 'ADD_COMMENT':
      // return new state with the new comment
      return [...state, {
        user: action.author,
        text: action.comment
      }];
      break;
    case 'REMOVE_COMMENT':
      return [
        // from the start to the one we want to delete
        ...state.slice(0,action.index),
        // after the deleted one, to the end
        ...state.slice(action.index + 1)
      ];
      break;
    default:
      return state;
  }
}


function comments(state = [], action) {
  if(typeof action.postId !== 'undefined') {
    return {
      // take the current state
      ...state,
      // overwrite this post with a new one
      [action.postId]: postComments(state[action.postId], action)
    }
  }
  return state;
}

export default comments;
