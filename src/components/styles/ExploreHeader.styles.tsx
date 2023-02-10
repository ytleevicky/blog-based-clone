import styled from "styled-components";

export const ExploreContainer = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
`;

export const ExploreP = styled.a`
  display: block;
  text-align: center;
  color: #cc835c;
  cursor: pointer;
  text-decoration: none;
  margin-top: auto;
  padding-bottom: 30px;
`;

export const ExploreTitle = styled.a`
  display: block;
  text-align: center;
  font-size: 70px;
  font-weight: 600;
  color: #000000e0;
  cursor: pointer;
  text-decoration: none;

  @media (max-width: 1024px) {
    font-size: 50px;
  }

  @media (max-width: 768px) {
    font-size: 40px;
  }

  @media (max-width: 500px) {
    font-size: 30px;
  }
`;
