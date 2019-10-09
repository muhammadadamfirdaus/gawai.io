import { combineReducers } from 'redux';
import post from './postReducer';
import product from './productReducer';
import brand from './brandReducer';
import classification from './classificationReducer';

const allReducers = combineReducers({
  post: post,
  product: product,
  brand: brand,
  classification: classification,
});

export default allReducers;