import { memoize } from 'lodash-es';

const POKEMONS_TEMPLATE = [
  {
    id: 1,
    name: 'Bulbizarre',
    hp: 25,
    cp: 5,
    picture:
      'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png',
    types: ['Plante', 'Poison'],
    created: new Date(),
  },
  {
    id: 2,
    name: 'Salamèche',
    hp: 28,
    cp: 6,
    picture:
      'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png',
    types: ['Feu'],
    created: new Date(),
  },
  {
    id: 3,
    name: 'Carapuce',
    hp: 21,
    cp: 4,
    picture:
      'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png',
    types: ['Eau'],
    created: new Date(),
  },
  {
    id: 4,
    name: 'Aspicot',
    hp: 16,
    cp: 2,
    picture:
      'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/013.png',
    types: ['Insecte', 'Poison'],
    created: new Date(),
  },
  {
    id: 5,
    name: 'Roucool',
    hp: 30,
    cp: 7,
    picture:
      'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/016.png',
    types: ['Normal', 'Vol'],
    created: new Date(),
  },
  {
    id: 6,
    name: 'Rattata',
    hp: 18,
    cp: 6,
    picture:
      'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/019.png',
    types: ['Normal'],
    created: new Date(),
  },
  {
    id: 7,
    name: 'Piafabec',
    hp: 14,
    cp: 5,
    picture:
      'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/021.png',
    types: ['Normal', 'Vol'],
    created: new Date(),
  },
  {
    id: 8,
    name: 'Abo',
    hp: 16,
    cp: 4,
    picture:
      'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/023.png',
    types: ['Poison'],
    created: new Date(),
  },
  {
    id: 9,
    name: 'Pikachu',
    hp: 21,
    cp: 7,
    picture:
      'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png',
    types: ['Electrik'],
    created: new Date(),
  },
  {
    id: 10,
    name: 'Sabelette',
    hp: 19,
    cp: 3,
    picture:
      'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/027.png',
    types: ['Normal'],
    created: new Date(),
  },
  {
    id: 11,
    name: 'Mélofée',
    hp: 25,
    cp: 5,
    picture:
      'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/035.png',
    types: ['Fée'],
    created: new Date(),
  },
  {
    id: 12,
    name: 'Groupix',
    hp: 17,
    cp: 8,
    picture:
      'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/037.png',
    types: ['Feu'],
    created: new Date(),
  },
];
export let POKEMONS = [];

for (let i = 0; i <20_000; i++) {
  POKEMONS = [...POKEMONS, ...POKEMONS_TEMPLATE.map((poke) => ({...poke, id: (poke.id ?? 0) * (i + 1)}))];
}

// la memoisation fonctionne pour les fonctions pures :
// - pour des params d'entrés le retour est toujours le même
// (ex: sum(1, 2) === 3, Math.random() === ???, Date.now() === ???)
// - pas de side-effect, pas d'appels externes (requete HTTP ou localStorage...)
// - ne modifie pas ses params (si tableau ou objet)
function filterPoke(pokemons) {
  return pokemons.filter((poke) => poke.cp < 5);
}

const memoFilterPoke = memoize(filterPoke);

console.time('Temps');
console.log('Nombre : ', memoFilterPoke(POKEMONS).length);
console.timeEnd('Temps');

console.time('Temps');
console.log('Nombre : ', memoFilterPoke(POKEMONS).length);
console.timeEnd('Temps');

// Avec la mémoisation
// les changements devront être immuable
// muable (modifié l'objet existant) :
// POKEMONS.push({cp:1})

// immuable (créé un nouvel objet) :
POKEMONS = [...POKEMONS, {cp:1}];

console.time('Temps');
console.log('Nombre : ', memoFilterPoke(POKEMONS).length);
console.timeEnd('Temps');
