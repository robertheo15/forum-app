import React from 'react';
import PropTypes, { string } from 'prop-types';
import { BiCommentDetail } from 'react-icons/bi';
import ActionButton from '../action/ActionButton';
import postedAt from '../../utils';
import { userDTO } from '../../utils/dto';

const ThreadItemFooter = ({
  user, createdAt, totalComments, upVotesBy, downVotesBy,
}) => (
  <footer className="thread-item__footer">
    <ActionButton
      upVotesCount={(upVotesBy === undefined) ? 0 : upVotesBy.length}
      downVotesCount={(downVotesBy === undefined) ? 0 : downVotesBy.length}
    />
    <p className="thread-item__total-comments">
      <BiCommentDetail />
      {totalComments}
    </p>
    <p>{postedAt(createdAt)}</p>
    <div className="comment-item__owner-info">
      <img src={`${user.avatar}`} alt="avatar" />
      <p>{user.name}</p>
    </div>
  </footer>
);

ThreadItemFooter.propTypes = {
  user: PropTypes.shape(userDTO).isRequired,
  createdAt: PropTypes.string.isRequired,
  totalComments: PropTypes.number.isRequired,
  upVotesBy: PropTypes.arrayOf(string).isRequired,
  downVotesBy: PropTypes.arrayOf(string).isRequired,
};
export default ThreadItemFooter;
