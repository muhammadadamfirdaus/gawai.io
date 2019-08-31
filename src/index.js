import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
// import logger from 'redux-logger'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import allReducers from './reducers';

const store = createStore(allReducers, applyMiddleware(thunk));


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);

// ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.register();
