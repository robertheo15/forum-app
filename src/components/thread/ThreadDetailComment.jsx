import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CommentInput from '../comment/CommentInput';
import CommentList from '../comment/CommentList';
import { detailDTO, userDTO, commentDTO } from '../../utils/dto';

const ThreadDetailComment = ({ onCreateComment, authUser, detail }) => {
  const { comments } = detail;
  if (authUser === null || authUser === undefined) {
    return (
      <div className="thread-comment">
        <div className="thread-comment__input">
          <h3>Beri komentar</h3>
          <p className="thread-comment__not_login">
            <Link to="/login">
              Login
            </Link>
            &nbsp;
            untuk memberi komentar
          </p>
        </div>
        <div className="thread-comment__list">
          <h3>{`Komentar (${comments.length})`}</h3>
        </div>
        <CommentList comments={comments} />
      </div>
    );
  }
  return (
    <div className="thread-comment">
      <div className="thread-comment__input">
        <h3>Beri komentar</h3>
        <CommentInput onCreateComment={onCreateComment} />
      </div>
      <div className="thread-comment__list">
        <h3>{`Komentar (${comments.length})`}</h3>
      </div>
      <CommentList comments={comments} />
    </div>
  );
};

ThreadDetailComment.propTypes = {
  detail: PropTypes.shape(detailDTO),
  comments: PropTypes.arrayOf(PropTypes.shape(commentDTO)),
  onCreateComment: PropTypes.func.isRequired,
  authUser: PropTypes.shape(userDTO),
};

export default ThreadDetailComment;
