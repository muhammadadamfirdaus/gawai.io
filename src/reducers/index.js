import { combineReducers } from 'redux';
import post from './postReducer';
import product from './productReducer';
import brand from './brandReducer';

const allReducers = combineReducers({
  post: post,
  product: product,
  brand: brand,
});

export default allReducers;