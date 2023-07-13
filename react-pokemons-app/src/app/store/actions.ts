import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { Pokemon } from '../models/pokemon';
import { getPokemons } from '../services/pokemon-service';

export const updateSearchTerm = createAction<string>('@pokemons/updateSearchTerm');

/*
export const requestItemsStarted = createAction('@pokemons/requestItemsStarted');
export const requestItemsSucceed = createAction<Pokemon[]>('@pokemons/requestItemsSucceed');

// TODO gérer le cas où le fetch fait un erreur
// export const requestItemsFailed = createAction('@pokemons/requestItemsFailed');
*/

export const requestItems = createAsyncThunk('@pokemons/requestItems', () => {
  return getPokemons();
});
