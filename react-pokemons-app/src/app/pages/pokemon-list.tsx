import { useState, useEffect, useMemo, useCallback } from 'react';
import List from '../components/List';
import { Pokemon } from '../models/pokemon';
import PokemonCard from '../components/pokemon-card';
import { getPokemons } from '../services/pokemon-service';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import PokemonSearch from '../components/pokemon-search';
import { isAuthenticated } from '../services/authentication-service';

function useAuthentication() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuthenticated) {
      console.log('redirect to login')
      navigate({ pathname: '/login' });
    }
  }, []);
}



function PokemonList() {
  console.log('render PokemonList')
 // useAuthentication();
  const [term, setTerm] = useState('');
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  /*
  function longTaskSync(pokemons: Pokemon[]) {
    const debut = Date.now();
    while (debut + 1000 > Date.now()) {}

    return pokemons;
  }
  */

  // const val = longTaskSync(pokemons);
  //const val = useMemo(() => longTaskSync(pokemons), [pokemons]); // memoisé (se réexécute si pokemons change)
  //console.log(val.length);

  // avec useMemo on pourrait memoisé une fonction :
  // const renderPokemonCard = useMemo(() => (pokemon: Pokemon) => <PokemonCard key={pokemon.id} pokemon={pokemon} />, []);

  // Dans ce cas on peut simplifier avec useCallback (si la valeur memoisé est une fonction) :
  const renderPokemonCard = useCallback((pokemon: Pokemon) => <PokemonCard key={pokemon.id} pokemon={pokemon} />, []);


  useEffect(() => {
    getPokemons().then((pokemons) => setPokemons(pokemons));
  }, []);

  return (
    <div>
      <h1 className="center">Pokédex</h1>
      <div className="container">
        <div className="row">
          <PokemonSearch term={term} setTerm={setTerm} />
          <List items={pokemons} renderItem={renderPokemonCard} />
        </div>
        <Link to="/pokemons/compare">Compare</Link>
      </div>
      <Link
        className="btn-floating btn-large waves-effect waves-light red z-depth-3"
        style={{ position: 'fixed', bottom: '25px', right: '25px' }}
        to="/pokemon/add"
      >
        <i className="material-icons">add</i>
      </Link>
    </div>
  );
}

export default PokemonList;
