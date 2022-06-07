import { jobsActions } from "../Redux/actions/jobsAction";
const setFavJobs = (allFavJobs) => {
     return {
         type: jobsActions.SET_FAV_JOBS,
         payload: allFavJobs
     };
 };

 export const saveAllFavJobs = (favJob) => {
     return  (dispatch) => {
         try {
          
             dispatch(setFavJobs(favJob));
             console.log(favJob);
         } catch (error) {
             console.log("error.response");
         }
 
     }
 
 }