import axios from 'axios';
import {apiUrlPost as apiUrl} from './config';

export const getPosts = () => {
  return (dispatch) => {
    return axios.get(`${apiUrl}/getPosts`)
      .then(response => {
        dispatch(getPostsCompleted(response.data.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const getPostsCompleted = (data) => {
  return {
    type: "GET_POSTS_COMPLETED",
    payload: data,
  }
};

export const getPopularPosts = () => {
  return (dispatch) => {
    return axios.get(`${apiUrl}/getPopularPosts`)
      .then(response => {
        dispatch(getPopularPostsCompleted(response.data.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const getPopularPostsCompleted = (data) => {
  return {
    type: "GET_POPULAR_POSTS_COMPLETED",
    payload: data,
  }
};

export const getPost = (slug) => {
  return (dispatch) => {
    return axios.get(`${apiUrl}/getPost/${slug}`)
      .then(response => {
        dispatch(getPostCompleted(response.data.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const getPostCompleted = (data) => {
  return {
    type: "GET_POST_COMPLETED",
    payload: data,
  }
};

export const getPopularTags = () => {
  return (dispatch) => {
    return axios.get(`${apiUrl}/getPopularTags`)
      .then(response => {
        dispatch(getPopularTagsCompleted(response.data.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const getPopularTagsCompleted = (data) => {
  return {
    type: "GET_POPULAR_TAGS_COMPLETED",
    payload: data,
  }
};