import React from 'react';
import PropTypes from 'prop-types';
import CommentItem from './CommentItem';
import { commentDTO } from '../../utils/dto';

const CommentList = ({ comments }) => (
  <div className="comments__list">
    {
      comments.map((comment) => (
        <CommentItem key={comment.id} {...comment} />
      ))
    }
  </div>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape(commentDTO)),
};
export default CommentList;
