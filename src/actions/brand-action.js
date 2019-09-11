import axios from 'axios';

import {apiUrlBrand as apiUrl} from './config';

export const getBrand = () => {
  return (dispatch) => {
    return axios.get(`${apiUrl}`)
      .then(response => {
        dispatch(getBrandCompleted(response.data.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const getBrandCompleted = (data) => {
  return {
    type: "GET_BRAND_COMPLETED",
    payload: data,
  }
};

export const getBrands = () => {
  return (dispatch) => {
    return axios.get(`${apiUrl}/getBrands`)
      .then(response => {
        dispatch(getBrandsCompleted(response.data.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const getBrandsCompleted = (data) => {
  return {
    type: "GET_BRANDS_COMPLETED",
    payload: data,
  }
};