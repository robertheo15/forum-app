/* eslint-disable react/prop-types */
import React from 'react';
import CommentItem from './CommentItem';

const CommentList = ({ comments }) => (
  <div className="comments__list">
    {
      comments.map((comment) => (
        <CommentItem key={comment.id} {...comment} />
      ))
    }
  </div>
);

export default CommentList;
