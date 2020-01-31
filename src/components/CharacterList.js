import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard.js";
import styled from "styled-components";

const CardsContainer = styled.div`
  display: flex;
  flex-flow: row-wrap;
  align-items: center;
  justify-content: space-evenly;
`;

export default function CharacterList(props) {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://rickandmortyapi.com/api/character/?name=${props.characterSearch}`
      )
      .then(response => {
        console.log(response.data);
        setCharacters(response.data.results);
      })
      .catch(error => {
        console.log("This is the Catch Error ", error);
      });
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, [props.characterSearch]);

  return (
    <CardsContainer>
      <section className="character-list">
        {characters.map(character => {
          return <CharacterCard key={character.id} character={character} />;
        })}
      </section>
    </CardsContainer>
  );
}
