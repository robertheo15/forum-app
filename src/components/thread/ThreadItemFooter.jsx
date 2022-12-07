/* eslint-disable react/prop-types */
import React from 'react';
import { BiCommentDetail } from 'react-icons/bi';
import ActionButton from '../action/ActionButton';
import postedAt from '../../utils';

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
    <p className="thread-item__owner">
      Dibuat oleh&nbsp;
      <strong>{user.name}</strong>
    </p>
  </footer>
);

export default ThreadItemFooter;
