import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect}  from 'react-redux'
import { addNewItemToNewItemList } from '../actions';

const NewItem = (props) => {
  const onSubmit = ((values) => {
    props.addNewItemToNewItemList(values)
  })
  console.log(props);
  return (
    <div>
      <NewItemForm onSubmit={onSubmit}/>
    </div>
  )
}

let NewItemForm = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <div className="col-md-12 col-lg-8 mb-5">
        <div action="#" className="p-5 bg-white">

          <div className="row form-group">
            <div className="col-md-12 mb-3 mb-md-0">
              <label className="font-weight-bold" htmlFor="name">Restaurant</label>
              <Field name="name" component="input" type="text" id="name" className="form-control" placeholder="Search by restaurant name"/>
            </div>
          </div>

          <div className="row form-group">
            <div className="col-md-12">
              <label className="font-weight-bold" htmlFor="item">Dish</label>
              <Field name="item" component="input" type="text" id="item" className="form-control" placeholder="eg. Pepperoni Pizza"/>
            </div>
          </div>

          <div className="row form-group">
            <div className="col-md-12">
              <label className="font-weight-bold" htmlFor="tags">Tags</label>
              <Field name="tags" component="input" data-role="tagsinput" type="text" id="tags" className="form-control" placeholder=""/>
            </div>
          </div>

          <div className="row form-group">
            <div className="col-md-12">
              <button type="submit" className="btn btn-primary  py-2 px-4">Add Dish</button>
            </div>
          </div>

        </div>
      </div>
    </form>

  )}
NewItemForm = reduxForm({
  form: 'newItem'
})(NewItemForm)

const mapStateToProps = (state) => ({
  newItems: state.newItems
})

const mapDispatchToProps = {addNewItemToNewItemList}
export default connect(
  mapStateToProps, 
  mapDispatchToProps
  )
  (NewItem);

