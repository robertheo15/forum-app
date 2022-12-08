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
      api.login({ email, password })
        .then((result) => {
          api.setAccessToken(result.data.token);
        })
        .catch((err) => {
          alert(err);
        })
        .finally(async () => {
          const { data } = await api.getUserLogged(localStorage.getItem('accessToken'));
          dispatch(setAuthUserActionCreator(data.data.user));
        });
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
