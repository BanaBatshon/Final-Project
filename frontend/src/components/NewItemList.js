import React from 'react'
// import { Field, reduxForm } from 'redux-form'
import axios from 'axios'

const NewItemList = () => {
  const onSubmit = ((values) => {
    axios
    .post('http://localhost:3001/items', values)
  })
  return (
    <div>
      <NewItemListTable onSubmit={onSubmit}/>
    </div>
  )
}

let NewItemListTable = props => {
  const { handleSubmit } = props
  return (
    <table onSubmit={handleSubmit}>
      <div className="table table-sm">
        <thead>
          <tr>
            <th class="w-5">#</th>
            <th class="w-25">Dish</th>
            <th class="w-25">Tags</th>
            <th class="w-15"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Capricciosa</td>
            <td>
              <span class="badge badge-success">Italian</span>
              <span class="badge badge-success">Pizza</span>
            </td>
            <td>
              <button type="button" class="btn btn-secondary btn-sm">Edit</button>
              <button type="button" class="btn btn-danger btn-sm">Delete</button>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Prosciutto e Rucola</td>
            <td><span class="badge badge-success">Italian</span></td>
            <td>
              <button type="button" class="btn btn-secondary btn-sm">Edit</button>
              <button type="button" class="btn btn-danger btn-sm">Delete</button>
            </td>
          </tr>
        </tbody>
      </div>
    </table>
  )}

NewItemList = reduxForm({
  form: 'newItemList'
})(NewItemList)

export default NewItemList;
