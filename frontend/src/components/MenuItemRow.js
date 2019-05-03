import React from 'react'

const MenuItemRow = (props) => {
  return (
    <tr>
    <th scope="row">1</th>
    <td>{props.name}</td>
    <td>
      <span class="badge badge-success">{props.tags}</span>
      {/* {props.tags.map((tag) => {
        return (
          <span class="badge badge-success">{tag}</span>
        )}
      )} */}
    </td>
    <td>
      <button type="button" class="btn btn-secondary btn-sm">Edit</button>
      <button type="button" class="btn btn-danger btn-sm">Delete</button>
    </td>
    </tr>
  )}
  
  export default MenuItemRow;



