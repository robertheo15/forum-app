import React from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import { detailDTO } from '../../utils/dto';

const ThreadDetailContent = ({ detail }) => {
  const { title, body } = detail;
  return (
    <div className="thread-content">
      <h2>
        {`#${title}`}
      </h2>
      <div className="thread-content__body">{parse(body)}</div>
    </div>
  );
};

ThreadDetailContent.propTypes = {
  detail: PropTypes.shape(detailDTO),
};
export default ThreadDetailContent;
