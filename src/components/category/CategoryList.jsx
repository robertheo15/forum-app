import React from 'react';
import PropTypes from 'prop-types';
import CategoryItem from './Categoryitem';
import { threadDTO } from '../../utils/dto';

const CategoryList = ({ threadList }) => (
  <header>
    <p>Kategori popular</p>
    <div className="categories-list">
      {
      threadList.map((thread, key) => (
        <CategoryItem key={`${key}`} {...thread} />
      ))
    }
    </div>
  </header>
);

CategoryList.propTypes = {
  threadList: PropTypes.arrayOf(PropTypes.shape(threadDTO)),
};

export default CategoryList;
