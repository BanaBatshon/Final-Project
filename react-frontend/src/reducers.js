import { combineReducers } from 'redux';

function restaurantFormReducer(state = {
  name: '',
  address: '',
  phone_number: '',
  website: '',
  description: ''
  }, action) {
  switch (action.type) {
    default: return state;
  }
}

function menuItemFormReducer(state = {
  name: '',
  id: ''
  }, action) {
  switch (action.type) {
    default: return state;
  }
}

export default combineReducers({
  restaurantFormData: restaurantFormReducer,
  menuItemFormData: menuItemFormReducer

})