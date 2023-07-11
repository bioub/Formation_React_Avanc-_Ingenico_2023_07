import { useState, useEffect } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import PokemonCardDetails from '../components/pokemon-card-details';
import { Pokemon } from '../models/pokemon';
import Loader from '../components/loader';
import { formatDate, formatType } from '../helpers';
import { isAuthenticated } from '../services/authentication-service';
import { getPokemon } from '../services/pokemon-service';

function PokemonsDetail() {
  const params = useParams();
  if (!isAuthenticated) {
    return <Navigate to={{ pathname: '/login' }} />;
  }
  const [pokemon, setPokemon] = useState<Pokemon | undefined>();

  useEffect(() => {
    getPokemon(Number(params.id)).then((pokemon) => setPokemon(pokemon));
  }, [params.id]);

  return (
    <div>
      {pokemon ? (
        <div className="row">
          <div className="col s12 m8 offset-m2">
            <PokemonCardDetails pokemon={pokemon} />
          </div>
        </div>
      ) : (
        <h4 className="center">
          <Loader />
        </h4>
      )}
    </div>
  );
}

export default PokemonsDetail;
