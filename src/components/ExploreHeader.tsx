import React, { Fragment } from "react";
import {
  ExploreTitle,
  ExploreP,
  ExploreContainer,
} from "./styles/ExploreHeader.styles";

export const ExploreHeader = () => {
  return (
    <Fragment>
      <ExploreContainer>
        <ExploreP>Discover more about mens health</ExploreP>
        <ExploreTitle>Explore the Hims Journal</ExploreTitle>
      </ExploreContainer>
    </Fragment>
  );
};
