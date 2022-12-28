import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { IoMdAddCircle } from 'react-icons/io';
import PropTypes from 'prop-types';
import CategoryList from '../components/category/CategoryList';
import ThreadList from '../components/thread/ThreadList';
import { asyncPopulateUsersAndThreads } from '../states/shared/action';
import { userDTO } from '../utils/dto';
import useInput from '../hooks/useInput';

const HomePage = ({ authUser }) => {
  const {
    threads = [],
    users = [],
  } = useSelector((states) => states);

  const [category, onCategoryChange] = useInput('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  const threadList = threads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
  }));

  const filteredThread = threadList.filter((thread) => thread.category === category);
  const onAddPage = () => {
    navigate('/new');
  };

  return (
    <section className="home-page">
      <CategoryList onCategoryChange={onCategoryChange} />
      <div className="home-page__content">
        <h2>Diskusi Tersedia</h2>
        {
          category === ''
            ? <ThreadList threadList={threadList} />
            : <ThreadList threadList={filteredThread} />
        }
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
