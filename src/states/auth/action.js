import api from '../../utils/api';

const ActionType = {
  SET_AUTH_USER: 'authUser/set',
  UNSET_AUTH_USER: 'authUser/unset',
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
      api.login({ email, password })
        .then((result) => {
          if (result.error === true) {
            alert(result.data);
            api.setAccessToken(null);
          } else {
            api.setAccessToken(result.data.token);
          }
        })
        .finally(async () => {
          const user = await api.getUserLogged(localStorage.getItem('accessToken'));
          dispatch(setAuthUserActionCreator(user));
        });
    } catch (error) {
      alert(error.message);
    }
  };
}

function asyncUnsetAuthUser() {
  return (dispatch) => {
    api.setAccessToken(null);
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
