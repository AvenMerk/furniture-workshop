import React from 'react';
import CategoryList from '../containers/CategoryList';
import VisibleCategoryList from '../containers/VisibleCategoryList';

const HomePage = () => (
    <div>
        <h2>Welcome to our furniture workshop!</h2>
        <div className="container">
            <p className="option__text">Furniture</p> 
            <CategoryList />
            <VisibleCategoryList />
        </div>
    </div>
);

export default HomePage;