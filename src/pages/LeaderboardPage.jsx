/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LeaderboardList from '../components/leaderboard/LeaderboardList';
import { asyncPopulateLeaderboards } from '../states/shared/action';

const LeaderboardPage = () => {
  const {
    leaderboards = [],
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateLeaderboards());
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
