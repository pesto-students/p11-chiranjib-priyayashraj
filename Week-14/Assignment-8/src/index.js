import React from 'react';
import ReactDOM from 'react-dom';
import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import todoReducer from './redux/reducers';

const store = createStore(todoReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
