import React from "react";
import { Nav } from "./styles/Navbar.styles";

export const Navbar: React.FC = () => {
  return (
    <Nav>
      <a
        href="https://www.forhims.com/"
        style={{ textDecoration: "none", color: "black" }}
      >
        hims
      </a>
    </Nav>
  );
};
