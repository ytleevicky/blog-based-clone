import React, { Fragment, useState, useEffect } from "react";
import { Article } from "./Article";
import { CustSpinner, SpinnerContainer } from "./styles/Navbar.styles";

export const ArticlesJob: React.FC = () => {
  const [articles, setArticle] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://hacker-news.firebaseio.com/v0/jobstories.json`)
      .then((res) => res.json())
      .then((json) => {
        setArticle(json);
        setLoading(false);
      });
  }, []);

  return loading ? (
    <SpinnerContainer>
      <CustSpinner
        loading={loading}
        color={"#000000"}
        size={100}
      />
    </SpinnerContainer>
  ) : (
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
