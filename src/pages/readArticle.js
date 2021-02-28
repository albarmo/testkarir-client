import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import qoreContext from "../qoreContext";
import NavbarTransparent from "../components/navbarTransparent";
import "./style/readArticle.css";
import parse from "html-react-parser";
import Footer from "../components/footer";

const ReadArticle = () => {
  let { id } = useParams();
  const { data: article, status, error } = qoreContext
    .view("allArticle")
    .useGetRow(id);

  console.log(article);

  return (
    <>
      {article ? (
        <>
          <div className="read">
            <div
              className="container-read"
              style={{
                backgroundImage: `url("${article.image}")`,
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                padding: "50px",
              }}
            >
              <NavbarTransparent />
              <span style={{ height: "200px" }}></span>
              <h1>
                {article.title}
                <p
                  style={{
                    fontSize: "16px",
                    fontWeight: "normal",
                    width: "60%",
                  }}
                >
                  {article.description}
                  <br />
                  <br></br>
                  <b>{article.date}</b>
                </p>
              </h1>
            </div>
            <div className="container-blog">{parse(article.content)}</div>
          </div>
        </>
      ) : null}
      <Footer />
    </>
  );
};

export default ReadArticle;
