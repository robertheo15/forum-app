import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

// import PropTypes from 'prop-types';
import AddPage from '../../pages/AddPage';
import DetailPage from '../../pages/DetailPage';
import HomePage from '../../pages/HomePage';
import LeaderboardPage from '../../pages/LeaderboardPage';
import LoginPage from '../../pages/LoginPage';
import NotFoundPage from '../../pages/NotFoundPage';
import RegisterPage from '../../pages/RegisterPage';
import { asyncPopulateUsersAndThreads } from '../../states/shared/action';

// eslint-disable-next-line react/prop-types
const ForumBody = () => {
  const {
    threads = [],
    users = [],
    authUser,
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  const threadList = threads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
    // authUser: authUser.id,
  }));
  // console.log(authUser);
  // console.log(threads);
  // console.log(users);
  // console.log(threadList);

  if (authUser === null || authUser === undefined) {
    return (
      <main>
        <Routes>
          <Route path="/" element={<HomePage threadList={threadList} />} />
          <Route path="/*" element={<NotFoundPage />} />
          <Route path="/threads/:id" element={<DetailPage />} />
          <Route path="/leaderboards" element={<LeaderboardPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </main>
    );
  }
  console.log(threadList);

  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage user={authUser} threadList={threadList} />} />
        <Route path="/*" element={<NotFoundPage />} />
        <Route path="/threads/:id" element={<DetailPage />} />
        <Route path="/new" element={<AddPage />} />
        <Route path="/leaderboards" element={<LeaderboardPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </main>
  );
};

// ForumBody.propTypes = {
//   authUser: PropTypes.string.isRequired,
// };

export default ForumBody;
