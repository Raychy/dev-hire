import React from "react";
import { search, union } from "../Utils/ExportImages";
import { Link } from "react-router-dom";

const JobMenu = () => {
  return (
    <>
      <h1 className="logo__name">
        Dev <span>Hire</span>{" "}
      </h1>
      <div>
        <ul className="side__menu">
          <li>
            <Link to="/">
              <span className="set__border__left"></span>
              <span className="menu__image">
                <img src={search} alt="menuuu" />
              </span>{" "}
              <span>Home</span>{" "}
            </Link>
          </li>
          <li>
               <Link to="/favorite">
                 <span className="set__border__left"></span>
               <span >
              <img src={union} alt="fav__side__menu" className="fav__side__menu" />
            </span>{" "}
            <span>Favorite</span>{" "}
               </Link>
          
          </li>
        </ul>
      </div>
    </>
  );
};

export default JobMenu;
