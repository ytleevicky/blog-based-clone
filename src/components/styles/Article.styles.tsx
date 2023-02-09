import styled from "styled-components";

export const ArticleContainer = styled.div`
  margin: 10px 90px;
  padding: 50px 0px;
  border-bottom: 2px solid #eee2d7;
  display: grid;
  grid-template-columns: 35% 55%;
  grid-gap: 5%;
`;

export const ArticleImage = styled.img`
  height: auto;
  max-width: 100%;
`;

export const ArticleInfo = styled.div``;

export const ArticleH1 = styled.a`
  text-decoration: none;
  font-size: xx-large;
  font-weight: 400;
  color: #000000e0;
  margin-top: 0px;
  line-height: 1.5;
`;

export const ArticleP = styled.p`
  color: #000000e0;
  font-size: large;
  margin: 30px 0px;
  line-height: 1.5;
`;

export const ArticleLink = styled.a`
  color: #000000e0;
  font-weight: 500;
  font-size: small;
  padding-bottom: 5px;
  text-decoration: none;
  text-transform: uppercase;
  border-bottom: 2px solid #000000e0;
`;
