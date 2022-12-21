import leaderboardsReducer from './reducer';

/**
 * test scenario for leaderboardsReducer
 *
 * - leaderboardsReducer function
 *  - should return the initial state when given by unknown action
 *  - should return the leaderboards when given by leaderboards/receive action
 *
 */


describe('leaderboardsReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrange
    const initialState = [];
    const action = { type: 'UNKNOWN' };
 
    // action
    const nextState = leaderboardsReducer(initialState, action);
 
    // assert
    expect(nextState).toEqual(initialState);
 });

 it('should return the leaderboards when given by leaderboards/receive action', () => {
   // arrange
   const initialState = [];
   const action = {
     type: 'leaderboards/receive',
     payload: {
      leaderboards: [
        {
          user: {
            id: "user-0nVaet8vQ1UXUzf-",
            name: "ucok",
            email: "ucok@baba.com",
            avatar: "https://ui-avatars.com/api/?name=ucok&background=random"
          },
          score: 120
        },
        {
          user: {
            id: "user-5PqX6Ldhnk_ifroq",
            name: "Dimas Saputra",
            email: "dimas@dicoding.com",
            avatar: "https://ui-avatars.com/api/?name=Dimas Saputra&background=random"
          },
          score: 55
        },
       ],
     },
   };
 
    // action
    const nextState = leaderboardsReducer(initialState, action);
 
    // assert
    expect(nextState).toEqual(action.payload.leaderboards);
 });
});
