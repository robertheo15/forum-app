import { configureStore } from '@reduxjs/toolkit';
import authUserReducer from './auth/reducer';
import usersReducer from './users/reducer';
import threadsReducer from './threads/reducer';
import threadDetailReducer from './detailThread/reducer';

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    users: usersReducer,
    threads: threadsReducer,
    threadDetail: threadDetailReducer,
  },
});

export default store;
