import { createReducer } from '@reduxjs/toolkit';
import { Pokemon } from '../models/pokemon';
import { requestItems, requestItemsStarted, requestItemsSucceed, updateSearchTerm } from './actions';

export type GlobalState = {
  pokemons: PokemonsState;
  // users: UsersState;
  // invoices: InvoicesState;
}

export type PokemonsState = {
  items: Pokemon[];
  loading: boolean;
  searchTerm: string;
  // Todo idsToCompare...
}

const initialState: PokemonsState = {
  items: [],
  loading: false,
  searchTerm: '',
};

export const pokemonsReducer = createReducer(initialState, (builder) => {
  builder.addCase(updateSearchTerm, (state, action) => {
    state.searchTerm = action.payload;
  })
    .addCase(requestItems.pending, (state, action) => {
      state.loading = true;
      state.items = [];
    }).addCase(requestItems.fulfilled, (state, action) => {
    state.loading = false;
    state.items = action.payload;
  })
    /*
    .addCase(requestItemsStarted, (state, action) => {
    state.loading = true;
    state.items = [];
  }).addCase(requestItemsSucceed, (state, action) => {
    state.loading = false;
    state.items = action.payload;
  })*/
});
