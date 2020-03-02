import React from "react";
import styled from "styled-components";

const StyledContainer = styled.main`
  align-items: flex-start;
  color: #4d5055;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin: 80px 0;
  width: 80%;
  z-index: 100;
  .page-header {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 16px;
    width: 100%;
  }
  .page-header h1 {
    margin-top: 16px;
  }
  @media (max-width: 490px) {
    margin: 96px 0;
  }
`;

const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
