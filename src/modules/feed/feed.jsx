import React from "react";
import "./feed.scss";
import defaulBanner from "../../assets/defaulBanner.png";
import Trending from "../../assets/trending-white.svg";
import CarouselTrending from "../carouselTrending/carouselTrending";
function Feed(props) {
  return (
    <div>
      <Banner />
      <span className="feedTitle">
        Trending
        <img src={Trending} />
      </span>
      <CarouselTrending />
    </div>
  );
}

function Banner() {
  return (
    <div className="bannerContainer">
      <section className="textContainer">
        <div className="infoBanner">New</div>
        <div className="titleBanne">Marvel's Spider-Man: Myles Morales</div>
        <div className="bottonBanner">
          <span>New trailer </span>
          <div className="buttonActive">Watch</div>
        </div>
      </section>
      <div>
        <img src={defaulBanner} className="imgBanner" />
      </div>
    </div>
  );
}

export default Feed;
