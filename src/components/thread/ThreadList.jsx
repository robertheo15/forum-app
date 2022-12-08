import React from 'react';
import PropTypes from 'prop-types';
import ThreadItem from './ThreadItem';
import { threadDTO } from '../../utils/dto';

const ThreadList = ({ threadList }) => (
  <div className="threads-list">
    {
      threadList.map((thread, index) => (
        <ThreadItem key={`${index}`} {...thread} />
      ))
    }
  </div>
);

ThreadList.propTypes = {
  threadList: PropTypes.arrayOf(PropTypes.shape(threadDTO)).isRequired,
};

export default ThreadList;
