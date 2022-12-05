import api from '../../utils/api';
import { receiveThreadsActionCreator } from '../threads/action';
import { receiveUsersActionCreator } from '../users/action';

function asyncPopulateUsersAndThreads() {
  return async (dispatch) => {
    try {
      const { users } = await api.getUsers();
      const { threads } = await api.getThreads();
      dispatch(receiveUsersActionCreator(users.users));
      dispatch(receiveThreadsActionCreator(threads.threads));
    } catch (error) {
      alert(error.message);
    }
  };
}

export { asyncPopulateUsersAndThreads };
