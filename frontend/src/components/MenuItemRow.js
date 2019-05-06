import React from 'react'

const MenuItemRow = (props) => {
  return (
    <tr>
    <th scope="row">{ props.index + 1 }</th>
    <td>{props.name}</td>
    <td>
      {props.tags.map((tag, index) => {
        return (
          <span key={ index } className="badge badge-success">{tag.name}</span>
        )})}
    </td>
    <td>
      <button type="button" className="btn btn-secondary btn-sm">Edit</button>
      <button type="button" className="btn btn-danger btn-sm">Delete</button>
    </td>
    </tr>
  )}
  
  export default MenuItemRow;