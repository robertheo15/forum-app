import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AddPage from '../../pages/AddPage';
import DetailPage from '../../pages/DetailPage';
import HomePage from '../../pages/HomePage';
import LeaderboardPage from '../../pages/LeaderboardPage';
import LoginPage from '../../pages/LoginPage';
import NotFoundPage from '../../pages/NotFoundPage';
import RegisterPage from '../../pages/RegisterPage';

const ForumBody = () => {
  const {
    authUser,
  } = useSelector((states) => states);

  if (authUser === null || authUser === undefined) {
    return (
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/*" element={<NotFoundPage />} />
          <Route path="/threads/:id" element={<DetailPage />} />
          <Route path="/leaderboards" element={<LeaderboardPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </main>
    );
  }

  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage authUser={authUser} />} />
        <Route path="/*" element={<NotFoundPage />} />
        <Route path="/threads/:id" element={<DetailPage />} />
        <Route path="/new" element={<AddPage />} />
        <Route path="/leaderboards" element={<LeaderboardPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </main>
  );
};

export default ForumBody;
