import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_THREADS: 'threads/receive',
  ADD_THREAD: 'threads/add',
  TOGGLE_LIKE_THREAD: 'threads/toggleLike',
  TOGGLE_DISLIKE_THREAD: 'threads/toggleDislike',
  CLEAR_LIKE_THREAD: 'threads/clearLike',
};

function receiveThreadsActionCreator(threads) {
  return {
    type: ActionType.RECEIVE_THREADS,
    payload: {
      threads,
    },
  };
}

function addThreadActionCreator(thread) {
  return {
    type: ActionType.ADD_THREAD,
    payload: {
      thread,
    },
  };
}

function toggleLikeThreadActionCreator({ threadId, userId }) {
  return {
    type: ActionType.TOGGLE_LIKE_THREAD,
    payload: {
      threadId,
      userId,
    },
  };
}

function toggleDislikeThreadActionCreator({ threadId, userId }) {
  return {
    type: ActionType.TOGGLE_DISLIKE_THREAD,
    payload: {
      threadId,
      userId,
    },
  };
}

function neutralizeThreadActionCreator({ threadId, userId }) {
  return {
    type: ActionType.CLEAR_LIKE_THREAD,
    payload: {
      threadId,
      userId,
    },
  };
}

function asyncAddThread({ title, category, body }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const { thread } = await api.createThread({ title, category, body });
      dispatch(addThreadActionCreator(thread.thread));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncToogleLikeThread(threadId) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser } = getState();
    dispatch(toggleLikeThreadActionCreator({ threadId, userId: authUser.id }));

    try {
      await api.upVoteThread(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(toggleLikeThreadActionCreator({ threadId, userId: authUser.id }));
    }
    dispatch(hideLoading());
  };
}

function asyncToogleDislikeThread(threadId) {
  return async (dispatch, getState) => {
    dispatch(showLoading());

    const { authUser } = getState();
    dispatch(toggleDislikeThreadActionCreator({ threadId, userId: authUser.id }));

    try {
      await api.downVoteThread(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(toggleDislikeThreadActionCreator({ threadId, userId: authUser.id }));
    }
    dispatch(hideLoading());
  };
}

function asyncToogleNeutralizeThread(threadId) {
  return async (dispatch, getState) => {
    dispatch(showLoading());

    const { authUser } = getState();
    dispatch(neutralizeThreadActionCreator({ threadId, userId: authUser.id }));

    try {
      await api.neutralizeVoteThread(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(neutralizeThreadActionCreator({ threadId, userId: authUser.id }));
    }
    dispatch(hideLoading());
  };
}

export {
  ActionType,
  receiveThreadsActionCreator,
  addThreadActionCreator,
  toggleLikeThreadActionCreator,
  toggleDislikeThreadActionCreator,
  asyncAddThread,
  asyncToogleLikeThread,
  asyncToogleDislikeThread,
  asyncToogleNeutralizeThread,
};
