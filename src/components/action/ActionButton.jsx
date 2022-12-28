import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { FcLike, FcDislike } from 'react-icons/fc';

const ActionButton = ({
  id, upVotesCount, downVotesCount, like, dislike,
}) => {
  const {
    authUser,
  } = useSelector((states) => states);

  if (authUser === null || authUser === undefined) {
    return (
      <>
        <button type="button" className="thread-upvote__button" onClick={() => alert('You must be logged in to vote.')}>
          <FcLike />
          <span className="thread-upvote__label">{upVotesCount}</span>
        </button>
        <button type="button" className="thread-downvote__button" onClick={() => alert('You must be logged in to vote.')}>
          <FcDislike />
          <span className="thread-downvote__label">{downVotesCount}</span>
        </button>
      </>
    );
  }
  return (
    <>
      <button type="button" className="thread-upvote__button" onClick={() => like({ id })}>
        <FcLike />
        <span className="thread-upvote__label">{upVotesCount}</span>
      </button>
      <button type="button" className="thread-downvote__button" onClick={() => dislike({ id })}>
        <FcDislike />
        <span className="thread-downvote__label">{downVotesCount}</span>
      </button>
    </>
  );
};

ActionButton.propTypes = {
  id: PropTypes.string,
  upVotesCount: PropTypes.number,
  downVotesCount: PropTypes.number,
  like: PropTypes.func,
  dislike: PropTypes.func,
};

export default ActionButton;
