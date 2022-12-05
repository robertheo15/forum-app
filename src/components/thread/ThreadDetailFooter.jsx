/* eslint-disable react/prop-types */
import React from 'react';
import postedAt from '../../utils';
// import { BiCommentDetail } from 'react-icons/bi';
import ActionButton from '../action/ActionButton';

const ThreadDetailFooter = ({ detail }) => {
  const {
    owner, createdAt, upVotesBy, downVotesBy,
  } = detail;

  return (
    <footer className="thread-footer">
      <ActionButton upVotesCount={upVotesBy.length} downVotesCount={downVotesBy.length} />
      <div className="owner-info">
        <span>
          Dibuat oleh
        </span>
        <img src={`${owner.avatar}`} alt="avatar" />
        <span>{owner.name}</span>
      </div>
      <p>{postedAt(createdAt)}</p>
    </footer>
  );
};
export default ThreadDetailFooter;
