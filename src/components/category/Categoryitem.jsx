import React from 'react';

// eslint-disable-next-line react/prop-types
const CategoryItem = ({ category }) => (
  <button type="button" className="category-item">
    <p>{category}</p>
  </button>
);

export default CategoryItem;
