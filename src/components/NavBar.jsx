

const NavBar = (props) => {
  const { pokemonList, handlePokemonClick } = props;

  return (
   <>
      {pokemonList.map((pokemon, index) => (
        <button key={index} onClick={() => handlePokemonClick(index)}>
          {pokemon.name}
        </button>
      ))}
  </>
  );
};

export default NavBar;
