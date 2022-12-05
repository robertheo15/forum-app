import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IoMdAddCircle } from 'react-icons/io';
// import PropTypes from 'prop-types';
import CategoryList from '../components/category/CategoryList';
import ThreadList from '../components/thread/ThreadList';

// eslint-disable-next-line react/prop-types
const HomePage = ({ user, threadList }) => {
  const navigate = useNavigate();

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
        (user === null || user === undefined) ? ''
          : (
            <button type="button" className="new-thread-button" onClick={onAddPage}>
              <IoMdAddCircle />
            </button>
          )
      }
    </section>
  );
};
// HomePage.propTypes = {
//   user: PropTypes.object,
// };
export default HomePage;
