import React from 'react';
import PropTypes from 'prop-types';
import LeaderboardHeader from './LeaderboardHeader';
import LeaderboardItem from './LeaderboardItem';
import { leaderboardDTO } from '../../utils/dto';

const LeaderboardList = ({ leaderboardList }) => (
  <div className="leaderboards-list">
    <LeaderboardHeader />
    {
      leaderboardList.map((leaderboard) => (
        <LeaderboardItem key={leaderboard.user.id} {...leaderboard} />
      ))
    }
  </div>
);

LeaderboardList.propTypes = {
  leaderboardList: PropTypes.arrayOf(PropTypes.shape(leaderboardDTO)).isRequired,
};
export default LeaderboardList;
