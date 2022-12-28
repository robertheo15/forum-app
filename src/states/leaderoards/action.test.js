/**
 * test scenario for asyncReciveLeaderboards
 *
 * - asyncReciveLeaderboards function
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch action and call alert correctly when data fetching failed
* */

import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { asyncReceiveLeaderboard, receiveLeaderboardsActionCreator } from './action';

const fakeLeaderboardsResponse = [
  {
    user: {
      id: 'users-1',
      name: 'John Doe',
      email: 'john@example.com',
      avatar: 'https://generated-image-url.jpg',
    },
    score: 10,
  },
  {
    user: {
      id: 'users-2',
      name: 'Jane Doe',
      email: 'jane@example.com',
      avatar: 'https://generated-image-url.jpg',
    },
    score: 5,
  },
];

const fakeErrorResponse = new Error('Ups, something went wrong');

describe('asyncReciveLeaderboards thunk', () => {
  beforeEach(() => {
    // backup original implementation
    api._getLeaderboard = api.getLeaderboard;
  });

  afterEach(() => {
    // restore original implentation
    api.getLeaderboard = api._getLeaderboard;

    // delete backup
    delete api._getLeaderboard;
  });

  it('should dispatch action correctly when data fetching success', async () => {
    // arrange
    // stub
    api.getLeaderboard = () => Promise.resolve(fakeLeaderboardsResponse);
    // mock dispatch with jest
    const dispatch = jest.fn();

    // action
    await asyncReceiveLeaderboard()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch)
      .toHaveBeenCalledWith(receiveLeaderboardsActionCreator(fakeLeaderboardsResponse));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch action and call alert correctly when data fetching failed', async () => {
    // arrange
    // stub
    api.getLeaderboard = () => Promise.reject(fakeErrorResponse);
    // mock dispatch with vitest
    const dispatch = jest.fn();
    // mock alert with vitest
    window.alert = jest.fn();

    // action
    await asyncReceiveLeaderboard()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });
});
