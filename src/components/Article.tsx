import React, { Fragment, useState, useEffect } from "react";
import { CustSpinner, SpinnerContainer } from "./styles/Navbar.styles";

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

  const [loading, setLoading] = useState(true);
  const [image, setImage] = useState("");

  const scrapeImage = async (url: RequestInfo | URL) => {
    const response = await fetch(url);
    const text = await response.text();
    const parser = new DOMParser();
    var imgVal = "";

    const htmlDoc = parser.parseFromString(text, "text/html");
    const image = htmlDoc
      .querySelector('meta[property="og:image"]')
      ?.getAttribute("content");

    if (image) {
      // Have image metadata from URL
      imgVal = String(image);
      setImage(imgVal);
    } else {
      // No image metadata is found -> Generate a random images
      const response = await fetch(
        "https://picsum.photos/200/300?date=" + new Date().toLocaleString()
      );
      const url = response.url;
      setImage(url);
    }
  };

  useEffect(() => {
    fetch(`https://hacker-news.firebaseio.com/v0/item/${props.articleID}.json`)
      .then((res) => res.json())
      .then(async (json) => {
        setArticle(json);
        setLoading(false);
        scrapeImage(json.url);
      });
  }, []);

  return (
    <Fragment>
      <ArticleContainer>
        <ImageContainer>
          <ArticleImage src={image} />
        </ImageContainer>

        {loading ? (
          <SpinnerContainer>
            <CustSpinner
              loading={loading}
              color={"#000000"}
              size={100}
            />
          </SpinnerContainer>
        ) : (
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
        )}
      </ArticleContainer>
    </Fragment>
  );
};
