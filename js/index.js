import React from 'react';
import { render } from 'react-dom';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import SortSearchApp from './App';
import * as actions from './actions/actions';

const store = createStore(rootReducer, applyMiddleware(thunk));

render(
  <Provider store={store}>
    <SortSearchApp />
  </Provider>,
  document.getElementById('root')
);
console.log('asdf');
store.dispatch(actions.loadPersonsAction());
