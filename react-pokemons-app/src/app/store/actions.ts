import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { getPokemons } from '../services/pokemon-service';
import { GlobalState } from './reducers';
import { pokemonsSelector } from './selectors';

export const selectId = createAction<number>('@pokemons/selectId');

export const updateSearchTerm = createAction<string>('@pokemons/updateSearchTerm');

/*
export const requestItemsStarted = createAction('@pokemons/requestItemsStarted');
export const requestItemsSucceed = createAction<Pokemon[]>('@pokemons/requestItemsSucceed');
export const requestItemsFailed = createAction('@pokemons/requestItemsFailed');
*/

export const requestItems = createAsyncThunk('@pokemons/requestItems', (_, store) => {
  // On vérifie si les pokemons sont déjà dans Redux (=> cache)
  const { items } = pokemonsSelector(store.getState() as GlobalState);

  // TODO on pourrait stocker le timestamp de la requête pour invalider le cache
  // passé x secondes.
  if (items.length) {
    return items;
  }

  return getPokemons();
});
