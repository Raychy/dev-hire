import axios from "axios";
import { jobsActions } from "../Redux/actions/jobsAction";
const setJobs = (allJobs) => {
     return {
         type: jobsActions.SET_JOBS,
         payload: allJobs
     };
 };

 
 
 export const getAllJobs = () => {
     return async (dispatch) => {
         try {
             const response = await axios.get("https://api.terawork.com/service-categories/sellers-services/computer-software-development",
                );
             dispatch(setJobs(response.data.data.service_search_results.hits))
         } catch (error) {
             console.log(error.response);
         }
 
     }
 
 }