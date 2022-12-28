import threadsReducer from './reducer';

/**
 * test scenario for threadsReducer
 *
 * - threadReducers function
 *  - should return the initial state when given by unknown action
 *  - should return the threads when given by RECEIVE_THREADS action
 *  - should return the threads with the new thread when given by threads/add action
 *
 */

describe('threadReducers function', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrange
    const initialState = [];
    const action = { type: 'UNKNOWN' };

    // action
    const nextState = threadsReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the threads when given by threads/receive action', () => {
    // arrange
    const initialState = [];
    const action = {
      type: 'threads/receive',
      payload: {
        threads: [
          {
            id: 'thread--ERMoiIVb_18Vf1t',
            title: 'tester',
            body: 'tester',
            category: 'tester',
            createdAt: '2022-12-21T15:10:52.485Z',
            ownerId: 'user-Kip89kENPglHYaq5',
            totalComments: 0,
            upVotesBy: [
              'user-Kip89kENPglHYaq5',
            ],
            downVotesBy: [],
          },
          {
            id: 'thread-08_nUU2fhu1P5nre',
            title: 'Pengalaman Belajar React di Dicoding',
            body: 'Menurut teman-teman, bagaimana pengalaman belajar kelas React di Dicoding? Apakah mudah ataukah sulit? Yuk, ceritakan di sini.',
            category: 'react',
            createdAt: '2022-11-13T09:59:31.019Z',
            ownerId: 'user-5PqX6Ldhnk_ifroq',
            totalComments: 1,
            upVotesBy: [
              'user-6oWew2w2Wx5xLUTU',
              'user-5PqX6Ldhnk_ifroq',
            ],
            downVotesBy: [],
          },
        ],
      },
    };

    // action
    const nextState = threadsReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.threads);
  });

  it('should return the threads with the new thread when given by threads/add action', () => {
    // arrange
    const initialState = [
      {
        id: 'thread--ERMoiIVb_18Vf1t',
        title: 'tester',
        body: 'tester',
        category: 'tester',
        createdAt: '2022-12-21T15:10:52.485Z',
        ownerId: 'user-Kip89kENPglHYaq5',
        totalComments: 0,
        upVotesBy: [
          'user-Kip89kENPglHYaq5',
        ],
        downVotesBy: [],
      },
    ];
    const action = {
      type: 'threads/add',
      payload: {
        thread: {
          id: 'thread-08_nUU2fhu1P5nre',
          title: 'Pengalaman Belajar React di Dicoding',
          body: 'Menurut teman-teman, bagaimana pengalaman belajar kelas React di Dicoding? Apakah mudah ataukah sulit? Yuk, ceritakan di sini.',
          category: 'react',
          createdAt: '2022-11-13T09:59:31.019Z',
          ownerId: 'user-5PqX6Ldhnk_ifroq',
          totalComments: 1,
          upVotesBy: [
            'user-6oWew2w2Wx5xLUTU',
            'user-5PqX6Ldhnk_ifroq',
          ],
          downVotesBy: [],
        },
      },
    };

    // action
    const nextState = threadsReducer(initialState, action);

    // assert
    expect(nextState).toEqual([action.payload.thread, ...initialState]);
  });
});
