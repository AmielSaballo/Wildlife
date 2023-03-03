import * as actions from "./ActionType";

const initialState = { blogs: [] };

const BlogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_BLOGS:
      let blogData = action.payload;

      return {
        ...state,
        blogs: blogData,
      };
    default:
      return state;
  }
};

export default BlogsReducer;
