import { Link } from "react-router-dom"
import styled from "styled-components";

export const NavOptionsContainer = styled.div`
  width: 100%;
  height: 100px;
  border-bottom: 2px solid #eee2d7;
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 40px;
`;

export const NavOption = styled(Link)`
  color: #00000070;
  font-size: x-large;
  font-weight: 400;
  line-height: 1;
  text-decoration: none;
  margin: auto;
  cursor: pointer;
`;
