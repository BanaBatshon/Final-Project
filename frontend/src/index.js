import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import '../src/styles/bootstrap.min.css';
import '../src/styles/style.css';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import { fetchAllRestaurants } from './actions/index';

import registerServiceWorker from './registerServiceWorker';

const store = createStore(rootReducer, applyMiddleware(thunk));

store.dispatch(fetchAllRestaurants());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));

registerServiceWorker();