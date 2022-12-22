import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import CategoryItem from './Categoryitem';
import { asyncPopulateUsersAndThreads } from '../../states/shared/action';
import useInput from '../../hooks/useInput';

const CategoryList = ({ onCategoryChange }) => {
  const [selected, setSelected] = useInput('');

  const {
    threads = [],
  } = useSelector((state) => state);

  const categoryThread = threads.map(({ category }) => category);
  const uniqueCategoryThread = [...new Set(categoryThread)];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  const handleClick = (e) => {
    onCategoryChange(e);
    setSelected(e);
  };
  return (
    <header>
      <p>Kategori popular</p>
      <div className="categories-list">
        {
          uniqueCategoryThread.map((category, key) => (
            <CategoryItem
              key={key}
              category={category}
              onHandleClick={handleClick}
              selected={selected}
            />
          ))
        }
      </div>
    </header>
  );
};

CategoryList.propTypes = {
  onCategoryChange: PropTypes.func,
};

export default CategoryList;
