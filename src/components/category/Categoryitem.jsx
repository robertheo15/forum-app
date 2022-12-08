import React from 'react';
import PropTypes from 'prop-types';

const CategoryItem = ({ category }) => (
  <button type="button" className="category-item">
    <p>{category}</p>
  </button>
);

CategoryItem.propTypes = {
  category: PropTypes.string,
};
export default CategoryItem;
