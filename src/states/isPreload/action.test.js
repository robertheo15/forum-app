/**
 * skenario test
 *
 * - asyncPreloadProcess thunk
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch action and call alert correctly when data fetching failed
 */

import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { setAuthUserActionCreator } from '../auth/action';
import { asyncPreloadProcess, setIsPreloadActionCreator } from './action';

const fakeRegisterResponse = {
  id: 'user-123',
  name: 'John Doe',
  email: 'john@example.com',
  avatar: 'https://generated-image-url.jpg',
};

const fakeErrorResponse = new Error('Ups, sometwhing went wrong');

describe('asyncPreloadProcess thunk', () => {
  beforeEach(() => {
    // backup original implementation
    api._getUserLogged = api.getUserLogged;
  });

  afterEach(() => {
    // restore original implementation
    api.getUserLogged = api._getUserLogged;

    // delete backup
    delete api._getUserLogged;
  });

  it('should dispatch action correctly data fetching success', async () => {
    // arrange
    // stub implementation
    api.getUserLogged = () => Promise.resolve(fakeRegisterResponse);

    // mock dispatch
    const dispatch = jest.fn();

    // action
    await asyncPreloadProcess()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(setAuthUserActionCreator(fakeRegisterResponse));
    expect(dispatch).toHaveBeenCalledWith(setIsPreloadActionCreator(false));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch action and call alert correctly when data fetching failed', async () => {
    // arrange
    // stub implementation
    api.getUserLogged = () => Promise.reject(fakeErrorResponse);

    // mock dispatch
    const dispatch = jest.fn();

    // action
    await asyncPreloadProcess()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(setAuthUserActionCreator(null));
    expect(dispatch).toHaveBeenCalledWith(setIsPreloadActionCreator(false));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });
});
