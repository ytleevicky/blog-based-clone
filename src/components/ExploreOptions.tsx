import React, { Fragment } from "react";
import { NavOption, NavOptionsContainer } from "./styles/ExploreOptions.styles";

export const ExploreOptions: React.FC = () => {
  return (
    <Fragment>
      <NavOptionsContainer>
        <NavOption to="/">Top</NavOption>
        <NavOption to="/job">Job</NavOption>
        <NavOption to="/ask">Ask HN</NavOption>
        <NavOption to="show">Show HN</NavOption>
      </NavOptionsContainer>
    </Fragment>
  );
};
