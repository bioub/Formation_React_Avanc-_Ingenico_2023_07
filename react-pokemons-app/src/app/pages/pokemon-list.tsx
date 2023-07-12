import { useState, useEffect } from 'react';
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
  useAuthentication();
  const [term, setTerm] = useState('');
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    getPokemons().then((pokemons) => setPokemons(pokemons));
  }, []);

  return (
    <div>
      <h1 className="center">Pokédex</h1>
      <div className="container">
        <div className="row">
          <PokemonSearch term={term} setTerm={setTerm} />
          <List items={pokemons} renderItem={(pokemon) => <PokemonCard key={pokemon.id} pokemon={pokemon} />} />
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
