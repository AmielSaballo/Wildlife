import * as actions from "./ActionType";

const initialState = { programs: [] };

const ProgramsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_PROGRAMS:
      let programData = action.payload;

      return {
        ...state,
        programs: programData,
      };
    default:
      return state;
  }
};

export default ProgramsReducer;
