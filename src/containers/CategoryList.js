import React from 'react';
import { connect } from 'react-redux';
import { addCategoryButtons } from '../actions';

const CategoryList = ({ dispatch }) => {
    return (
        <div>
            <button
                onClick={ () => dispatch(addCategoryButtons())}
                className={"big-button"}>
                Category
            </button>
        </div>
    )
};

export default connect()(CategoryList)