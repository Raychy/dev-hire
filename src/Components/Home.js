/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllJobs } from "../ApiServices/jobsService";
import TitleHeading from "../Utils/TitleHeading";

import JobCard from "./JobCard";

const HomeComponent = ({titleHeader}) => {
  let dispatch = useDispatch();
  const allJobs = useSelector((state) => state.persistedReducer.jobs.jobs);
  const fetchMyInvestments = () => {
    dispatch(getAllJobs());
  };
  useEffect(() => {
    fetchMyInvestments();
    // console.log(allJobs);
  }, []);

  return (
    <>
      <TitleHeading titleHeader={"Hire Top Developers"} />
      <div className="all__jobs__container">
        {allJobs.map((job) => (
          <JobCard job={job} key={job._id} />
        ))}
      </div>
    </>
  );
};

export default HomeComponent;
