import React from 'react';
import PropTypes from 'prop-types';
import { detailDTO } from '../../utils/dto';

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

ThreadDetailHeader.propTypes = {
  detail: PropTypes.shape(detailDTO),
};
export default ThreadDetailHeader;
