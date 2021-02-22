import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import qoreContext from "../qoreContext";
import "./style/cardArticle.css";

export const ArticleContent = () => {
  const history = useHistory();
  const { data: newArticle, status, error } = qoreContext
    .view("allArticle")
    .useListRow(
      {
        limit: 5,
        order: "asc",
      },
      { networkPolicy: "cache-only" }
    );

  // console.log(newArticle);

  return (
    <>
      <div className="card-article-container">
        {newArticle
          ? newArticle.map((item, id) => {
              return (
                <>
                  <div
                    className="card-article"
                    onClick={() => history.push(`/read/${item.id}`)}
                  >
                    <img src={item.image} alt="card image" height="50%" />
                    <h1>{item.title}</h1>
                  </div>
                </>
              );
            })
          : null}
      </div>
    </>
  );
};

export default ArticleContent;
