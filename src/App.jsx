import { useState } from 'react'
import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PokemonCard from './components/PokemonCard'
import NavBar from  "./components/NavBar"




function App() {  



  // useEffect (
  //   () => {
  //     alert("hello pokemon trainer :)");
  //   },
  //   []
  // );

  const [pokemonIndex, setPokemonIndex] = useState(0)
  

      const [pokemonList, setPokemonList] = useState ([
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
    
      ])

//   useEffect(() => {
//     if (pokemonList[pokemonIndex].name === "pikachu") {
//     const delay = 100; 
//     const timeoutId = setTimeout(() => {
//       alert('pika pikachu');
//     }, delay);

//     return () => {
//       clearTimeout(timeoutId);
//     }
//   }
// }, [pokemonIndex]);

const handlePokemonClick = (index) => {
  setPokemonIndex(index);
}

  return (
    <>
    <PokemonCard pokemon={pokemonList[pokemonIndex]} />
    <NavBar
    handlePokemonClick={handlePokemonClick}
    pokemonList={pokemonList}
    />
      <h1>Bonjour</h1>
      
     
     
    </>
  );
  } 


export default App
