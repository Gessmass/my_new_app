
const NavBar = (props) => {
  const {pokemonIndex, pokemonList, handlePrevious, handleNext} = props

  

  return (
    <>
    <div>
      <p>salut</p>
      </div>
    {pokemonIndex > 0 ? <button onClick={handlePrevious}>Previous</button> : <p></p>}
    {pokemonIndex < pokemonList.length - 1 ? <button onClick={handleNext}>Next</button> : <p></p>}
    </>
  );
}


export default NavBar;