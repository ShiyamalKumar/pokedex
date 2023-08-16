import React from 'react';
import { Link} from 'react-router-dom';

import { padNumber, capitalizeFirstLetter } from '../utils/helper';
import PokemonDetails from '../pages/PokemonDetails';

const CardList = ({pokemonList}) => {

  return (
    <div>
      <h1>Pokédex</h1>
      <div className="card-list-container">
        {pokemonList.map(pokemon => (
          <Link to={`/pokemon/${pokemon.name}`} key={pokemon.name}>
            <div className="pokemon-card">
              <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${padNumber(pokemon.url.split('/')[6], 3)}.png`} alt={pokemon.name} />
              <p>{capitalizeFirstLetter(pokemon.name)}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CardList;
