import React from 'react';
import PropTypes, { string } from 'prop-types';
import { BiCommentDetail } from 'react-icons/bi';
import ActionButton from '../action/ActionButton';
import postedAt from '../../utils';
import { userDTO } from '../../utils/dto';

const ThreadItemFooter = ({
  user, createdAt, totalComments, upVotesBy, downVotesBy, like, dislike, id,
}) => {
  const { name, avatar } = user;
  return (
    <footer className="thread-item__footer">
      <ActionButton
        id={id}
        upVotesCount={upVotesBy.length}
        downVotesCount={downVotesBy.length}
        like={like}
        dislike={dislike}
      />
      <p className="thread-item__total-comments">
        <BiCommentDetail />
        {totalComments}
      </p>
      <p>{postedAt(createdAt)}</p>
      <div className="comment-item__owner-info">
        <img src={avatar} alt="avatar" />
        <p>{name}</p>
      </div>
    </footer>
  );
};

ThreadItemFooter.propTypes = {
  id: PropTypes.string,
  user: PropTypes.shape(userDTO),
  createdAt: PropTypes.string,
  totalComments: PropTypes.number,
  upVotesBy: PropTypes.arrayOf(string),
  downVotesBy: PropTypes.arrayOf(string),
  like: PropTypes.func,
  dislike: PropTypes.func,
};
export default ThreadItemFooter;
