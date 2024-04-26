import { useState } from "react";
import "./App.css";
import PokemonCard from "./components/PokemonCard";
import Button from "./components/NavBar";

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  return (
    <>
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      <Button
        pokemonIndex={pokemonIndex}
        setPokemonIndex={setPokemonIndex}
        pokemonLength={pokemonList.length - 1}
        pokemonList={pokemonList}
      />
    </>
  );
}

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];

export default App;
