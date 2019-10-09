import axios from 'axios';

import {apiUrlClassification as apiUrl} from './config';

export const getClassifications = () => {
  return (dispatch) => {
    return axios.get(`${apiUrl}/getClassifications`)
      .then(response => {
        dispatch(getClassificationsCompleted(response.data.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const getClassificationsCompleted = (data) => {
  return {
    type: "GET_CLASSIFICATIONS_COMPLETED",
    payload: data,
  }
};