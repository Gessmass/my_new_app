import { useEffect } from "react";




const NavBar = (props) => {
  const {pokemonIndex, pokemonList, handlePrevious, handleNext} = props

 

  return (
    <>
    {pokemonIndex > 0 ? <button onClick={handlePrevious}>Previous</button> : <p></p>}
    {pokemonIndex < pokemonList.length - 1 ? <button onClick={handleNext}>Next</button> : <p></p>}
    </>
  );
}


export default NavBar;