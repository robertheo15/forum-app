import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ForumBody from './components/body/ForumBody';
import BottomNavigation from './components/navigation/BottomNavigation';
import ForumHeader from './components/header/ForumHeader';
import Loading from './components/loading/LoadingBar';
import { asyncUnsetAuthUser } from './states/auth/action';
import { asyncPreloadProcess } from './states/isPreload/action';

const App = () => {
  const {
    authUser = null,
    isPreload = false,
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  const onSignOut = () => {
    dispatch(asyncUnsetAuthUser());
  };

  if (isPreload) {
    return null;
  }

  if (authUser === null || authUser === undefined) {
    return (
      <div className="app">
        <ForumHeader />
        <Loading />
        <ForumBody />
        <BottomNavigation />
      </div>
    );
  }
  return (
    <div className="app">
      <ForumHeader user={authUser} />
      <Loading />
      <ForumBody user={authUser} />
      <BottomNavigation user={authUser} signOut={onSignOut} />
    </div>
  );
};

export default App;
