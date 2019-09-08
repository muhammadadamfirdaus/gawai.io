import axios from 'axios';

const apiUrl = 'http://localhost:8000/api/v1/brand';

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