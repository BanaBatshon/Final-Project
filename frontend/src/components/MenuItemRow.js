import React from 'react'

const MenuItemRow = (props) => {
  return (
    <tr>
    <th scope="row">1</th>
    <td>{props.name}</td>
    <td>
      {props.tags.map((tag) => {
        return (
          <span class="badge badge-success">{tag.name}</span>
        )}
      )}
    </td>
    <td>
      <button type="button" className="btn btn-secondary btn-sm">Edit</button>
      <button type="button" className="btn btn-danger btn-sm">Delete</button>
    </td>
    </tr>
  )}
  
  export default MenuItemRow;



