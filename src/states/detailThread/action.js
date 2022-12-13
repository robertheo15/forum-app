import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_THREAD_DETAIL: 'RECEIVE_THREAD_DETAIL',
  ADD_COMMMENT: 'ADD_COMMMENT',
  CLEAR_THREAD_DETAIL: 'CLEAR_THREAD_DETAIL',
  TOGGLE_LIKE_THREAD_DETAIL: 'TOGGLE_LIKE_THREAD_DETAIL',
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

function toggleLikeThreadDetailActionCreator(userId) {
  return {
    type: ActionType.TOGGLE_LIKE_THREAD_DETAIL,
    payload: {
      userId,
    },
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
    const { authUser, talkDetail } = getState();
    dispatch(toggleLikeThreadDetailActionCreator(authUser.id));

    try {
      await api.toggleLikeTalk(talkDetail.id);
    } catch (error) {
      alert(error.message);
    }
  };
}

export {
  ActionType,
  receiveThreadDetailActionCreator,
  addCommentActionCreator,
  asyncAddComment,
  clearThreadDetailActionCreator,
  toggleLikeThreadDetailActionCreator,
  asyncReceiveThreadDetail,
  asyncToogleLikeThreadDetail,
};
