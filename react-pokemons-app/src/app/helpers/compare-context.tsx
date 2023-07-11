import { createContext, PropsWithChildren, useState } from 'react';

type CompareContextType = {
  pokemonsIdsToCompare: Set<number>;
  selectPokemonToCompare(pokemonId: number): void;
}

export const CompareContext = createContext<CompareContextType>({
  pokemonsIdsToCompare: new Set<number>(),
  selectPokemonToCompare(pokemonId: number): void {
  }
})

export function CompareProvider({ children }: PropsWithChildren) {
  const [pokemonsIdsToCompare, setPokemonsToCompare] = useState(new Set<number>())

  function selectPokemonToCompare(pokemonId: number) {
    if (pokemonsIdsToCompare.has(pokemonId)) {
      pokemonsIdsToCompare.delete(pokemonId);
    } else if (pokemonsIdsToCompare.size < 2) {
      pokemonsIdsToCompare.add(pokemonId);
    }
    setPokemonsToCompare(new Set<number>([...pokemonsIdsToCompare]));
  }

  return (
    <CompareContext.Provider value={{pokemonsIdsToCompare, selectPokemonToCompare}}>{children}</CompareContext.Provider>
  );
}
