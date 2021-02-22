import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import qoreContext from "../qoreContext";
import Navbar from "../components/navbar";
import "./style/article.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import CardArticle from "../components/cardArticle";
import ArticleContent from "../components/articleContent";

const Article = () => {
  const { data: sliderContent, status, error } = qoreContext
    .view("allArticle")
    .useListRow(
      {
        limit: 3,
        order: "asc",
      },
      { networkPolicy: "cache-only" }
    );

  const history = useHistory();
  const settings = {
    autoplay: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const item = {
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    swipeToSlide: true,
  };

  return (
    <>
      <div className="article">
        <Navbar />
      </div>
      <Slider {...settings}>
        {sliderContent
          ? sliderContent.map((item, id) => {
              return (
                <>
                  <div className="container-article">
                    <div
                      style={{
                        backgroundImage: `url("${item.image}")`,
                        width: "100%",
                        height: "100%",
                        backgroundPosition: "right center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                      }}
                    >
                      <div className="text-slider">
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>
                        <div
                          className="button-article"
                          onClick={() => history.push(`/read/${item.id}`)}
                        >
                          Baca Artikel Ini
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })
          : null}
      </Slider>

      <section className="all-article">
        <h1>Artikel Terbaru</h1>
        <CardArticle />
        <ArticleContent />
      </section>
    </>
  );
};

export default Article;
