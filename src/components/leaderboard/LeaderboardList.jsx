/* eslint-disable react/prop-types */
import React from 'react';
import LeaderboardHeader from './LeaderboardHeader';
import LeaderboardItem from './LeaderboardItem';

const LeaderboardList = ({ leaderboardList }) => (
  <div className="leaderboards-list">
    <LeaderboardHeader />
    {
      leaderboardList.map((leaderboard) => (
        <LeaderboardItem key={leaderboard.id} {...leaderboard} />
      ))
    }
  </div>
);

export default LeaderboardList;
