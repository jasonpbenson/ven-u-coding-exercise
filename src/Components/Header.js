import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import Logo from "../Assets/logo.png";

const HeaderStyles = styled.div`
  background-color: #fff;
  height: 72px;
  position: fixed;
  width: 100vw;
  z-index: 200;
  .header-items {
    align-items: center;
    border-bottom: 2px solid #53a0dd50;
    display: flex;
    height: 100%;
    justify-content: space-between;
    margin: 0 auto;
    width: 80%;
  }
  .header-items .logo {
    height: 36px;
  }
  .nav {
    align-items: center;
    display: flex;
    justify-content: space-evenly;
    min-width: 288px;
    width: 35%;
    a {
      font-size: 16px;
      outline: none;
      padding: 4px 8px;
      text-decoration: none;
      transition: color, border 0.3s;
      width: fit-content;
    }
    a:hover {
      color: #53a0dd;
    }
    .top-stories-nav {
      border: ${props =>
        props.location === "/search-results"
          ? "2px solid #f86900"
          : "2px solid #f8690000"};
      color: ${props =>
        props.location === "/search-results" ? "#53a0dd" : "#4d5055"};
    }
    .saved-stories-nav {
      border: ${props =>
        props.location === "/saved-stories"
          ? "2px solid #f86900"
          : "2px solid #fff"};
      color: ${props =>
        props.location === "/saved-stories" ? "#53a0dd" : "#4d5055"};
    }
  }
  @media (max-width: 490px) {
    height: 96px;
    .header-items {
      flex-direction: column;
      justify-content: space-evenly;
    }
  }
`;

const Header = props => {
  return (
    <HeaderStyles {...props}>
      <header className="header-items">
        <img src={Logo} alt="VenU logo" className="logo" />
        <nav className="nav">
          <NavLink className="top-stories-nav" to="search-results">
            Top Stories
          </NavLink>
          <NavLink className="saved-stories-nav" to="saved-stories">
            Saved Stories
          </NavLink>
        </nav>
      </header>
    </HeaderStyles>
  );
};

export default Header;
