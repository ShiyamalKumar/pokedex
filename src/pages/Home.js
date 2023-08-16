import React from 'react';

import CardList from '../components/CardList';

const Home = ({pokemonList}) => {
  return (
   <CardList pokemonList={pokemonList} />
  )
}

export default Home