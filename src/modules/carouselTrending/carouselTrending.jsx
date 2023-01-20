import React from "react";
import defaulTrending from "../../assets/defaulCarousel.png";
import defaulTrending2 from "../../assets/homepod.jpg";
import defaulTrendingPreview from "../../assets/carousellPreview.gif";
import defaulTrendingPreview2 from "../../assets/carousellPreview2.gif";

import "./carouselTrending.scss";

function CarouselTrending() {
  return (
    <div className="carouselContainer">
      <ImagenCarousel
        imagen={defaulTrending}
        preview={defaulTrendingPreview}
        title={"The end of an era"}
      />
      <ImagenCarousel
        imagen={defaulTrending2}
        preview={defaulTrendingPreview2}
        title={"The all-new HomePod"}
      />
      <ImagenCarousel
        imagen={defaulTrending2}
        preview={defaulTrendingPreview2}
        title={"The all-new HomePod"}
      />
      <ImagenCarousel
        imagen={defaulTrending2}
        preview={defaulTrendingPreview2}
        title={"The all-new HomePod"}
      />
    </div>
  );
}

function ImagenCarousel({ imagen, preview, title }) {
  return (
    <div className="carouselImagenContainer ">
      <img src={imagen} className="imagen" />
      <img src={preview} className="preview" />
      <span>{title}</span>
    </div>
  );
}

export default CarouselTrending;
