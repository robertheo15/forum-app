import React from 'react';
import PropTypes from 'prop-types';
import postedAt from '../../utils';
import ActionButton from '../action/ActionButton';
import { detailDTO } from '../../utils/dto';

const ThreadDetailFooter = ({ detail, like, dislike }) => {
  const {
    owner, createdAt, upVotesBy, downVotesBy,
  } = detail;

  return (
    <footer className="thread-footer">
      <ActionButton
        upVotesCount={upVotesBy.length}
        downVotesCount={downVotesBy.length}
        like={like}
        dislike={dislike}
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
  detail: PropTypes.shape(detailDTO),
  like: PropTypes.func,
  dislike: PropTypes.func,
};

export default ThreadDetailFooter;
