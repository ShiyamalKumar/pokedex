import axios from 'axios';

export const getPokemonData = (link, setPokemonList, setPokemonDetails ) => {
    axios.get(link)
    .then(response => {
        setPokemonList(response.data.results);
        
        //getting data for each item
        response.data.results.map( item => {
          axios.get(item.url)
          .then((data) => {
              setPokemonDetails( prev => [ ...prev, data.data])
          })
          .catch((err)=>console.log("unable to fetch POKE Details"))
        })
        
    })
    .catch(error =>console.error(error));
}

