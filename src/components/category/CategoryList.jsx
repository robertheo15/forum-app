import React from 'react';
import CategoryItem from './Categoryitem';

// eslint-disable-next-line react/prop-types
const CategoryList = ({ threadList }) => (
  <header>
    <p>Kategori popular</p>
    <div className="categories-list">
      {
      // eslint-disable-next-line react/prop-types
      threadList.map((thread) => (
        <CategoryItem key={thread.id} {...thread} />
      ))
    }
    </div>
  </header>
);

export default CategoryList;
