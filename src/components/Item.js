import React from 'react'

function Item(props) {
  const {id, name, creation_time, price} = props.value
  return (
    <li>
      <p>ID: {id}</p>
      <p>Name: {name}</p>
      <p>Creation time: {creation_time}</p>
      <p>Price: {price}</p>
    </li>)
}

export default Item