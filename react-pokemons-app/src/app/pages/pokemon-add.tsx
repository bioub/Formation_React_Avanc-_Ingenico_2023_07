import { useState } from 'react';
import PokemonForm from '../components/pokemon-form';
import { Pokemon } from '../models/pokemon';
import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../services/authentication-service';
// import { kebabCase } from 'lodash'

function PokemonAdd() {
  if (!isAuthenticated) {
    return <Navigate to={{ pathname: '/login' }} />;
  }

  function handleClick() {
    import('lodash').then(({ kebabCase }) => {
      console.log(kebabCase('Bonjour à tous'));
    })
  }

  const [pokemon] = useState<Pokemon>({});

  return (
    <div className="row">
      <h2 className="header center">Ajouter un pokémon</h2>
      <PokemonForm pokemon={pokemon} isEditForm={false}></PokemonForm>
      <button onClick={handleClick}>
        Click me
      </button>
    </div>
  );
}

export default PokemonAdd;
