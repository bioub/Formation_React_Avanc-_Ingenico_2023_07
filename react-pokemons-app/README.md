# Exercices

## Rappels

Créer un nouveau composant `src/app/components/pokemon-card-details.tsx` dont le JSX reprend les lignes 27 à 85
de `src/app/pages/pokemon-detail.tsx`

Ce nouveau composant reçoit l'objet pokemon en props (le typer en TS en le rendant optionnel)

Remplacer ensuite les lignes 27 à 85 de `src/app/pages/pokemon-detail.tsx` par ce nouveau composant

Créer une nouvelle page `src/app/pages/pokemon-compare.tsx` contenant le JSX suivant :

```
<div className="row">
  <div className="col s6">
  	<PokemonCardDetails pokemon={pokemon1} />
  </div>
  <div className="col s6">
  	<PokemonCardDetails pokemon={pokemon2} />
  </div>
</div>
```

Les variables `pokemon1` et `pokemon2` doivent contenir les pokemon dont les ids sont `1` et `2`, utiliser le
service `getPokemon` pour les récupérer.

Créer la route dans `app.tsx`, l'URL peut etre par exemple `/pokemons/compare`

Créer un bouton en bas de la page `src/app/pages/pokemon-list.tsx`, sur son click appeler la méthode navigate (voir par
exemple `src/app/components/pokemon-card.tsx`)

Dans le composant `src/app/components/pokemon-card.tsx` déplacer le `onClick` sur un bouton "Details" dans la carte (on
se servira du click de la carte pour séléctionner les éléments à comparer), sur le click il faudra appeler
la `event.stopPropagation()` (pour ne pas déclencher le click des ancetres).

## Context

Créer un context CompareContext en s'inspirant de l'exemple :
[https://github.com/formation-tech/react-communication/tree/master/src/example-context-with-hooks](https://github.com/formation-tech/react-communication/tree/master/src/example-context-with-hooks)

L'idée est de stocker les pokemons à comparer dans le context (en utilisant par exemple un tableau ou un [Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/has)), il faudra limiter à 2 pokemons (vous pouvez augmenter la limite si vous le souhaitez mais il faudra jouer sur le nombre de colonnes dans la page `PokemonCompare`).

Dans `src/app/components/pokemon-card.tsx` écouter le click de la carte (là où vous aviez déplacé le onClick dans l'exercice précédent) pour sélectionner ou déselectionner le Pokemon à comparer. Le lien vers la page `/pokemons/compare` ne devrait être actif que s'il y a 2 pokemons à comparer.

## Fragments + Render Props

Créer un nouveau composant List dans `src/app/components/list.tsx` en partant du code suivant :

```
import { ReactNode } from 'react';

type Props<T> = {
  items: T[];
  renderItem(item: T): ReactNode;
};

function List<T>({ items, renderItem }: Props<T>) {

}

export default List;
```

Ce composant List est générique, il se typera automatiquement avec le type d'élément passé en props à items, ex :

```
<List items={['Rouge', 'Vert', 'Bleu']} renderItem={(element) => <div></div>} />
````

Dans l'exemple ci-dessus on passe le type `string[]` à items, le type de `element` dans `renderItem` sera donc automatiquement `string`.

Dans ce composant List nous allons boucler sur les items et afficher dans le JSX le retour de la fonction `renderItem`, ce JSX sera encapsulé dans un Fragment.

Utiliser ce composant List à la place de `pokemons.map` dans le composant `src/app/pages/pokemon-list.tsx` (on verra demain l'intérêt d'avoir un composant ici)


## Custom Hooks

Dans le composant `MultiSelect`, créer un custom hooks `useEventListener` qui prendra 3 paramètres :
- `element` de type `EventTarget`
- `eventName` de type `string`
- `listener` de type `(event: Event) => void`

Placer le code suivant dans ce custom hook en remplaçant `window`, `'click'` et `listener` par les paramètres de `useEventListener` :

```
 useEffect(() => {
  function listener(event: MouseEvent) {
    if (!hostRef.current?.contains(event.target as HTMLElement)) {
      setMenuOpen(false);
    }
  }

  window.addEventListener('click', listener);
  return () => {
    window.removeEventListener('click', listener);
  };
}, []);
```

## Styling

Installer `classnames`

Transformer le fichier `src/app/components/pokemon-card.css` en module CSS

Utiliser classnames et le nom de classe généré par le module pour l'élément `<div className="card horizontal">`

## React-i18next

Installer react-i18next en dependency et i18next-parser en devDependency

Configurer i18next dans le fichier `main.tsx` comme dans les slides.

Utiliser le hook useTranslation pour traduire les textes présent dans login.tsx (utiliser les clés suivantes) :
- Vous êtes déconnecté. (pikachu / pikachu) : `login.banner.default`
- 👉 Tentative de connexion en cours ... : `login.banner.loading`
- 🔐 Identifiant ou mot de passe incorrect. : `login.banner.error`
- Votre prénom doit faire au moins 3 caractères de long. : `login.firstName.error`
- Votre mot de passe doit faire au moins 6 caractères de long. : `login.password.error`
- Identifiant : `login.username`
- Mot de passe : `login.password`
- Valider : `login.button`

Configurer et extraire les clés de traduction avec `i18next-parser` comme dans les slides (`fr` et `en`)

Remplir les fichiers de traduction.

Créer 2 boutons `fr` et `en` dans le menu pokedex dans `app.tsx`, changer la langue au click de ces boutons (`i18n.changeLanguage('fr')`)
