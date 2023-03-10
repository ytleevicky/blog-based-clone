import { ClipLoader } from "react-spinners";
import styled from "styled-components";

export const Nav = styled.div`
  background-color: #fff;
  color: #000000;
  width: 100%;
  height: 55px;
  padding-left: 20px;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;

  display: flex;
  align-items: center;
  font-size: 2em;
  font-weight: bold;
  line-height: 1.4;
`;

export const CustSpinner = styled(ClipLoader)`
  margin: auto auto;
  width: 100%;
`;

export const SpinnerContainer = styled.div`
  width: fit-content;
  margin: 2rem auto;
  padding: 0 auto;
`;
