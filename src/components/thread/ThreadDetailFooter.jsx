import React from 'react';
import PropTypes from 'prop-types';
import postedAt from '../../utils';
import ActionButton from '../action/ActionButton';
import { detailDTO, userDTO } from '../../utils/dto';

const ThreadDetailFooter = ({
  authUser, detail, like, dislike,
}) => {
  const {
    owner, createdAt, upVotesBy, downVotesBy,
  } = detail;

  return (
    <footer className="thread-footer">
      <ActionButton
        authUser={authUser}
        type="like"
        count={upVotesBy.length}
        likeOrDislike={like}
      />
      <ActionButton
        authUser={authUser}
        type="dislike"
        count={downVotesBy.length}
        likeOrDislike={dislike}
      />
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
ThreadDetailFooter.propTypes = {
  authUser: PropTypes.shape(userDTO),
  detail: PropTypes.shape(detailDTO),
  like: PropTypes.func,
  dislike: PropTypes.func,
};

export default ThreadDetailFooter;
