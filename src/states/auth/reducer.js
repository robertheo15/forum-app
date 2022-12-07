import { ActionType } from './action';

const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;

let initialState = null;

if (user !== null) {
  initialState = {
    id: user.user.id,
    name: user.user.name,
    email: user.user.email,
    avatar: user.user.avatar,
  };
}

const authUserReducer = (authUser = initialState, action = {}) => {
  switch (action.type) {
    case ActionType.SET_AUTH_USER:
      return action.payload.authUser;
    case ActionType.UNSET_AUTH_USER:
      return null;
    default:
      return authUser;
  }
};

export default authUserReducer;
