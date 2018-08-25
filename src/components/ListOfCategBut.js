import React from 'react'
import CategoryButton from './CategoryButton'

const CategoryButtonsList = ({ categories }) => (
  <ul>
  {console.log(categories)}
    {categories.map((category, index) =>
        <CategoryButton
          key={index}
          value={category}
        />
    )}
  </ul>
)

export default CategoryButtonsList