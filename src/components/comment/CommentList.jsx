import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import CommentItem from './CommentItem';
import { commentDTO } from '../../utils/dto';
import { asyncToogleLikeComment, asyncToogleDislikeComment } from '../../states/detailThread/action';

const CommentList = ({ comments }) => {
  const dispatch = useDispatch();

  const onLike = ({ id }) => {
    dispatch(asyncToogleLikeComment(id));
  };

  const onDislike = ({ id }) => {
    dispatch(asyncToogleDislikeComment(id));
  };
  return (
    <div className="comments__list">
      {
        comments.map((comment) => (
          <CommentItem
            key={comment.id}
            like={onLike}
            dislike={onDislike}
            {...comment}
          />
        ))
      }
    </div>
  );
};

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape(commentDTO)),
};
export default CommentList;
