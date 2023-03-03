import * as actions from "./ActionType";

var initialState = { animals: [] };

const reducer = (state = initialState, action) => {
  //   console.log(state.initialState);
  switch (action.type) {
    case actions.GET_ANIMALS:
      let animalData = state.animals;
      animalData = action.payload;

      if (action.category != null && action.isActive) {
        animalData = animalData.filter(
          (animal) => animal.category.replace(/ /g, "") == action.category
        );
      }

      return {
        animals: animalData,
      };
    default:
      return state;
  }
};

export default reducer;
