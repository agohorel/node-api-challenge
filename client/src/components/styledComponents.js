import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";

export const Card = styled.div`
  padding: 1rem;
  background-color: #3c3c3c;
  border-radius: 3px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);
  margin: 2rem;
  color: #eee;
  width: calc(33% - 4rem);

  * {
    margin: 1rem;
  }

  h3 {
    font-size: 32px;
  }

  :hover {
    background-color: #2c2c2c;
  }
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color #eee;

    :hover {
        color: #aaa;
    }
`;

export const CardContainer = styled.main`
  display: flex;
  flex-wrap: wrap;
  margin: 2rem;
`;

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: "Roboto", sans-serif;
    background-color: #1c1c1c;
  }

`;
