import AnimalsReducer from "../Pages/Animals/Utils/AnimalsReducer";
import BlogsReducer from "../Pages/Blogs/Utils/BlogsReducer";
import ProgramsReducer from "../Pages/Programs/Utils/ProgramsReducer";
import { combineReducers } from "redux";

export const AllReducers = combineReducers({
  animalsList: AnimalsReducer,
  blogsList: BlogsReducer,
  programsList: ProgramsReducer,
});
