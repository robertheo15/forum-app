import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ThreadHeader = ({
  id, title, category,
}) => (
  <header className="thread-item__header">
    <span className="thread-item__category">{`#${category}`}</span>
    <h4 className="thread-item__title"><Link to={`/threads/${id}`}>{title}</Link></h4>
  </header>
);

ThreadHeader.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  category: PropTypes.string,
};
export default ThreadHeader;
