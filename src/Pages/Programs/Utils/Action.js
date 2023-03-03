import axios from "axios";
import * as actions from "./ActionType";
import { ProgramsAPI } from "../../../Utils/services";

export const getPrograms = () => async (dispatch) => {
  try {
    const res = await axios.get(ProgramsAPI);
    dispatch({
      type: actions.GET_PROGRAMS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
