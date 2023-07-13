import { useState, useEffect, useMemo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import List from '../components/List';
import Loader from '../components/loader';
import { Pokemon } from '../models/pokemon';
import PokemonCard from '../components/pokemon-card';
import { getPokemons } from '../services/pokemon-service';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import PokemonSearch from '../components/pokemon-search';
import { isAuthenticated } from '../services/authentication-service';
import { requestItems, requestItemsStarted, requestItemsSucceed, updateSearchTerm } from '../store/actions';
import { filteredPokemonsSelector, pokemonsSelector } from '../store/selectors';

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

  const {loading, searchTerm} = useSelector(pokemonsSelector);
  const filteredPokemons = useSelector(filteredPokemonsSelector);
  const dispatch = useDispatch();

  // const [term, setTerm] = useState('');
  // const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  const renderPokemonCard = useCallback((pokemon: Pokemon) => <PokemonCard key={pokemon.id} pokemon={pokemon} />, []);


  useEffect(() => {
    dispatch(requestItems());
    /*
    dispatch(requestItemsStarted());
    getPokemons().then((pokemons) => dispatch(requestItemsSucceed(pokemons)));
    */

  }, []);

  return (
    <div>
      <h1 className="center">Pokédex</h1>
      <div className="container">
        <div className="row">
          <PokemonSearch term={searchTerm} onTermUpdate={(term) => dispatch(updateSearchTerm(term))} />
          {loading ? <Loader /> : <List items={filteredPokemons} renderItem={renderPokemonCard} />}
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
