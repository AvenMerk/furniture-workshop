import React from 'react';

function CategoryButton(props) {
  const { name } = props.value;
  return (
    <button id="soft-furniture-button">
      <p>{name}</p>
    </button>)
}
  
export default CategoryButton
