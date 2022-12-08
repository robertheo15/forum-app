import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { useNavigate } from 'react-router-dom';
import { IoMdAddCircle } from 'react-icons/io';
import PropTypes from 'prop-types';
import CategoryList from '../components/category/CategoryList';
import ThreadList from '../components/thread/ThreadList';

import { asyncPopulateUsersAndThreads } from '../states/shared/action';
import { userDTO } from '../utils/dto';

const HomePage = ({ authUser }) => {
  const {
    threads = [],
    users = [],
  } = useSelector((states) => states);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  const threadList = threads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
  }));

  const onAddPage = () => {
    navigate('/new');
  };
  return (
    <section className="home-page">
      <CategoryList threadList={threadList} />
      <div className="home-page__content">
        <h2>Diskusi Tersedia</h2>
        <ThreadList threadList={threadList} />
      </div>
      {
        (authUser === null || authUser === undefined) ? ''
          : (
            <button type="button" className="new-thread-button" onClick={onAddPage}>
              <IoMdAddCircle />
            </button>
          )
      }
    </section>
  );
};

HomePage.propTypes = {
  authUser: PropTypes.shape(userDTO),
};
export default HomePage;
