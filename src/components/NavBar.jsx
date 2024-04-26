function Button({ setPokemonIndex, pokemonList }) {
  const handleClick = (pokemonIndex) => {
    setPokemonIndex(pokemonIndex);
  };

  return (
    <div>
      {pokemonList.map((pokemon, index) => {
        return (
          <button key={pokemon.name} onClick={() => handleClick(index)}>
            {pokemon.name}
          </button>
        );
      })}
    </div>
  );
}

export default Button;

/*{pokemonIndex > 0 ? (
  <button onClick={handleClickDown}>précedent</button>
) : (
  ""
)}
{pokemonIndex < pokemonLength ? (
  <button onClick={handleClickUp}>Suivant</button>
) : (
  ""
)} */
