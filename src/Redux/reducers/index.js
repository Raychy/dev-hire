import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { jobsReducer } from "./jobsReducer";


const persistUserConfig = {
  key: "jobs",
  storage,
};


export const persistedReducer = combineReducers({
  jobs: persistReducer(persistUserConfig, jobsReducer),

});
