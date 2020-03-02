import React from "react";
import styled from "styled-components";

const ButtonStyles = styled.button`
  background: #fff;
  border: none;
  color: #f86900;
  cursor: pointer;
  font-size: 16px;
  margin-top: 40px;
  outline: 2px solid #f86900;
  padding: 8px;
  text-decoration: none;
  text-transform: uppercase;
  transition: color, background-color 0.3s;
  @media (hover: hover) {
    :hover {
      color: #fff;
      background: #f86900;
      box-shadow: -2px 2px 4px #00000050;
      font-weight: bold;
    }
  }
`;

const Button = props => {
  return (
    <div>
      <ButtonStyles
        onClick={props.onClick}
        id={props.id}
        className={props.className}
      >
        {props.label}
      </ButtonStyles>
    </div>
  );
};

export default Button;
