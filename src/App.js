import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PokemonDetails from './pages/PokemonDetails';
import Home from './pages/Home'
import { getPokemonData } from './utils/getPokemonData';

const App = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonDetails, setPokemonDetails] = useState([])
    
    useEffect(() => {
        getPokemonData('https://pokeapi.co/api/v2/pokemon?limit=20', setPokemonList, setPokemonDetails)
    }, []);
console.log(pokemonList);
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home pokemonList={pokemonList}/>} />
        <Route path="/pokemon/:name" element={<PokemonDetails  data={pokemonDetails} />} />
      </Routes>
    </Router>
  );
};

export default App;

