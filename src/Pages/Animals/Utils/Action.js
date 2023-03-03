import axios from "axios";
import * as actions from "./ActionType";
import { AnimalsAPI } from "../../../Utils/services";

export const getAnimals = (isActive, category) => async (dispatch) => {
  try {
    const res = await axios.get(AnimalsAPI);
    dispatch({
      type: actions.GET_ANIMALS,
      payload: res.data,
      category: category,
      isActive: isActive,
    });
  } catch (err) {
    console.log(err);
  }
};
