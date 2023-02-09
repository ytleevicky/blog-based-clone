 import React, { Fragment, useState, useEffect } from "react";

type ArticleProps = {
    articleID: number
}

export const Article = (props: ArticleProps) => {
  const [article, setArticle] = useState<{type: string, title: string, text: string, url: string}>();

  useEffect(() => {
    fetch(`https://hacker-news.firebaseio.com/v0/item/${props.articleID}.json`)
      .then((res) => res.json())
      .then((json) => setArticle(json));
  }, []);

  return (
    <Fragment>
      <h1>{article?.title}</h1>

      { article?.text === undefined ? "" :  <div dangerouslySetInnerHTML={{ __html: `${article?.text}` }} /> }
      
      <a href={article?.url}>READ THIS ARTICLE</a>
    </Fragment>
  );
};
