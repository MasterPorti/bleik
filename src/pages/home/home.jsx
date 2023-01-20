import React from "react";
import Navbar from "../../modules/navbar/navbar";
import Intro from "../../modules/intro/intro";
import "./home.scss";
function Home(props) {
  return (
    <div className="home">
      <Navbar />
      <Intro />
    </div>
  );
}

export default Home;
