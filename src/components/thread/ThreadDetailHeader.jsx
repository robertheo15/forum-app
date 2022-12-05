/* eslint-disable react/prop-types */
import React from 'react';

const ThreadDetailHeader = ({ detail }) => {
  const { category } = detail;
  return (
    <header className="thread-header">
      <p className="thread-header__category">
        {`#${category}`}
      </p>
    </header>
  );
};

export default ThreadDetailHeader;
