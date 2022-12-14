import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LeaderboardList from '../components/leaderboard/LeaderboardList';
import { asyncReceiveLeaderboard } from '../states/leaderoards/action';

const LeaderboardPage = () => {
  const {
    leaderboards = [],
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveLeaderboard());
  }, [dispatch]);

  const leaderboardList = leaderboards.map((leaderboard) => ({
    ...leaderboard,
  }));
  return (
    <div className="board-page">
      <h2>Klasemen Pengguna Aktif</h2>
      <LeaderboardList leaderboardList={leaderboardList} />
    </div>
  );
};

export default LeaderboardPage;
