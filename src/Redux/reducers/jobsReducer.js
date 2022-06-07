import { jobsActions } from "../actions/jobsAction";
import { initialJobState } from "./initialState";

export const jobsReducer = (state = initialJobState, action) => {
     switch (action.type) {
      case jobsActions.SET_JOBS:
        return{
          ...state,
          jobs:action.payload

        }
       
        case jobsActions.SET_FAV_JOBS:
        return{
          ...state,
          allFavJobs:action.payload

        }
       default:
         return state;
     }
   };
   