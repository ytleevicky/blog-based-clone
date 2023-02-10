import styled from "styled-components";

export const ArticleContainer = styled.div`
  margin: 10px 90px;
  padding-top: 20px;
  padding-bottom: 60px;
  border-bottom: 2px solid #eee2d7;
  display: grid;
  grid-template-columns: 30% 60%;
  grid-gap: 5%;
  height: 400px;

  @media (max-width: 1024px) {
    grid-template-columns: 100%;
    padding-left: 80px;
    padding-right: 80px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 100%;
    padding-top: 10px;
    padding-bottom: 20px;
    padding-left: 0px;
    padding-right: 0px;
    margin: 20px;
  }
`;

export const ImageContainer = styled.div`
  height: auto;
  overflow: hidden;
`;

export const ArticleImage = styled.img`
  width: 100%;
  height: auto;
`;

export const ArticleInfo = styled.div`
  height: 60%;
`;

export const ArticleH1 = styled.a`
  text-decoration: none;
  font-size: 1.8em;
  font-weight: 500;
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

export const ArticleDetails = styled.div`
  height: 55px;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
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
