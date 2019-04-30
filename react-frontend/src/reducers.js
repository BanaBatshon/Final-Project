import { combineReducers } from 'redux';

function restaurantFormReducer(state = {
  Name: '',
  Address: '',
  Tags: '',
  Website: '',
  Description: ''
  }, action) {
  switch (action.type) {
    default: return state;
  }
}

export default combineReducers({
  restaurantFormData: restaurantFormReducer
})