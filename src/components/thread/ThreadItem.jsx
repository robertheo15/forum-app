import React from 'react';
import parser from 'html-react-parser';
import ThreadHeader from './ThreadItemHeader';
import ThreadFooter from './ThreadItemFooter';

const ThreadItem = ({
  // eslint-disable-next-line react/prop-types, no-unused-vars
  id, title, body, category, user, createdAt, totalComments,
}) => (
  <div className="thread-item">
    <ThreadHeader id={id} title={title} category={category} />
    <div className="thread-item__body">{parser(body)}</div>
    <ThreadFooter createdAt={createdAt} user={user} />
  </div>
);

export default ThreadItem;
