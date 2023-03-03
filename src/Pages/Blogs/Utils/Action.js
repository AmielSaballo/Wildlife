import axios from "axios";
import * as actions from "./ActionType";
import { BlogsAPI } from "../../../Utils/services";

export const getBlogs = () => async (dispatch) => {
  try {
    const res = await axios.get(BlogsAPI);
    dispatch({
      type: actions.GET_BLOGS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
