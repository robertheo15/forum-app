import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes, { string } from 'prop-types';
import { BiCommentDetail } from 'react-icons/bi';
import ActionButton from '../action/ActionButton';
import postedAt from '../../utils';
import { userDTO } from '../../utils/dto';

const ThreadItemFooter = ({
  user, createdAt, totalComments, upVotesBy, downVotesBy, like, dislike, id,
}) => {
  const {
    authUser,
  } = useSelector((states) => states);
  const { name, avatar } = user;
  return (
    <footer className="thread-item__footer">
      <ActionButton
        id={id}
        authUser={authUser}
        type="like"
        count={upVotesBy.length}
        likeOrDislike={like}
      />
      <ActionButton
        id={id}
        authUser={authUser}
        type="dislike"
        count={downVotesBy.length}
        likeOrDislike={dislike}
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
