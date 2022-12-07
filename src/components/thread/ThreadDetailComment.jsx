/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import CommentList from '../comment/CommentList';

const ThreadDetailComment = ({ authUser, detail }) => {
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
        <form className="comment-input">
          <div className="comment-input__field" />
          <button type="submit">Kirim</button>
        </form>
      </div>
      <div className="thread-comment__list">
        <h3>{`Komentar (${comments.length})`}</h3>
      </div>
      <CommentList comments={comments} />
    </div>
  );
};
export default ThreadDetailComment;
