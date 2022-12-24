import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import ThreadItem from './ThreadItem';
import { threadDTO } from '../../utils/dto';
import { asyncToogleLikeThread, asyncToogleDislikeThread } from '../../states/threads/action';

const ThreadList = ({ threadList }) => {
  const dispatch = useDispatch();

  const onLike = ({ id }) => {
    dispatch(asyncToogleLikeThread(id));
  };

  const onDislike = ({ id }) => {
    dispatch(asyncToogleDislikeThread(id));
  };

  return (
    <div className="threads-list">
      {
        threadList.map((thread, index) => (
          <ThreadItem
            key={`${index}`}
            like={onLike}
            dislike={onDislike}
            {...thread}
          />
        ))
      }
    </div>
  );
};

ThreadList.propTypes = {
  threadList: PropTypes.arrayOf(PropTypes.shape(threadDTO)).isRequired,
};

export default ThreadList;
