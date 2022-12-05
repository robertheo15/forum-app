import React from 'react';
// import PropTypes from 'prop-types';
import ThreadItem from './ThreadItem';

// const threadItemShape = {
// id: PropTypes.string.isRequired,
// text: PropTypes.string.isRequired,
// createdAt: PropTypes.string.isRequired,
// likes: PropTypes.arrayOf(PropTypes.string).isRequired,
// authUser: PropTypes.string.isRequired,
// user: PropTypes.shape(userShape).isRequired,
// };

// eslint-disable-next-line react/prop-types
const ThreadList = ({ threadList }) => (
  <div className="threads-list">
    {
      // eslint-disable-next-line react/prop-types
      threadList.map((thread) => (
        <ThreadItem key={thread.id} {...thread} />
      ))
    }
  </div>
);

// ThreadList.propTypes = {
//   threadList: PropTypes.arrayOf(PropTypes.shape(threadItemShape)).isRequired,
//   like: PropTypes.func.isRequired,
// };

export default ThreadList;
