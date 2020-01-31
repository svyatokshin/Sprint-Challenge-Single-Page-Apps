import React, { useState } from "react";
import Header from "./components/Header.js";
import { Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage.js";
import SearchForm from "./components/SearchForm.js";
import CharacterList from "./components/CharacterList.js";

export default function App() {
  const [characterSearch, setCharacterSearch] = useState("");
  return (
    <main>
      <Header />
      <Route exact path="/">
        <WelcomePage />
      </Route>
      <Route path="/characters">
        <SearchForm setCharacterSearch={setCharacterSearch} />
        <CharacterList characterSearch={characterSearch} />
      </Route>
    </main>
  );
}
