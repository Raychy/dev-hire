/* eslint-disable react-hooks/exhaustive-deps */
import React , { useEffect } from 'react'
import TitleHeading from '../Utils/TitleHeading'
import { useSelector } from "react-redux";

const FavoritesC = () => {
  
  const favJobs = useSelector((state) => state.persistedReducer.jobs.allFavJobs);
  useEffect(() => {
   console.log(favJobs);
  }, [])
  
  return (
    <>
    <TitleHeading titleHeader={"Favorites"} />

    </>
  )
}

export default FavoritesC