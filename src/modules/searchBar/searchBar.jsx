import React from "react";
import SearchIcon from "../../assets/search.svg";
import bell from "../../assets/bell.svg";
import upload from "../../assets/upload.svg";
import defaulProfile from "../../assets/defaultProfile.jpg";
import "./searchBar.scss";
function Searchbar(props) {
  return (
    <div className="searchBar">
      <div className="searchContainer">
        <img src={SearchIcon} />
        <input placeholder="Search" className="search" />
      </div>
      <section className="notificationContainer">
        <div className="notification">
          <img src={bell} />
        </div>
        <div className="notification">
          <img src={upload} />
        </div>
        <img src={defaulProfile} className="profilepic" />
      </section>
    </div>
  );
}

export default Searchbar;
