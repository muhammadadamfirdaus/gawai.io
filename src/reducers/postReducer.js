const initialState = {
  posts: [],
  popularPosts: [],
  post: [],
  popularTags: [],
}

export default function postReducer(state= initialState, action) {
  switch (action.type) {
    case "GET_POSTS_COMPLETED":
      return {...state, posts: action.payload};
    case "GET_POPULAR_POSTS_COMPLETED":
      return {...state, popularPosts: action.payload};
    case "GET_POST_COMPLETED":
      return {...state, post: action.payload};
    case "GET_POPULAR_TAGS_COMPLETED":
        return {...state, popularTags: action.payload};
    default:
      return state;
  }
}