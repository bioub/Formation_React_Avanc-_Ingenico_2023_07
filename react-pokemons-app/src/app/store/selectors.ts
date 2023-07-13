import { createSelector } from '@reduxjs/toolkit';
import { GlobalState } from './reducers';

export function pokemonsSelector(state: GlobalState) {
  return state.pokemons;
}

// createSelector === useMemo
export const filteredPokemonsSelector = createSelector(
  pokemonsSelector,
  (pokemonsState) => {
    if (pokemonsState.searchTerm === '') {
      return pokemonsState.items;
    }

    return pokemonsState.items.filter((p) => p.name?.toLowerCase().includes(pokemonsState.searchTerm.toLowerCase()))
  }
)

export const pokemonsToCompareSelector = createSelector(
  pokemonsSelector,
  (pokemonsState) => {
    return pokemonsState.idsToCompare.map((id) => pokemonsState.items.find((p) => p.id === id));
  }
)

