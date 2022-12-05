import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ForumBody from './components/body/ForumBody';
import BottomNavigation from './components/navigation/BottomNavigation';
import ForumHeader from './components/header/ForumHeader';
import { asyncUnsetAuthUser } from './states/auth/action';

import './styles/App.css';

const App = () => {
  const {
    authUser = null,
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  const onSignOut = () => {
    dispatch(asyncUnsetAuthUser());
  };

  // console.log(authUser);
  // console.log(threads);
  // console.log(users);
  // console.log(threadList);

  if (authUser === null || authUser === undefined) {
    return (
      <div className="app">
        <ForumHeader />
        <ForumBody />
        <BottomNavigation />
      </div>
    );
  }
  return (
    <div className="app">
      <ForumHeader user={authUser} />
      <ForumBody user={authUser} />
      <BottomNavigation user={authUser} signOut={onSignOut} />
    </div>
  );
};

export default App;
