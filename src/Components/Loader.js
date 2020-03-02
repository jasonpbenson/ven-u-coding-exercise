import React from "react";
import styled, { keyframes } from "styled-components";

const spinner = keyframes`
0% { transform: rotate(0deg); }
100% { transform: rotate(360deg) }
`;

const StyledLoader = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  .loader-icon {
    animation: ${spinner} 1.5s linear infinite;
    border: 4px solid #c5cfe1;
    border-top: 4px solid #f86900;
    border-radius: 50%;
    height: 80px;
    width: 80px;
  }
  h3 {
    color: #4d5055;
    display: block;
    margin-top: 24px;
    text-align: center;
  }
`;

const Loader = () => {
  return (
    <StyledLoader>
      <div className="loader-icon"></div>
      <h3>Fetching Stories ...</h3>
    </StyledLoader>
  );
};

export default Loader;
