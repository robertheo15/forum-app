import api from '../../utils/api';

const ActionType = {
  SET_AUTH_USER: 'SET_AUTH_USER',
  UNSET_AUTH_USER: 'UNSET_AUTH_USER',
};

function setAuthUserActionCreator(authUser) {
  return {
    type: ActionType.SET_AUTH_USER,
    payload: {
      authUser,
    },
  };
}

function unsetAuthUserActionCreator() {
  return {
    type: ActionType.UNSET_AUTH_USER,
    payload: {
      authUser: null,
    },
  };
}
function asyncSetAuthUser({ email, password }) {
  return async (dispatch) => {
    try {
      const { data } = await api.login({ email, password });
      api.setAccessToken(data.token);
      const authUser = await api.getUserLogged(data.token);

      dispatch(setAuthUserActionCreator(authUser.data.data));
    } catch (error) {
      alert(error.message);
    }
  };
}

function asyncUnsetAuthUser() {
  return (dispatch) => {
    api.setAccessToken('');
    dispatch(unsetAuthUserActionCreator());
  };
}

export {
  ActionType,
  setAuthUserActionCreator,
  unsetAuthUserActionCreator,
  asyncSetAuthUser,
  asyncUnsetAuthUser,
};
