import { ActionType } from './action';

function threadDetailReducer(threadDetail = null, action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_THREAD_DETAIL:
      return action.payload.threadDetail;
    case ActionType.ADD_COMMMENT:
      return threadDetail.comments.map((comment) => {
        if (comment.id === action.payload.commentId) {
          return {
            comment,
            comments: threadDetail.comments.includes(action.payload.comment)
              ? threadDetail.comments.filter((id) => id !== action.payload.comment)
              : threadDetail.comments.concat([action.payload.comment]),
          };
        }
        return threadDetail;
      });
    case ActionType.CLEAR_THREAD_DETAIL:
      return null;
    case ActionType.TOGGLE_LIKE_THREAD_DETAIL:
      return {
        ...threadDetail,
        likes: threadDetail.likes.includes(action.payload.userId)
          ? threadDetail.likes.filter((id) => id !== action.payload.userId)
          : threadDetail.likes.concat(action.payload.userId),
      };
    default:
      return threadDetail;
  }
}

export default threadDetailReducer;
