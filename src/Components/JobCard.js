import React,{useState} from 'react'
import { useDispatch } from "react-redux";
import { saveAllFavJobs } from '../ApiServices/FavJobService';

import {  whitefav, colorFav} from "../Utils/ExportImages";

const JobCard = ({job}) => {
  const [toggleFav, setToggleFav] = useState(false);
  // const [toggleData, setToggleData] = useState([]);
  let datas = [];
   let dispatch = useDispatch();
const handleSubmitFavorite = ()=>{
  setToggleFav(!toggleFav);
  if (toggleFav===true){

  }
  dispatch(saveAllFavJobs(job));
  datas.push(job._source);
  // setToggleData(job);
  console.log(datas);
 
 
  // console.log(toggleData);
}

  return (
     <div className="card">
               
               <div className="card__main__img">
               <img
                    src={job._source.service_photo}
                    alt="card__bg__img"
                    className="card__bg__img"
                    
                  />
                  <div className= {`fav__icon  ${toggleFav ? "fav__icon__bg_white" :"fav__icon__bg_grey"}` } onClick={ handleSubmitFavorite}>
                    <img src={toggleFav?colorFav: whitefav } alt="fav__icon" />
                  </div>
                  <div className="card__profile__img">
                  <img src={job._source.avatar} alt="card__profile__img"  />
                  </div>
                   
               </div>
               
                <div className='details__section'>
                <p className='display__name'>{job._source.display_name} </p>
                <p className='price__container'> <span className='start__price'>&#8358;{job._source.starting_from}</span>  <button className="hire__btn">Hire</button> </p>
                </div>
              </div>
  )
}

export default JobCard