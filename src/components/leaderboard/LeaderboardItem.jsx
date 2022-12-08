import React from 'react';
import PropTypes from 'prop-types';
import { userDTO } from '../../utils/dto';

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

LeaderboardItem.propTypes = {
  user: PropTypes.shape(userDTO).isRequired,
  score: PropTypes.number.isRequired,
};
export default LeaderboardItem;
