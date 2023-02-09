import React, { Fragment, useState, useEffect } from "react";

import {
  ArticleH1,
  ArticleP,
  ArticleContainer,
  ArticleImage,
  ArticleInfo,
  ArticleLink,
  ArticleDetails,
  ImageContainer,
} from "./styles/Article.styles";

import tempImage from "../images/articleImage.png";

type ArticleProps = {
  articleID: number;
};

export const Article: React.FC<ArticleProps> = (props: ArticleProps) => {
  const [article, setArticle] = useState<{
    type: string;
    title: string;
    text: string;
    url: string;
  }>();

  useEffect(() => {
    fetch(`https://hacker-news.firebaseio.com/v0/item/${props.articleID}.json`)
      .then((res) => res.json())
      .then((json) => setArticle(json));
  });

  return (
    <Fragment>
      <ArticleContainer>
        <ImageContainer>
          <ArticleImage src={tempImage} />
        </ImageContainer>

        <ArticleInfo>
          <ArticleH1 href={article?.url}>{article?.title}</ArticleH1>

          <ArticleP>
            {article?.text === undefined ? (
              ""
            ) : (
              <ArticleDetails>
                {article?.text.replaceAll(/(<([^>]+)>)/gi, "")}
              </ArticleDetails>
            )}
          </ArticleP>

          <ArticleLink href={article?.url}>Read this article</ArticleLink>
        </ArticleInfo>
      </ArticleContainer>
    </Fragment>
  );
};
