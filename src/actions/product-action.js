import axios from 'axios';
import {apiUrlProduct as apiUrl} from './config';

export const getSelectedProducts = () => {
  return (dispatch) => {
    return axios.get(`${apiUrl}/getSelectedProducts`)
      .then(response => {
        dispatch(getSelectedProductsCompleted(response.data.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const getSelectedProductsCompleted = (data) => {
  return {
    type: "GET_SELECTED_PRODUCTS_COMPLETED",
    payload: data,
  }
};

export const getProduct = (slug) => {
  return (dispatch) => {
    return axios.get(`${apiUrl}/getProduct/${slug}`)
      .then(response => {
        dispatch(getProductCompleted(response.data.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const getProductCompleted = (data) => {
  return {
    type: "GET_PRODUCT_COMPLETED",
    payload: data,
  }
};

export const getProductsByBrand = (slug) => {
  return (dispatch) => {
    return axios.get(`${apiUrl}/getProductsByBrand/${slug}`)
      .then(response => {
        dispatch(getProductsCompleted(response.data.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const getProductsCompleted = (data) => {
  return {
    type: "GET_PRODUCTS_COMPLETED",
    payload: data,
  }
};