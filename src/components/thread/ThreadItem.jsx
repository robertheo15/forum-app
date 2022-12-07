import React from 'react';
// import parser from 'html-react-parser';
import ThreadHeader from './ThreadItemHeader';
import ThreadItemFooter from './ThreadItemFooter';

const ThreadItem = ({
  // eslint-disable-next-line react/prop-types, no-unused-vars
  title, id, body, category, user, createdAt, totalComments, upVotesBy, downVotesBy,
}) => (
  <div className="thread-item">
    <ThreadHeader id={id} title={title} category={category} />
    <div className="thread-item__body">{body}</div>
    <ThreadItemFooter
      createdAt={createdAt}
      user={user}
      totalComments={totalComments}
      upVotesBy={upVotesBy}
      downVotesBy={downVotesBy}
    />
  </div>
);

export default ThreadItem;
