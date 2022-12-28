import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_THREAD_DETAIL: 'detailThread/receive',
  ADD_COMMMENT: 'detailThread/addComment',
  CLEAR_THREAD_DETAIL: 'detailThread/clearThread',
  TOGGLE_LIKE_THREAD_DETAIL: 'detailThread/like',
  TOGGLE_DISLIKE_THREAD_DETAIL: 'detailThread/dislike',
  CLEAR_LIKE_THREAD_DETAIL: 'detailThread/clearLike',
  TOGGLE_LIKE_COMMENT: 'detailThread/likeComment',
  TOGGLE_DISLIKE_COMMENT: 'detailThread/dislikeComment',
  CLEAR_LIKE_COMMENT: 'detailThread/clearComment',
};

function addCommentActionCreator(comment) {
  return {
    type: ActionType.ADD_COMMMENT,
    payload: {
      comment,
    },
  };
}

function receiveThreadDetailActionCreator(threadDetail) {
  return {
    type: ActionType.RECEIVE_THREAD_DETAIL,
    payload: {
      threadDetail,
    },
  };
}

function clearThreadDetailActionCreator() {
  return {
    type: ActionType.CLEAR_THREAD_DETAIL,
  };
}

function toggleLikeThreadDetailActionCreator(userId) {
  return {
    type: ActionType.TOGGLE_LIKE_THREAD_DETAIL,
    payload: {
      userId,
    },
  };
}

function toggleDislikeThreadDetailActionCreator(userId) {
  return {
    type: ActionType.TOGGLE_DISLIKE_THREAD_DETAIL,
    payload: {
      userId,
    },
  };
}
function clearLikeThreadDetailActionCreator(userId) {
  return {
    type: ActionType.CLEAR_LIKE_THREAD_DETAIL,
    payload: {
      userId,
    },
  };
}

function toggleLikeCommentActionCreator(userId, commentId) {
  return {
    type: ActionType.TOGGLE_LIKE_COMMENT,
    payload: {
      userId,
      commentId,
    },
  };
}

function toggleDislikeCommentActionCreator(userId, commentId) {
  return {
    type: ActionType.TOGGLE_DISLIKE_COMMENT,
    payload: {
      userId,
      commentId,
    },
  };
}

function clearLikeCommentActionCreator(userId, commentId) {
  return {
    type: ActionType.CLEAR_LIKE_COMMENT,
    payload: {
      userId,
      commentId,
    },
  };
}

function asyncAddComment({ id, content }) {
  return async (dispatch) => {
    dispatch(showLoading());

    try {
      const { comment } = await api.createComment(id, content);
      dispatch(addCommentActionCreator(comment));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncReceiveThreadDetail(threadId) {
  return async (dispatch) => {
    dispatch(showLoading());

    dispatch(clearThreadDetailActionCreator());
    try {
      const { threadDetail } = await api.getThreadById(threadId);
      dispatch(receiveThreadDetailActionCreator(threadDetail.detailThread));
    } catch (error) {
      alert(error.message);
    }

    dispatch(hideLoading());
  };
}

function asyncToogleLikeThreadDetail() {
  return async (dispatch, getState) => {
    const { authUser, threadDetail } = getState();
    dispatch(toggleLikeThreadDetailActionCreator(authUser.id));

    try {
      await api.upVoteThread(threadDetail.id);
    } catch (error) {
      alert(error.message);
    }
  };
}

function asyncToggleDislikeThreadDetail() {
  return async (dispatch, getState) => {
    dispatch(showLoading());

    const { authUser, threadDetail } = getState();
    dispatch(toggleDislikeThreadDetailActionCreator(authUser.id));

    try {
      await api.downVoteThread(threadDetail.id);
    } catch (error) {
      alert(error.message);
    }

    dispatch(hideLoading());
  };
}

function asyncClearLikeThreadDetail() {
  return async (dispatch, getState) => {
    dispatch(showLoading());

    const { authUser, threadDetail } = getState();
    dispatch(clearLikeThreadDetailActionCreator(authUser.id));

    try {
      await api.neutralizeVoteThread(threadDetail.id);
    } catch (error) {
      alert(error.message);
    }

    dispatch(hideLoading());
  };
}

function asyncToogleLikeComment(commentId) {
  return async (dispatch, getState) => {
    dispatch(showLoading());

    const { authUser, threadDetail } = getState();
    dispatch(toggleLikeCommentActionCreator(authUser.id, commentId));
    try {
      await api.upVoteComment(threadDetail.id, commentId);
    } catch (error) {
      alert(error.message);
    }

    dispatch(hideLoading());
  };
}

function asyncToogleDislikeComment(commentId) {
  return async (dispatch, getState) => {
    dispatch(showLoading());

    const { authUser, threadDetail } = getState();
    dispatch(toggleDislikeCommentActionCreator(authUser.id, commentId));

    try {
      await api.downVoteComment(threadDetail.id, commentId);
    } catch (error) {
      alert(error.message);
    }

    dispatch(hideLoading());
  };
}

function asyncClearLikeComment(commentId) {
  return async (dispatch, getState) => {
    dispatch(showLoading());

    const { authUser, threadDetail } = getState();
    dispatch(clearLikeCommentActionCreator(authUser.id, commentId));

    try {
      await api.neutralizeVoteComment(threadDetail.id, commentId);
    } catch (error) {
      alert(error.message);
    }

    dispatch(hideLoading());
  };
}

export {
  ActionType,
  receiveThreadDetailActionCreator,
  addCommentActionCreator,
  clearThreadDetailActionCreator,
  toggleLikeThreadDetailActionCreator,
  toggleDislikeThreadDetailActionCreator,
  clearLikeThreadDetailActionCreator,
  toggleLikeCommentActionCreator,
  toggleDislikeCommentActionCreator,
  clearLikeCommentActionCreator,
  asyncAddComment,
  asyncReceiveThreadDetail,
  asyncToogleLikeThreadDetail,
  asyncToggleDislikeThreadDetail,
  asyncClearLikeThreadDetail,
  asyncToogleLikeComment,
  asyncToogleDislikeComment,
  asyncClearLikeComment,
};
