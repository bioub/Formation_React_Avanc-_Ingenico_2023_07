import { createReducer } from '@reduxjs/toolkit';
import { Pokemon } from '../models/pokemon';
import {
  requestItems,
  selectId,
  updateSearchTerm,
} from './actions';

export type GlobalState = {
  pokemons: PokemonsState;
  // users: UsersState;
  // invoices: InvoicesState;
};

export type PokemonsState = {
  items: Pokemon[];
  loading: boolean;
  searchTerm: string;
  idsToCompare: number[];
};

const initialState: PokemonsState = {
  items: [],
  loading: false,
  searchTerm: '',
  idsToCompare: [],
};

export const pokemonsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(updateSearchTerm, (state, action) => {
      state.searchTerm = action.payload;
    })
    .addCase(requestItems.pending, (state, action) => {
      state.loading = true;
    })
    .addCase(requestItems.fulfilled, (state, action) => {
      state.loading = false;
      state.items = action.payload;
    })
    .addCase(selectId, (state, action) => {
      if (state.idsToCompare.includes(action.payload)) {
        state.idsToCompare.splice(state.idsToCompare.indexOf(action.payload), 1);
      } else if (state.idsToCompare.length < 2) {
        state.idsToCompare.push(action.payload);
      }
    });

    /*
    sans redux-thunk
    .addCase(requestItemsStarted, (state, action) => {
      state.loading = true;
      state.items = [];
    })
    .addCase(requestItemsSucceed, (state, action) => {
      state.loading = false;
      state.items = action.payload;
    })
    */
});
