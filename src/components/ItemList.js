import React from 'react'
import Item from './Item'

const ItemList = ({ items }) => (
  <ul>
  {console.log(items)}
    {items.map((item, index) =>
        <Item
          key={index}
          value={item}
        />
    )}
  </ul>
)

export default ItemList
