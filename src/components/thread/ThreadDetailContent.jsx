import React from 'react';

// eslint-disable-next-line react/prop-types
const ThreadDetailContent = ({ detail }) => {
  // eslint-disable-next-line react/prop-types
  const { title, body } = detail;
  return (
    <div className="thread-content">
      <h2>
        {`#${title}`}
      </h2>
      <div className="thread-content__body">{`${body}`}</div>
    </div>
  );
};

export default ThreadDetailContent;
