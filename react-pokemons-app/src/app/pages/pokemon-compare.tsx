import { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PokemonCardDetails from '../components/pokemon-card-details';
import { CompareContext } from '../helpers/compare-context';
import { Pokemon } from '../models/pokemon';
import { getPokemon } from '../services/pokemon-service';
import { pokemonsToCompareSelector } from '../store/selectors';

function PokemonCompare() {
  const [pokemon1, pokemon2] = useSelector(pokemonsToCompareSelector);

  return (
    <div className="row">
      <div className="col s6">
        <PokemonCardDetails pokemon={pokemon1} />
      </div>
      <div className="col s6">
        <PokemonCardDetails pokemon={pokemon2} />
      </div>
    </div>
  );
}

export default PokemonCompare;
