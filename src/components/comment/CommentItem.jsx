import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import postedAt from '../../utils';
import ActionButton from '../action/ActionButton';
import { userDTO } from '../../utils/dto';

const CommentItem = ({
  id, content, owner, createdAt, downVotesBy, upVotesBy, like, dislike,
}) => {
  const {
    authUser,
  } = useSelector((states) => states);
  return (
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
      </footer>
    </div>
  );
};

CommentItem.propTypes = {
  id: PropTypes.string,
  content: PropTypes.string,
  createdAt: PropTypes.string,
  owner: PropTypes.shape(userDTO),
  upVotesBy: PropTypes.arrayOf(PropTypes.string),
  downVotesBy: PropTypes.arrayOf(PropTypes.string),
  like: PropTypes.func,
  dislike: PropTypes.func,
};
export default CommentItem;
