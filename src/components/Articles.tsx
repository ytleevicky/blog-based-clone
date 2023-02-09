import { Fragment, useState, useEffect } from "react";
import { Article } from "./Article";

export const Articles = () => {
  const [articles, setArticle] = useState([]);
  useEffect(() => {
    fetch(`https://hacker-news.firebaseio.com/v0/topstories.json`)
      .then((res) => res.json())
      .then((json) => setArticle(json));
  }, []);

  return (
    <Fragment>
      {articles.map((articleID, i) => (
        <Article
          articleID={articleID}
          key={i}
        />
      ))}
    </Fragment>
  );
};
