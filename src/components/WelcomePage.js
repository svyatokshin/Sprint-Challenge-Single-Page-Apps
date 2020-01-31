import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Header = styled.h1`
  text-align: center;
`;

const NavagationLink = styled.div`
  text-align: center;
  font-size: 5rem;
`;

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <Header>Welcome to the ultimate fan site!</Header>
        <NavagationLink>
          <NavLink to="/characters">
            Click Here to see the Rick and Morty Characters
          </NavLink>
        </NavagationLink>
        {/* <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        /> */}
      </header>
    </section>
  );
}
