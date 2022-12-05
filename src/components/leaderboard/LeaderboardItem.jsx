import React from 'react';

const LeaderboardItem = () => (
  <div className="leaderboard-item">
    <div className="leaderboard-item__user-info">
      <img src="https://ui-avatars.com/api/?name=Felix Joe&background=random" alt="asd" />
      <p>Robert Theo</p>
    </div>
    <p className="leaderboard-item__score">70</p>
  </div>
);

export default LeaderboardItem;
