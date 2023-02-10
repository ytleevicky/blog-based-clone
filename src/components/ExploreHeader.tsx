import React, { Fragment } from "react";
import {
  ExploreTitle,
  ExploreP,
  ExploreContainer,
} from "./styles/ExploreHeader.styles";

export const ExploreHeader: React.FC = () => {
  return (
    <Fragment>
      <ExploreContainer>
        <ExploreP>Discover more about mens health</ExploreP>
        <ExploreTitle>Explore the Hims Journal</ExploreTitle>
      </ExploreContainer>
    </Fragment>
  );
};
