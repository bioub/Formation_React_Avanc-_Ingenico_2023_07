import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import * as service from '../services/pokemon-service'
import PokemonList from './pokemon-list';
import { afterEach, beforeEach, expect, vitest } from 'vitest';

beforeEach(() => {
  vitest.spyOn(service, 'getPokemons').mockResolvedValue([]);
});

test('PokemonList renders', () => {
  render(<MemoryRouter><PokemonList /></MemoryRouter>);
  expect(service.getPokemons).toHaveBeenCalled();
})

afterEach(() => {
  vitest.restoreAllMocks();
})
