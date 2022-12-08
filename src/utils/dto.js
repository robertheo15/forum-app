import PropTypes from 'prop-types';

const userDTO = {
  id: PropTypes.string,
  avatar: PropTypes.string,
  email: PropTypes.string,
  name: PropTypes.string,
};

const threadDTO = {
  id: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
  category: PropTypes.string,
  createdAt: PropTypes.string,
  ownerId: PropTypes.string,
  upVotesBy: PropTypes.arrayOf(PropTypes.string),
  downVotesBy: PropTypes.arrayOf(PropTypes.string),
  totalComments: PropTypes.number,
  user: PropTypes.shape(userDTO),
};

const leaderboardDTO = {
  user: PropTypes.shape(userDTO),
  score: PropTypes.number,
};

const commentDTO = {
  id: PropTypes.string,
  content: PropTypes.string,
  createdAt: PropTypes.string,
  owner: PropTypes.shape(userDTO),
  upVotesBy: PropTypes.arrayOf(PropTypes.string),
  downVotesBy: PropTypes.arrayOf(PropTypes.string),
};

const detailDTO = {
  id: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
  category: PropTypes.string,
  createdAt: PropTypes.string,
  owner: PropTypes.shape(userDTO),
  upVotesBy: PropTypes.arrayOf(PropTypes.string),
  downVotesBy: PropTypes.arrayOf(PropTypes.string),
  comments: PropTypes.arrayOf(PropTypes.shape(commentDTO)),
};

export {
  userDTO,
  threadDTO,
  commentDTO,
  leaderboardDTO,
  detailDTO,
};
