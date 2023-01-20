import React from "react";
import Feed from "../feed/feed";
import Searchbar from "../searchBar/searchBar";
import "./intro.scss";
function Intro(props) {
  return (
    <div className="intro">
      <Searchbar />
      <Feed />
    </div>
  );
}

export default Intro;
