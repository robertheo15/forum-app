import React from 'react';
import PropTypes from 'prop-types';
import { FcLike, FcDislike } from 'react-icons/fc';

const ActionButton = ({ upVotesCount, downVotesCount }) => (
  <>
    <button type="button" className="thread-upvote__button">
      <FcLike />
      <span className="thread-upvote__label">{upVotesCount}</span>
    </button>
    <button type="button" className="thread-downvote__button">
      <FcDislike />
      <span className="thread-downvote__label">{downVotesCount}</span>
    </button>
  </>
);

ActionButton.propTypes = {
  upVotesCount: PropTypes.number,
  downVotesCount: PropTypes.number,
};

export default ActionButton;
