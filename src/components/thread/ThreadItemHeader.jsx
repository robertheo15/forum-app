import React from 'react';
import { Link } from 'react-router-dom';

const ThreadHeader = ({
  // eslint-disable-next-line react/prop-types, no-unused-vars
  id, title, category,
// eslint-disable-next-line arrow-body-style
}) => {
  // const navigate = useNavigate();

  return (
    <header className="thread-item__header">
      <span className="thread-item__category">{category}</span>
      <h4 className="thread-item__title"><Link to={`/threads/${id}`}>{title}</Link></h4>
    </header>
  );
};
export default ThreadHeader;
