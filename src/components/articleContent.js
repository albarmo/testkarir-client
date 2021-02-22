import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import qoreContext from "../qoreContext";
import "./style/articleContent.css";

export const ArticleContent = () => {
  const history = useHistory();
  const { data: allArticle, status, error } = qoreContext
    .view("allArticle")
    .useListRow(
      {
        limit: 100,
        order: "asc",
      },
      { networkPolicy: "cache-only" }
    );

  console.log(allArticle);

  return (
    <>
      <div className="card-article-content">
        {allArticle
          ? allArticle.map((item, id) => {
              return (
                <>
                  <div className="article-column">
                    <img src={item.image} alt="card image" />
                    <div className="article-column-title" key={id}>
                      <h1 onClick={() => history.push(`/read/${item.id}`)}>
                        {item.title}
                      </h1>
                      <p>{item.description}</p>
                    </div>
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
