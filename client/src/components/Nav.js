import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { StyledLink } from "./styledComponents";

export const Nav = () => {
  return (
    <Navbar>
      <StyledLink to="/projects">
        <Title>projectinator</Title>
      </StyledLink>
      <div>
        <StyledNavLink exact to="/projects" activeStyle={activeStyles}>
          home
        </StyledNavLink>
      </div>
    </Navbar>
  );
};

const activeStyles = {
  textDecoration: "line-through"
};

const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #0f0f0f;
  padding: 1rem;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #eee;
  margin-right: 2rem;
`;

const Title = styled.h1`
  color: white;
  font-weight: 300;
`;
