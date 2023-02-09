import styled from "styled-components";

export const Hero = styled.div`
  width: 85%;
  max-width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 60% 40%;
  gap: 10px;
  padding: 20px;
`;

export const HeroWrapper = styled.div`
  background-color: rgb(183, 199, 201);
  color: #000000;
  width: 100%;
  height: 100%;
  margin-top: 55px;
`;

export const HeroDetails = styled.div`
  margin-top: 4em;
  display: block;
  margin: auto;
  width: 100%;
`;

export const HeroH1 = styled.h1`
  font-size: 5em;
  font-weight: bold;
  margin: 0 auto;
`;

export const HeroP = styled.p`
  font-size: 1.5em;
  margin: 1em auto;
`;

export const HeroImg = styled.img`
  height: auto;
  width: 100%;
`;
