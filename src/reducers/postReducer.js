const initialState = {
  posts: [],
  popularPosts: [],
  post: [],
  popularTags: [],
  headlines: [],
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
    case "GET_POSTS_HEADLINE_COMPLETED":
      return {...state, headlines: action.payload};
    default:
      return state;
  }
}