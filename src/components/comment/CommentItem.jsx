import React from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import postedAt from '../../utils';
import ActionButton from '../action/ActionButton';
import { userDTO } from '../../utils/dto';

const CommentItem = ({
  content, owner, createdAt, downVotesBy, upVotesBy,
}) => (
  <div className="comment-item">
    <header className="comment-item__header">
      <div className="comment-item__owner-info">
        <img src={`${owner.avatar}`} alt="avatar" />
        <p>{owner.name}</p>
      </div>
      <p className="posted-at">{postedAt(createdAt)}</p>
    </header>
    <p>{parse(content)}</p>
    <footer>
      <ActionButton upVotesCount={upVotesBy.length} downVotesCount={downVotesBy.length} />
    </footer>
  </div>
);

CommentItem.propTypes = {
  content: PropTypes.string,
  createdAt: PropTypes.string,
  owner: PropTypes.shape(userDTO),
  upVotesBy: PropTypes.arrayOf(PropTypes.string),
  downVotesBy: PropTypes.arrayOf(PropTypes.string),
};
export default CommentItem;
