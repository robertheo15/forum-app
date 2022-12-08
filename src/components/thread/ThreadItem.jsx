import React from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import ThreadHeader from './ThreadItemHeader';
import ThreadItemFooter from './ThreadItemFooter';
import { userDTO } from '../../utils/dto';

const ThreadItem = ({
  id, body, title, category, user, createdAt, totalComments, upVotesBy, downVotesBy,
}) => (
  <div className="thread-item">
    <ThreadHeader id={id} title={title} category={category} />
    <div className="thread-item__body">{parse(body)}</div>
    <ThreadItemFooter
      createdAt={createdAt}
      user={user}
      totalComments={totalComments}
      upVotesBy={upVotesBy}
      downVotesBy={downVotesBy}
    />
  </div>
);

ThreadItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
  category: PropTypes.string,
  createdAt: PropTypes.string,
  upVotesBy: PropTypes.arrayOf(PropTypes.string),
  downVotesBy: PropTypes.arrayOf(PropTypes.string),
  totalComments: PropTypes.number,
  user: PropTypes.shape(userDTO),
};
export default ThreadItem;
