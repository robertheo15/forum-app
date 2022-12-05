import { ActionType } from './action';

function threadsReducer(threads = [], action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_THREADS:
      return action.payload.threads;
    case ActionType.ADD_THREAD:
      return [action.payload.thread, ...threads];
    case ActionType.TOGGLE_LIKE_THREAD:
      return threads.map((thread) => {
        if (thread.id === action.payload.threadId) {
          return {
            ...thread,
            likes: thread.likes.includes(action.payload.userId)
              ? thread.likes.filter((id) => id !== action.payload.userId)
              : thread.likes.concat([action.payload.userId]),
          };
        }
        return threads;
      });
    default:
      return threads;
  }
}

export default threadsReducer;
