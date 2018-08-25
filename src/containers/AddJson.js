import React from 'react';
import { connect } from 'react-redux';
import { addJson } from '../actions';

const AddJson = ({ dispatch }) => {
    return (
        <div>
            <button type="submit"
                onClick={() => dispatch(addJson())} 
                className="big-button">
                Catalog
            </button>
        </div>
    )
}

export default connect()(AddJson)