import * as actions from "./ActionType";

const initialState = { animals: [] };

const AnimalsReducer = (state = initialState, action) => {
  //   console.log(state.initialState);
  switch (action.type) {
    case actions.GET_ANIMALS:
      let animalData = action.payload;

      if (action.category != null && action.isActive) {
        animalData = animalData.filter(
          (animal) => animal.category.replace(/ /g, "") == action.category
        );
      }

      return {
        ...state,
        animals: animalData,
      };
    default:
      return state;
  }
};

export default AnimalsReducer;
