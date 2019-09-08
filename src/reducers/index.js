import { combineReducers } from 'redux';
import post from './postReducer';
import product from './productReducer';

const allReducers = combineReducers({
  post: post,
  product: product,
});

export default allReducers;