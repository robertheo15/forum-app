/* eslint-disable react/prop-types */
import React from 'react';

const LeaderboardItem = ({ user, score }) => {
  const { name, avatar } = user;
  return (
    <div className="leaderboard-item">
      <div className="leaderboard-item__user-info">
        <img src={avatar} alt="avatar" />
        <p>{name}</p>
      </div>
      <p className="leaderboard-item__score">{score}</p>
    </div>
  );
};
export default LeaderboardItem;
