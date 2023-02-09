import React, { Fragment } from "react";
import { NavOption, NavOptionsContainer } from "./styles/ExploreOptions.styles";

export const ExploreOptions = () => {
  return (
    <Fragment>
      <NavOptionsContainer>
        <NavOption>Job</NavOption>
        <NavOption>Story</NavOption>
        <NavOption>Comment</NavOption>
        <NavOption>Poll</NavOption>
        <NavOption>Pollopt</NavOption>
      </NavOptionsContainer>
    </Fragment>
  );
};
