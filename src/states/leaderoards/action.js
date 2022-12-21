const ActionType = {
  RECEIVE_LEADERBOARDS: 'leaderboards/receive',
};

function receiveLeaderboardsActionCreator(leaderboards) {
  return {
    type: ActionType.RECEIVE_LEADERBOARDS,
    payload: {
      leaderboards,
    },
  };
}

export {
  ActionType,
  receiveLeaderboardsActionCreator,
};
