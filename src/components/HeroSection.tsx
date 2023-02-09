import React, { Fragment } from "react";
import {
  Hero,
  HeroDetails,
  HeroH1,
  HeroImg,
  HeroP,
  HeroWrapper,
} from "./styles/HeroSection.styles";

import heroImage from "../images/hims-hero.webp";

export const HeroSection = () => {
  return (
    <Fragment>
      <HeroWrapper>
        <Hero>
          <HeroDetails>
            <HeroH1>Savoir Faire</HeroH1>
            <HeroP>it’s french. say it how it’s supposed to be said.</HeroP>
            <HeroP>it’ll make your mouth feel funny.</HeroP>
          </HeroDetails>
          <HeroImg src={heroImage} />
        </Hero>
      </HeroWrapper>
    </Fragment>
  );
};
