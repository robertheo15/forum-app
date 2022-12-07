/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import parser from 'html-react-parser';
import postedAt from '../../utils';
import ActionButton from '../action/ActionButton';

const CommentItem = ({
  id, content, owner, createdAt, downVotesBy, upVotesBy,
}) => (
  <div className="comment-item">
    <header className="comment-item__header">
      <div className="comment-item__owner-info">
        <img src={`${owner.avatar}`} alt="avatar" />
        <p>reviewer</p>
      </div>
      <p className="posted-at">{postedAt(createdAt)}</p>
    </header>
    <p>{parser(content)}</p>
    <footer>
      <ActionButton upVotesCount={upVotesBy.length} downVotesCount={downVotesBy.length} />
    </footer>
  </div>
);

export default CommentItem;
