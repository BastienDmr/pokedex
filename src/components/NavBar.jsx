function Button({ pokemonIndex, setPokemonIndex, pokemonLength }) {
  const handleClickDown = () => {
    setPokemonIndex(pokemonIndex - 1);
  };

  const handleClickUp = () => {
    setPokemonIndex(pokemonIndex + 1);
  };

  return (
    <div>
      {pokemonIndex > 0 ? (
        <button onClick={handleClickDown}>précedent</button>
      ) : (
        ""
      )}
      {pokemonIndex < pokemonLength ? (
        <button onClick={handleClickUp}>Suivant</button>
      ) : (
        ""
      )}
    </div>
  );
}

export default Button;
