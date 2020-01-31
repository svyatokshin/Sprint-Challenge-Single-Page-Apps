import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  width: 100%;
  background: papayawhip;
  text-align: center;
`;
const CardImg = styled.img`
  margin: 0 auto;
  max-width: 100%;
`;

export default function CharacterCard(props) {
  return (
    <CardContainer>
      <h3>{props.character.name}</h3>
      <CardImg src={props.character.image} alt={props.character.name} />
      <p>Name: {props.character.name}</p>
      <p>Species: {props.character.species}</p>
      <p>Origin planet: {props.character.origin.name}</p>
    </CardContainer>
  );
}
