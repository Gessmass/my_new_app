import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PokemonCard from './components/PokemonCard'
import NavBar from  "./components/NavBar"

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

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0)
    
      const handleNext = () => {
        setPokemonIndex(pokemonIndex + 1);
        
      };
    
      const handlePrevious = () => {
        setPokemonIndex(pokemonIndex - 1);
      
        
      };
  

  return (
    <>
    <NavBar 
    pokemonIndex={pokemonIndex}
    handleNext={handleNext}
    handlePrevious={handlePrevious}
    pokemonList={pokemonList}/>
      <h1>Bonjour</h1>
      <div className="card">
      </div>
      <div>
        <PokemonCard pokemon = {pokemonList[pokemonIndex]} />
      </div>
      <div>
      <br />
    </div>

    </>
  );
  } 


export default App
