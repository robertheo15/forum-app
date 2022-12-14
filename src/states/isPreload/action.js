import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { setAuthUserActionCreator } from '../auth/action';

const ActionType = {
  SET_IS_PRELOAD: 'isPreload/set',
};

function setIsPreloadActionCreator(isPreload) {
  return {
    type: ActionType.SET_IS_PRELOAD,
    payload: {
      isPreload,
    },
  };
}

function asyncPreloadProcess() {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      // preload process
      const user = await api.getUserLogged(localStorage.getItem('accessToken'));
      dispatch(setAuthUserActionCreator(user));
    } catch (error) {
      // fallback process
      dispatch(setAuthUserActionCreator(null));
    } finally {
      // end preload process
      dispatch(setIsPreloadActionCreator(false));
    }
    dispatch(hideLoading());
  };
}

export {
  ActionType,
  setIsPreloadActionCreator,
  asyncPreloadProcess,
};
